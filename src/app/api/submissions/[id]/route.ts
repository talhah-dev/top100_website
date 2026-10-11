import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const db = getDb();
    const row = db.prepare("SELECT * FROM submissions WHERE id = ? OR external_id = ?").get(id, id) as Record<string, unknown> | undefined;

    if (!row) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }

    return NextResponse.json({ submission: row });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch submission", details: String(error) },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const db = getDb();
    const result = db.prepare("DELETE FROM submissions WHERE id = ? OR external_id = ?").run(id, id);

    if (result.changes === 0) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, deletedId: id });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete submission", details: String(error) },
      { status: 500 }
    );
  }
}
