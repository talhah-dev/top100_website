import { NextRequest, NextResponse } from "next/server";
import { executeSearch } from "@/lib/search";
import { getDb } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.trim() || "";
    const area = searchParams.get("area")?.trim() || "";
    const category = searchParams.get("category")?.trim() || "";

    const hasFilter = Boolean(q || (area && area !== "All" && area !== "All Countries") || (category && category !== "All"));

    if (hasFilter) {
      const searchResult = await executeSearch({
        q,
        area,
        category,
        forMap: true,
      });

      const db = getDb();
      const slugs = searchResult.attractions.map((a) => a.slug);

      if (slugs.length > 0) {
        const placeholders = slugs.map(() => "?").join(",");
        const query = `
          SELECT slug as s, name as n, lat, lng, type as t, subtype as st, iconic as ic, town, summary, postcode as pc
          FROM map_places
          WHERE slug IN (${placeholders})
          ORDER BY iconic DESC, name ASC
        `;
        const rows = db.prepare(query).all(...slugs);
        return NextResponse.json(rows);
      }

      return NextResponse.json([]);
    }

    const db = getDb();
    const query = `
      SELECT slug as s, name as n, lat, lng, type as t, subtype as st, iconic as ic, town, summary, postcode as pc
      FROM map_places
      ORDER BY iconic DESC, name ASC
    `;
    const rows = db.prepare(query).all();
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
