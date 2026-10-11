import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const q = searchParams.get("q")?.trim() || ""
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1)
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "25", 10) || 25))
    const offset = (page - 1) * limit

    const db = getDb()

    let total = 0
    let rows: any[] = []

    if (q) {
      const searchPattern = `%${q}%`
      const countRes = db
        .prepare("SELECT COUNT(*) as count FROM assets WHERE filename LIKE ?")
        .get(searchPattern) as { count: number }
      total = countRes?.count || 0

      rows = db
        .prepare(
          "SELECT id, volume_id, folder_id, filename, kind, width, height, size, url, date_created, date_updated FROM assets WHERE filename LIKE ? ORDER BY id DESC LIMIT ? OFFSET ?"
        )
        .all(searchPattern, limit, offset)
    } else {
      const countRes = db
        .prepare("SELECT COUNT(*) as count FROM assets")
        .get() as { count: number }
      total = countRes?.count || 0

      rows = db
        .prepare(
          "SELECT id, volume_id, folder_id, filename, kind, width, height, size, url, date_created, date_updated FROM assets ORDER BY id DESC LIMIT ? OFFSET ?"
        )
        .all(limit, offset)
    }

    return NextResponse.json({
      assets: rows,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch assets", details: (error as Error).message },
      { status: 500 }
    )
  }
}
