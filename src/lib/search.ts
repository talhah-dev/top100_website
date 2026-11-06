import { getDb } from "./db";

export interface SearchParams {
  q?: string;
  area?: string;
  category?: string;
  page?: number;
  limit?: number;
  forMap?: boolean;
}

export interface AttractionResult {
  id: number;
  title: string;
  slug: string;
  uri?: string;
  summary?: string;
  town?: string;
  county?: string;
  area?: string;
  postcode?: string;
  image?: string;
  image_url?: string;
  categories: string[];
  lat?: number;
  lng?: number;
  featured?: boolean;
  distance?: number;
  type?: string;
  subtype?: string;
  iconic?: number;
}

export interface SearchResponse {
  searchType: "area" | "place" | "all";
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  center?: { lat: number; lng: number };
  attractions: AttractionResult[];
}

const TOWNS_COORDS: Record<string, [number, number]> = {
  bradford: [53.795, -1.759],
  halifax: [53.722, -1.856],
  leeds: [53.8, -1.549],
  manchester: [53.48, -2.242],
  liverpool: [53.408, -2.991],
  birmingham: [52.486, -1.89],
  london: [51.507, -0.127],
  llandudno: [53.324, -3.827],
  conwy: [53.28, -3.831],
  bangor: [53.228, -4.129],
  caernarfon: [53.14, -4.277],
  "betws-y-coed": [53.093, -3.8],
  rhyl: [53.319, -3.491],
  "colwyn bay": [53.294, -3.726],
  denbigh: [53.184, -3.417],
  ruthin: [53.114, -3.31],
  wrexham: [53.046, -2.993],
  chester: [53.19, -2.893],
  york: [53.96, -1.087],
  newcastle: [54.978, -1.617],
  bristol: [51.454, -2.587],
  bath: [51.375, -2.359],
  oxford: [51.752, -1.257],
  cambridge: [52.205, 0.121],
  cardiff: [51.481, -3.179],
  swansea: [51.621, -3.943],
  newport: [51.584, -2.997],
  aberystwyth: [52.415, -4.082],
  tenby: [51.672, -4.704],
  belfast: [54.597, -5.93],
  derry: [54.996, -7.309],
  edinburgh: [55.953, -3.188],
  glasgow: [55.864, -4.251],
  inverness: [57.477, -4.224],
  aberdeen: [57.149, -2.094],
  dundee: [56.462, -2.97],
  dublin: [53.349, -6.26],
  cork: [51.898, -8.475],
  galway: [53.27, -9.056],
  windsor: [51.483, -0.604],
  harrogate: [53.992, -1.537],
  huddersfield: [53.645, -1.785],
  sheffield: [53.381, -1.47],
  keswick: [54.601, -3.136],
  windermere: [54.38, -2.906],
  exeter: [50.718, -3.533],
  brighton: [50.822, -0.137],
  skipton: [53.9815, -1.891],
  clitheroe: [53.8948, -2.3293],
};

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
  "Fife",
];

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
  "Swansea & Gower Coast",
  "Gower",
  "Flintshire",
];

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
  "Northern Ireland",
];

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
  "Co. Dublin",
  "Ireland's Islands",
  "Ireland\\'s Islands",
];

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
  "County Durham",
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
  "West Sussex",
  "Northumberland",
  "Wiltshire",
  "Yorkshire Borderlands",
  "London",
  "Cambridgeshire",
  "Berkshire",
  "Northamptonshire",
];

const toInList = (items: string[]) =>
  items.map((s) => `'${s.replace(/'/g, "''")}'`).join(",");

const COUNTRY_AREAS: Record<string, string[]> = {
  wales: WALES_AREAS,
  scotland: SCOTLAND_AREAS,
  england: ENGLAND_AREAS,
  "northern ireland": NI_AREAS,
  ireland: IRELAND_AREAS,
  "british isles": [...WALES_AREAS, ...SCOTLAND_AREAS, ...ENGLAND_AREAS, ...NI_AREAS, ...IRELAND_AREAS],
};

const geoCache = new Map<string, { lat: number; lng: number }>();

let areaTitlesCache: Set<string> | null = null;

export function getAreaTitles(): Set<string> {
  if (!areaTitlesCache) {
    const db = getDb();
    const rows = db.prepare("SELECT title FROM areas").all() as { title: string }[];
    areaTitlesCache = new Set([
      "wales",
      "england",
      "scotland",
      "northern ireland",
      "ireland",
      "british isles",
      ...rows.map((r) => r.title.toLowerCase().trim()),
    ]);
  }
  return areaTitlesCache;
}

export function isExactArea(term: string): boolean {
  if (!term) return false;
  const clean = term.toLowerCase().trim();
  return getAreaTitles().has(clean);
}

export function haversineMiles(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export async function resolveCoordinates(
  term: string
): Promise<{ lat: number; lng: number } | null> {
  const clean = term.toLowerCase().trim();
  if (geoCache.has(clean)) {
    return geoCache.get(clean)!;
  }

  if (TOWNS_COORDS[clean]) {
    const coords = { lat: TOWNS_COORDS[clean][0], lng: TOWNS_COORDS[clean][1] };
    geoCache.set(clean, coords);
    return coords;
  }

  const db = getDb();

  const townRow = db
    .prepare(
      "SELECT lat, lng FROM map_places WHERE lower(town) = ? AND lat IS NOT NULL LIMIT 1"
    )
    .get(clean) as { lat: number; lng: number } | undefined;
  if (townRow) {
    const coords = { lat: townRow.lat, lng: townRow.lng };
    geoCache.set(clean, coords);
    return coords;
  }

  const pcClean = clean.replace(/\s+/g, "");
  const pcRow = db
    .prepare(
      "SELECT lat, lng FROM map_places WHERE REPLACE(lower(postcode), ' ', '') = ? AND lat IS NOT NULL LIMIT 1"
    )
    .get(pcClean) as { lat: number; lng: number } | undefined;
  if (pcRow) {
    const coords = { lat: pcRow.lat, lng: pcRow.lng };
    geoCache.set(clean, coords);
    return coords;
  }

  try {
    const pcRes = await fetch(
      `https://api.postcodes.io/postcodes/${encodeURIComponent(clean)}`
    );
    const pcData = await pcRes.json();
    if (pcData?.result?.latitude && pcData?.result?.longitude) {
      const coords = {
        lat: Number(pcData.result.latitude),
        lng: Number(pcData.result.longitude),
      };
      geoCache.set(clean, coords);
      return coords;
    }
  } catch {}

  try {
    const outcodeMatch = clean.match(/^([a-z]{1,2}[0-9][a-z0-9]?)/i);
    if (outcodeMatch) {
      const outRes = await fetch(
        `https://api.postcodes.io/outcodes/${encodeURIComponent(outcodeMatch[1])}`
      );
      const outData = await outRes.json();
      if (outData?.result?.latitude && outData?.result?.longitude) {
        const coords = {
          lat: Number(outData.result.latitude),
          lng: Number(outData.result.longitude),
        };
        geoCache.set(clean, coords);
        return coords;
      }
    }
  } catch {}

  try {
    const osmRes = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        clean + ", UK"
      )}&format=json&limit=1`,
      { headers: { "User-Agent": "Top100AttractionsApp/1.0" } }
    );
    const osmData = await osmRes.json();
    if (Array.isArray(osmData) && osmData.length > 0 && osmData[0].lat && osmData[0].lon) {
      const coords = {
        lat: Number(osmData[0].lat),
        lng: Number(osmData[0].lon),
      };
      geoCache.set(clean, coords);
      return coords;
    }
  } catch {}

  return null;
}

export async function executeSearch(params: SearchParams): Promise<SearchResponse> {
  const db = getDb();
  const q = params.q?.trim() || "";
  const area = params.area?.trim() || "";
  const category = params.category?.trim() || "";
  const page = Math.max(1, params.page || 1);
  const limit = params.forMap ? 10000 : Math.max(1, params.limit || 18);
  const offset = (page - 1) * limit;

  const targetTerm = (area && area !== "All" && area !== "All Countries" ? area : q).trim();

  const isArea = isExactArea(targetTerm);

  if (targetTerm && isArea) {
    const cleanArea = targetTerm.toLowerCase();
    const conds: string[] = [];
    const sqlParams: (string | number)[] = [];

    if (COUNTRY_AREAS[cleanArea]) {
      const childAreas = COUNTRY_AREAS[cleanArea];
      conds.push(
        `(area IN (${toInList(childAreas)}) OR lower(area) LIKE ? OR lower(county) LIKE ?)`
      );
      sqlParams.push(`%${cleanArea}%`, `%${cleanArea}%`);
    } else {
      conds.push("(lower(area) = ? OR lower(area) LIKE ? OR lower(county) = ?)");
      sqlParams.push(cleanArea, `%${cleanArea}%`, cleanArea);
    }

    if (category && category !== "All") {
      conds.push("categories LIKE ?");
      sqlParams.push(`%"${category}"%`);
    }

    const where = conds.length > 0 ? `WHERE ${conds.join(" AND ")}` : "";

    const countRes = db
      .prepare(`SELECT COUNT(DISTINCT slug) as count FROM attractions ${where}`)
      .get(...sqlParams) as { count: number };
    const total = countRes?.count || 0;

    const rows = db
      .prepare(
        `
      SELECT id, title, slug, uri, summary, town, county, area, postcode,
             image, image_url, categories, lat, lng, MAX(featured) as featured
      FROM attractions
      ${where}
      GROUP BY slug
      ORDER BY title ASC
      LIMIT ? OFFSET ?
    `
      )
      .all(...sqlParams, limit, offset) as Record<string, unknown>[];

    const attractions: AttractionResult[] = rows.map((r) => ({
      id: Number(r.id),
      title: String(r.title || ""),
      slug: String(r.slug || ""),
      uri: r.uri ? String(r.uri) : undefined,
      summary: r.summary ? String(r.summary) : undefined,
      town: r.town ? String(r.town) : undefined,
      county: r.county ? String(r.county) : undefined,
      area: r.area ? String(r.area) : undefined,
      postcode: r.postcode ? String(r.postcode) : undefined,
      image: r.image ? String(r.image) : undefined,
      image_url: r.image_url ? String(r.image_url) : undefined,
      categories:
        typeof r.categories === "string" ? JSON.parse(r.categories) : (r.categories as string[]) || [],
      lat: r.lat !== null && r.lat !== undefined ? Number(r.lat) : undefined,
      lng: r.lng !== null && r.lng !== undefined ? Number(r.lng) : undefined,
      featured: Boolean(r.featured),
    }));

    return {
      searchType: "area",
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      attractions,
    };
  }

  if (targetTerm && !isArea) {
    const coords = await resolveCoordinates(targetTerm);

    if (coords) {
      const conds: string[] = ["lat IS NOT NULL", "lng IS NOT NULL"];
      const sqlParams: (string | number)[] = [];

      if (category && category !== "All") {
        conds.push("categories LIKE ?");
        sqlParams.push(`%"${category}"%`);
      }

      const where = `WHERE ${conds.join(" AND ")}`;

      const allWithCoords = db
        .prepare(
          `
        SELECT id, title, slug, uri, summary, town, county, area, postcode,
               image, image_url, categories, lat, lng, MAX(featured) as featured
        FROM attractions
        ${where}
        GROUP BY slug
      `
        )
        .all(...sqlParams) as Record<string, unknown>[];

      const nearby: AttractionResult[] = [];

      for (const r of allWithCoords) {
        const lat = Number(r.lat);
        const lng = Number(r.lng);
        const dist = haversineMiles(coords.lat, coords.lng, lat, lng);
        if (dist <= 15) {
          nearby.push({
            id: Number(r.id),
            title: String(r.title || ""),
            slug: String(r.slug || ""),
            uri: r.uri ? String(r.uri) : undefined,
            summary: r.summary ? String(r.summary) : undefined,
            town: r.town ? String(r.town) : undefined,
            county: r.county ? String(r.county) : undefined,
            area: r.area ? String(r.area) : undefined,
            postcode: r.postcode ? String(r.postcode) : undefined,
            image: r.image ? String(r.image) : undefined,
            image_url: r.image_url ? String(r.image_url) : undefined,
            categories:
              typeof r.categories === "string"
                ? JSON.parse(r.categories)
                : (r.categories as string[]) || [],
            lat,
            lng,
            featured: Boolean(r.featured),
            distance: Number(dist.toFixed(1)),
          });
        }
      }

      nearby.sort((a, b) => (a.distance || 0) - (b.distance || 0));

      const total = nearby.length;
      const paged = params.forMap ? nearby : nearby.slice(offset, offset + limit);

      return {
        searchType: "place",
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        center: coords,
        attractions: paged,
      };
    }

    const cleanQ = targetTerm.replace(/\s+/g, "");
    const words = targetTerm.split(/\s+/).filter(Boolean);
    const conds: string[] = [];
    const sqlParams: (string | number)[] = [];

    words.forEach((w) => {
      conds.push(
        "(title LIKE ? OR town LIKE ? OR county LIKE ? OR area LIKE ? OR address LIKE ? OR postcode LIKE ? OR REPLACE(postcode, ' ', '') LIKE ? OR summary LIKE ?)"
      );
      const pattern = `%${w}%`;
      const cleanPattern = `%${cleanQ}%`;
      sqlParams.push(
        pattern,
        pattern,
        pattern,
        pattern,
        pattern,
        pattern,
        cleanPattern,
        pattern
      );
    });

    if (category && category !== "All") {
      conds.push("categories LIKE ?");
      sqlParams.push(`%"${category}"%`);
    }

    const where = conds.length > 0 ? `WHERE ${conds.join(" AND ")}` : "";

    const countRes = db
      .prepare(`SELECT COUNT(DISTINCT slug) as count FROM attractions ${where}`)
      .get(...sqlParams) as { count: number };
    const total = countRes?.count || 0;

    const rows = db
      .prepare(
        `
      SELECT id, title, slug, uri, summary, town, county, area, postcode,
             image, image_url, categories, lat, lng, MAX(featured) as featured
      FROM attractions
      ${where}
      GROUP BY slug
      ORDER BY title ASC
      LIMIT ? OFFSET ?
    `
      )
      .all(...sqlParams, limit, offset) as Record<string, unknown>[];

    const attractions: AttractionResult[] = rows.map((r) => ({
      id: Number(r.id),
      title: String(r.title || ""),
      slug: String(r.slug || ""),
      uri: r.uri ? String(r.uri) : undefined,
      summary: r.summary ? String(r.summary) : undefined,
      town: r.town ? String(r.town) : undefined,
      county: r.county ? String(r.county) : undefined,
      area: r.area ? String(r.area) : undefined,
      postcode: r.postcode ? String(r.postcode) : undefined,
      image: r.image ? String(r.image) : undefined,
      image_url: r.image_url ? String(r.image_url) : undefined,
      categories:
        typeof r.categories === "string" ? JSON.parse(r.categories) : (r.categories as string[]) || [],
      lat: r.lat !== null && r.lat !== undefined ? Number(r.lat) : undefined,
      lng: r.lng !== null && r.lng !== undefined ? Number(r.lng) : undefined,
      featured: Boolean(r.featured),
    }));

    return {
      searchType: "place",
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      attractions,
    };
  }

  const conds: string[] = [];
  const sqlParams: (string | number)[] = [];

  if (category && category !== "All") {
    conds.push("categories LIKE ?");
    sqlParams.push(`%"${category}"%`);
  }

  const where = conds.length > 0 ? `WHERE ${conds.join(" AND ")}` : "";

  const countRes = db
    .prepare(`SELECT COUNT(DISTINCT slug) as count FROM attractions ${where}`)
    .get(...sqlParams) as { count: number };
  const total = countRes?.count || 0;

  const rows = db
    .prepare(
      `
    SELECT id, title, slug, uri, summary, town, county, area, postcode,
           image, image_url, categories, lat, lng, MAX(featured) as featured
    FROM attractions
    ${where}
    GROUP BY slug
    ORDER BY title ASC
    LIMIT ? OFFSET ?
  `
    )
    .all(...sqlParams, limit, offset) as Record<string, unknown>[];

  const attractions: AttractionResult[] = rows.map((r) => ({
    id: Number(r.id),
    title: String(r.title || ""),
    slug: String(r.slug || ""),
    uri: r.uri ? String(r.uri) : undefined,
    summary: r.summary ? String(r.summary) : undefined,
    town: r.town ? String(r.town) : undefined,
    county: r.county ? String(r.county) : undefined,
    area: r.area ? String(r.area) : undefined,
    postcode: r.postcode ? String(r.postcode) : undefined,
    image: r.image ? String(r.image) : undefined,
    image_url: r.image_url ? String(r.image_url) : undefined,
    categories:
      typeof r.categories === "string" ? JSON.parse(r.categories) : (r.categories as string[]) || [],
    lat: r.lat !== null && r.lat !== undefined ? Number(r.lat) : undefined,
    lng: r.lng !== null && r.lng !== undefined ? Number(r.lng) : undefined,
    featured: Boolean(r.featured),
  }));

  return {
    searchType: "all",
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    attractions,
  };
}

