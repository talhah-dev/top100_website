import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/db"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const db = getDb()

    const isNumeric = /^\d+$/.test(id)
    const query = isNumeric
      ? "SELECT * FROM attractions WHERE id = ? LIMIT 1"
      : "SELECT * FROM attractions WHERE slug = ? LIMIT 1"

    const param = isNumeric ? parseInt(id, 10) : id
    const row = db.prepare(query).get(param) as Record<string, unknown> | undefined

    if (!row) {
      return NextResponse.json({ error: "Attraction not found" }, { status: 404 })
    }

    const attraction = {
      ...row,
      categories: typeof row.categories === "string" ? JSON.parse(row.categories) : row.categories,
      photos: typeof row.photos === "string" ? JSON.parse(row.photos) : row.photos,
      featured: Boolean(row.featured),
      national_trust: Boolean(row.national_trust),
    }

    return NextResponse.json({ attraction })
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    )
  }
}
