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
      const words = q.split(/\s+/).filter(Boolean)
      if (words.length > 0) {
        words.forEach((word) => {
          conditions.push(
            "(title LIKE ? OR town LIKE ? OR county LIKE ? OR area LIKE ? OR address LIKE ? OR address2 LIKE ? OR postcode LIKE ? OR summary LIKE ? OR description LIKE ? OR categories LIKE ?)"
          )
          const pattern = `%${word}%`
          params.push(pattern, pattern, pattern, pattern, pattern, pattern, pattern, pattern, pattern, pattern)
        })
      }
    }

    if (category && category !== "All") {
      conditions.push("categories LIKE ?")
      params.push(`%"${category}"%`)
    }

    const SCOTLAND_AREAS = [
      "Scottish Borders",
      "Ayrshire & Arran",
      "Dumfries & Galloway",
      "Loch Lomond, The Trossachs, Stirling and The Forth Valley",
      "Highlands",
      "Highland",
      "Edinburgh & The Lothians",
      "Greater Glasgow and The  Clyde Valley",
      "Perthshire",
      "Dundee & Angus",
      "Isle of Skye",
      "Aberdeenshire",
      "Orkney Islands",
      "Argyll & The Islands",
      "Fife"
    ]

    const WALES_AREAS = [
      "Snowdonia Mountain & Coast",
      "Conwy Valley & Denbighshire",
      "Anglesey",
      "Mid Wales & Brecon",
      "Pembrokeshire",
      "Ceredigion / Cardigan Bay",
      "North East Wales",
      "Carmarthenshire",
      "Wye Valley & Vale of Usk",
      "Glamorgan's Coast & Countryside",
      "Glamorgan\\'s Coast & Countryside",
      "Cardiff",
      "South Wales Valleys",
      "Swansea & Gower Coast"
    ]

    const NI_AREAS = [
      "Causeway Coast & Countryside",
      "Belfast",
      "Co. Down",
      "Co. Derry/Londonderry/",
      "Co. Derry/Londonderry",
      "Co. Tyrone",
      "Co. Antrim",
      "Co. Fermanagh",
      "Co. Armagh",
      "Northern Ireland"
    ]

    const IRELAND_AREAS = [
      "Co. Galway",
      "Co. Kerry",
      "Dublin City & Region",
      "Co. Clare",
      "Co. Wicklow",
      "Co. Cork",
      "Co. Mayo",
      "Co. Wexford",
      "Co. Waterford",
      "Co. Meath",
      "Co. Limerick",
      "Co. Donegal",
      "Co. Westmeath",
      "Co. Sligo",
      "Co. Kilkenny",
      "Co. Kildare",
      "Co. Roscommon",
      "Co. Louth",
      "Co. Tipperary",
      "Co. Leitrim",
      "Co. Cavan",
      "Co. Offaly",
      "Co. Monaghan",
      "Co. Carlow",
      "Co. Laois",
      "Co. Longford",
      "Ireland's Islands",
      "Ireland\\'s Islands"
    ]

    const ENGLAND_AREAS = [
      "North Yorkshire",
      "Cumbria",
      "Lancashire",
      "Cheshire",
      "West Yorkshire",
      "Gloucestershire",
      "Shropshire",
      "Derbyshire",
      "Devon",
      "Oxfordshire",
      "Cornwall",
      "Worcestershire",
      "Greater Manchester",
      "Herefordshire",
      "East Riding, Hull & The Wolds",
      "Dorset",
      "Staffordshire",
      "Liverpool",
      "Warwickshire",
      "Somerset",
      "Lincolnshire",
      "Nottinghamshire",
      "Suffolk",
      "Durham",
      "Norfolk",
      "Leicestershire",
      "Hampshire",
      "Kent",
      "Bath, Bristol City & Region",
      "Yorkshire NW",
      "Wirral Peninsula",
      "Isle of Wight",
      "West Midlands & The Black Country",
      "South Yorkshire",
      "East Sussex",
      "Northumberland",
      "Wiltshire",
      "Yorkshire Borderlands",
      "London"
    ]

    const toInList = (items: string[]) => items.map((s) => `'${s.replace(/'/g, "''")}'`).join(",")

    const REGION_CLAUSES: Record<string, string> = {
      England:
        `(area IN (${toInList(ENGLAND_AREAS)}) OR area LIKE '%England%' OR town LIKE '%London%' OR address LIKE '%London%' OR county IN ('North Yorkshire','West Yorkshire','South Yorkshire','Yorkshire','Cumbria','Lancashire','Cheshire','Derbyshire','Shropshire','Cornwall','Devon','Dorset','Somerset','Gloucestershire','Hampshire','Kent','East Sussex','West Sussex','Surrey','Berkshire','Oxfordshire','Buckinghamshire','Bedfordshire','Hertfordshire','Essex','Suffolk','Norfolk','Cambridgeshire','Northamptonshire','Warwickshire','Worcestershire','Herefordshire','Staffordshire','Leicestershire','Rutland','Lincolnshire','Nottinghamshire','Northumberland','County Durham','Tyne and Wear','Greater Manchester','Merseyside','London','Greater London','Wiltshire','Bristol'))`,
      Wales:
        `(area IN (${toInList(WALES_AREAS)}) OR area LIKE '%Wales%' OR county IN ('Gwynedd','Conwy','Anglesey','Powys','Pembrokeshire','Ceredigion','Carmarthenshire','Denbighshire','Flintshire','Wrexham','Monmouthshire','Newport','Cardiff','Swansea','Neath Port Talbot','Bridgend','Rhondda Cynon Taf','Merthyr Tydfil','Caerphilly','Blaenau Gwent','Torfaen','Vale of Glamorgan'))`,
      "Northern Ireland":
        `(area IN (${toInList(NI_AREAS)}) OR area LIKE '%Northern Ireland%' OR county IN ('Co. Antrim','Co. Down','Co. Londonderry','Co. Tyrone','Co. Armagh','Co. Fermanagh'))`,
      Ireland:
        `(area IN (${toInList(IRELAND_AREAS)}) OR area LIKE '%Ireland%' OR area LIKE '%Dublin%')`,
      Scotland:
        `(area IN (${toInList(SCOTLAND_AREAS)}) OR area LIKE '%Scotland%' OR county IN ('Dumfries & Galloway','Scottish Borders','Highland','Highlands','Aberdeenshire','Fife','Perth & Kinross','Stirling','Argyll & Bute','City of Edinburgh','Glasgow City','Angus','Moray','South Ayrshire','North Ayrshire','East Lothian','Midlothian','West Lothian'))`,
      London: "(area LIKE '%London%' OR county LIKE '%London%' OR town LIKE '%London%' OR address LIKE '%London%')",
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
        conditions.push("(area LIKE ? OR county LIKE ? OR town LIKE ? OR address LIKE ? OR address2 LIKE ? OR postcode LIKE ?)")
        const pattern = `%${area}%`
        params.push(pattern, pattern, pattern, pattern, pattern, pattern)
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
