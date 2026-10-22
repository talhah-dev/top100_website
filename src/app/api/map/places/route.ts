import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.trim() || "";
    const type = searchParams.get("type")?.trim() || "";
    const subtype = searchParams.get("subtype")?.trim() || "";

    const db = getDb();
    const conditions: string[] = [];
    const params: (string | number)[] = [];

    if (q) {
      conditions.push("(name LIKE ? OR town LIKE ? OR summary LIKE ?)");
      const pattern = `%${q}%`;
      params.push(pattern, pattern, pattern);
    }

    if (type) {
      conditions.push("type LIKE ?");
      params.push(`%${type}%`);
    }

    if (subtype) {
      conditions.push("subtype = ?");
      params.push(subtype);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";
    const query = `
      SELECT slug as s, name as n, lat, lng, type as t, subtype as st, iconic as ic, town, summary
      FROM map_places
      ${whereClause}
      ORDER BY iconic DESC, name ASC
    `;

    const rows = db.prepare(query).all(...params);
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
