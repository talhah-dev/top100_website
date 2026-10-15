import { getDb } from "@/lib/db";
import { COUNTRIES, CountryData, CountryArea, CountryPick } from "@/components/country/country-data";

export const COUNTRY_AREAS: Record<string, string[]> = {
  wales: [
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
  ],
  scotland: [
    "Scottish Borders",
    "Ayrshire & Arran",
    "Dumfries & Galloway",
    "Edinburgh",
    "Glasgow",
    "Highlands"
  ],
  "northern-ireland": [
    "Causeway Coast & Countryside",
    "Belfast",
    "Co. Down",
    "Co. Derry/Londonderry/",
    "Co. Derry/Londonderry",
    "Co. Tyrone",
    "Co. Antrim"
  ],
  ireland: [
    "Causeway Coast & Countryside",
    "Co. Galway",
    "Co. Kerry",
    "Co. Down",
    "Dublin City & Region",
    "Co. Clare",
    "Co. Wicklow",
    "Co. Cork",
    "Co. Derry/Londonderry/",
    "Co. Derry/Londonderry",
    "Co. Mayo",
    "Belfast",
    "Co. Wexford",
    "Co. Waterford",
    "Co. Tyrone",
    "Co. Meath",
    "Co. Limerick"
  ],
  england: [
    "North Yorkshire",
    "Cumbria",
    "Lancashire",
    "Cheshire",
    "West Yorkshire",
    "Gloucestershire",
    "Shropshire",
    "Derbyshire"
  ]
};

const AREA_IMAGES: Record<string, string> = {
  "Snowdonia Mountain & Coast": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=70",
  "Conwy Valley & Denbighshire": "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?w=800&q=70",
  "Anglesey": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=70",
  "Pembrokeshire": "https://images.unsplash.com/photo-1557316276-20a327b894c9?w=800&q=70",
  "North Yorkshire": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=70",
  "Cumbria": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=70",
  "Lancashire": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=70",
  "Scottish Borders": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=70",
  "Dumfries & Galloway": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=70",
  "Causeway Coast & Countryside": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=70",
  "Co. Galway": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=70",
  "Co. Kerry": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=70"
};

export function getDynamicCountryData(slug: string): CountryData | undefined {
  const normalized = slug.toLowerCase().trim();
  const key = normalized === "nireland" ? "northern-ireland" : normalized;
  const base = COUNTRIES[key];
  if (!base) return undefined;

  const targetAreas = COUNTRY_AREAS[key] || [];
  if (targetAreas.length === 0) return base;

  try {
    const db = getDb();
    const placeholders = targetAreas.map(() => "?").join(",");

    const areaRows = db.prepare(`
      SELECT area, count(1) as total 
      FROM attractions 
      WHERE area IN (${placeholders}) 
      GROUP BY area 
      ORDER BY total DESC 
      LIMIT 3
    `).all(...targetAreas) as Array<{ area: string; total: number }>;

    const dynamicAreas: CountryArea[] = areaRows.map((row, idx) => {
      const cleanArea = row.area.replace(/\\'/g, "'");
      const existingArea = base.areas[idx];
      return {
        badge: existingArea?.badge || "Featured Region",
        title: cleanArea,
        subtitle: `${row.total.toLocaleString()} curated attractions`,
        img: AREA_IMAGES[cleanArea] || existingArea?.img || "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=70",
        alt: cleanArea,
        link: `/search?q=${encodeURIComponent(cleanArea)}`
      };
    });

    const attractionRows = db.prepare(`
      SELECT id, title, area, town, summary, review, image_url, categories, featured
      FROM attractions
      WHERE area IN (${placeholders})
      GROUP BY title
      ORDER BY (CASE WHEN featured = 1 THEN 0 ELSE 1 END),
               (CASE WHEN review != '' AND review IS NOT NULL AND review != '<p></p>' THEN 0 ELSE 1 END),
               (CASE WHEN image_url != '' AND image_url IS NOT NULL AND image_url NOT LIKE '%logo%' THEN 0 ELSE 1 END),
               id DESC
      LIMIT 10
    `).all(...targetAreas) as Array<{
      id: number;
      title: string;
      area: string;
      town: string;
      summary: string | null;
      review: string | null;
      image_url: string | null;
      categories: string | null;
      featured: number;
    }>;

    const dynamicPicks: CountryPick[] = attractionRows.map((row, idx) => {
      const rawText = row.review || row.summary || "";
      const cleaned = rawText
        .replace(/\\n|\\r/g, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&rsquo;/g, "’")
        .replace(/&lsquo;/g, "‘")
        .replace(/&ldquo;/g, "“")
        .replace(/&rdquo;/g, "”")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, " ")
        .trim();

      const quoteText = cleaned.length > 20
        ? (cleaned.length > 130 ? cleaned.substring(0, 127) + "..." : cleaned)
        : `One of the most remarkable visits in ${base.name}.`;

      const existingPick = base.picks[idx];

      return {
        badge: row.area.replace(/\\'/g, "'") || `${base.name}`,
        title: row.title,
        quote: quoteText,
        img: row.image_url || existingPick?.img || "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=70",
        alt: row.title,
        featured: idx === 1 || row.featured === 1,
        link: `/detail?id=${row.id}`
      };
    });

    return {
      ...base,
      areas: dynamicAreas.length > 0 ? dynamicAreas : base.areas,
      picks: dynamicPicks.length > 0 ? dynamicPicks : base.picks
    };
  } catch (err) {
    return base;
  }
}
