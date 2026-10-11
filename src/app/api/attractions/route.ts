import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const q = searchParams.get("q")?.trim() || ""
    const category = searchParams.get("category")?.trim() || ""
    const area = searchParams.get("area")?.trim() || ""
    const featured = searchParams.get("featured")
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10))
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "12", 10)))
    const offset = (page - 1) * limit

    const db = getDb()

    const conditions: string[] = []
    const params: (string | number)[] = []

    if (q) {
      conditions.push("(title LIKE ? OR town LIKE ? OR county LIKE ? OR summary LIKE ?)")
      const pattern = `%${q}%`
      params.push(pattern, pattern, pattern, pattern)
    }

    if (category && category !== "All") {
      conditions.push("categories LIKE ?")
      params.push(`%"${category}"%`)
    }

    if (area && area !== "All") {
      conditions.push("area = ?")
      params.push(area)
    }

    if (featured === "true" || featured === "1") {
      conditions.push("featured = 1")
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : ""

    const countQuery = `SELECT COUNT(DISTINCT slug) as count FROM attractions ${whereClause}`
    const countResult = db.prepare(countQuery).get(...params) as { count: number }
    const total = countResult?.count || 0

    const selectQuery = `
      SELECT id, title, slug, uri, summary, town, county, area,
             image, image_url, categories, lat, lng, MAX(featured) as featured
      FROM attractions
      ${whereClause}
      GROUP BY slug
      ORDER BY featured DESC, order_priority ASC, title ASC
      LIMIT ? OFFSET ?
    `
    const rows = db.prepare(selectQuery).all(...params, limit, offset) as Record<string, unknown>[]

    const attractions = rows.map((row) => ({
      ...row,
      categories: typeof row.categories === "string" ? JSON.parse(row.categories) : row.categories,
      featured: Boolean(row.featured),
    }))

    return NextResponse.json({
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      attractions,
    })
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    )
  }
}
