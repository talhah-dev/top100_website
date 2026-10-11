import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "50", 10)));
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const offset = (page - 1) * limit;

    const db = getDb();

    const countResult = db.prepare("SELECT COUNT(*) as count FROM submissions").get() as { count: number };
    const total = countResult?.count || 0;

    const rows = db.prepare(`
      SELECT id, external_id, form, subject, fromName, fromEmail, telephone, referral, message, dateCreated, dateUpdated, status
      FROM submissions
      ORDER BY dateCreated DESC, id DESC
      LIMIT ? OFFSET ?
    `).all(limit, offset) as Record<string, unknown>[];

    const submissions = rows.map((r) => ({
      id: String(r.id),
      form: String(r.form || "contact"),
      subject: String(r.subject || "Website Inquiry"),
      fromName: String(r.fromName || "Anonymous"),
      fromEmail: String(r.fromEmail || ""),
      telephone: r.telephone ? String(r.telephone) : undefined,
      referral: r.referral ? String(r.referral) : undefined,
      message: String(r.message || ""),
      dateCreated: String(r.dateCreated || ""),
      status: String(r.status || "new"),
    }));

    return NextResponse.json({
      submissions,
      total,
      page,
      limit,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch form submissions", details: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fromName, fromEmail, subject, message, telephone, referral, form } = body;

    if (!fromName || !fromEmail || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const db = getDb();
    const now = new Date().toISOString().replace("T", " ").substring(0, 19);

    const stmt = db.prepare(`
      INSERT INTO submissions (form, subject, fromName, fromEmail, telephone, referral, message, dateCreated, dateUpdated, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      form || "contact",
      subject || "Website Inquiry",
      fromName.trim(),
      fromEmail.trim(),
      telephone?.trim() || null,
      referral?.trim() || null,
      message.trim(),
      now,
      now,
      "new"
    );

    const newId = result.lastInsertRowid;
    const newSubmission = db.prepare("SELECT * FROM submissions WHERE id = ?").get(newId);

    return NextResponse.json(
      { success: true, submission: newSubmission },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create form submission", details: String(error) },
      { status: 500 }
    );
  }
}
