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

    const REGION_CLAUSES: Record<string, string> = {
      England:
        "(area LIKE '%England%' OR county IN ('North Yorkshire','West Yorkshire','South Yorkshire','Yorkshire','Cumbria','Lancashire','Cheshire','Derbyshire','Shropshire','Cornwall','Devon','Dorset','Somerset','Gloucestershire','Hampshire','Kent','East Sussex','West Sussex','Surrey','Berkshire','Oxfordshire','Buckinghamshire','Bedfordshire','Hertfordshire','Essex','Suffolk','Norfolk','Cambridgeshire','Northamptonshire','Warwickshire','Worcestershire','Herefordshire','Staffordshire','Leicestershire','Rutland','Lincolnshire','Nottinghamshire','Northumberland','County Durham','Tyne and Wear','Greater Manchester','Merseyside','London','Greater London','Wiltshire','Bristol') OR area IN ('North Yorkshire','West Yorkshire','South Yorkshire','Yorkshire Borderlands','Yorkshire NW','Cumbria','Lancashire','Cheshire','Derbyshire','Shropshire','Cornwall','Devon','Dorset','Somerset','Gloucestershire','Bath, Bristol City & Region','Hampshire','Kent','East Sussex','West Sussex','Berkshire','Oxfordshire','Essex','Suffolk','Norfolk','Cambridgeshire','Northamptonshire','Warwickshire','Worcestershire','Herefordshire','Staffordshire','Leicestershire','Lincolnshire','Nottinghamshire','Northumberland','County Durham','Durham','East Riding, Hull & The Wolds','Greater Manchester','Liverpool','Wirral Peninsula','Isle of Wight','West Midlands & The Black Country') OR town LIKE '%London%')",
      Wales:
        "(area LIKE '%Wales%' OR county IN ('Gwynedd','Conwy','Anglesey','Powys','Pembrokeshire','Ceredigion','Carmarthenshire','Denbighshire','Flintshire','Wrexham','Monmouthshire','Newport','Cardiff','Swansea','Neath Port Talbot','Bridgend','Rhondda Cynon Taf','Merthyr Tydfil','Caerphilly','Blaenau Gwent','Torfaen','Vale of Glamorgan') OR area IN ('Snowdonia Mountain & Coast','Anglesey','Mid Wales & Brecon','North East Wales','Pembrokeshire','Ceredigion / Cardigan Bay','Carmarthenshire','Wye Valley & Vale of Usk','Conwy Valley & Denbighshire'))",
      "Northern Ireland":
        "(area LIKE '%Causeway Coast%' OR area LIKE '%Belfast%' OR area LIKE '%Northern Ireland%' OR county IN ('Co. Antrim','Co. Down','Co. Londonderry','Co. Tyrone','Co. Armagh','Co. Fermanagh'))",
      Ireland:
        "(area LIKE '%Ireland%' OR area LIKE '%Dublin%' OR county IN ('Co. Galway','Co. Kerry','Co. Cork','Co. Clare','Co. Mayo','Co. Meath','Co. Waterford','Co. Dublin','Co. Wicklow','Co. Donegal','Co. Wexford','Co. Kilkenny','Co. Limerick','Co. Sligo','Co. Tipperary','Co. Kildare','Co. Louth','Co. Westmeath','Co. Cavan','Co. Monaghan','Co. Roscommon','Co. Leitrim','Co. Laois','Co. Offaly','Co. Carlow','Co. Longford'))",
      Scotland:
        "(area LIKE '%Scotland%' OR area LIKE '%Highland%' OR area LIKE '%Edinburgh%' OR area LIKE '%Glasgow%' OR county IN ('Dumfries & Galloway','Scottish Borders','Highland','Highlands','Aberdeenshire','Fife','Perth & Kinross','Stirling','Argyll & Bute','City of Edinburgh','Glasgow City','Angus','Moray','South Ayrshire','North Ayrshire','East Lothian','Midlothian','West Lothian'))",
      London: "(area LIKE '%London%' OR county LIKE '%London%' OR town LIKE '%London%')",
      Cornwall: "(area LIKE '%Cornwall%' OR county LIKE '%Cornwall%')",
      Cumbria: "(area LIKE '%Cumbria%' OR county LIKE '%Cumbria%')",
      Devon: "(area LIKE '%Devon%' OR county LIKE '%Devon%')",
      Yorkshire: "(area LIKE '%Yorkshire%' OR county LIKE '%Yorkshire%')",
      "Bath & Bristol": "(area LIKE '%Bath%' OR area LIKE '%Bristol%' OR town LIKE '%Bath%' OR town LIKE '%Bristol%')",
    }

    if (area && area !== "All") {
      if (REGION_CLAUSES[area]) {
        conditions.push(REGION_CLAUSES[area])
      } else {
        conditions.push("(area LIKE ? OR county LIKE ? OR town LIKE ?)")
        const pattern = `%${area}%`
        params.push(pattern, pattern, pattern)
      }
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
