export interface CountryArea {
  badge: string;
  title: string;
  subtitle: string;
  img: string;
  alt: string;
  link: string;
}

export interface CountryPick {
  badge: string;
  title: string;
  quote: string;
  img: string;
  alt: string;
  featured?: boolean;
  link: string;
}

export interface CountryFilm {
  badge: string;
  title: string;
  subtitle: string;
  img: string;
  alt: string;
  videoUrl?: string;
}

export interface CountryData {
  slug: string;
  name: string;
  heroImage: string;
  heroImageAlt: string;
  flagUrl?: string;
  flagColors: string[];
  eyebrow: string;
  headline: string;
  headlineGradient: string;
  subheadline: string;
  introEyebrow: string;
  introText: string;
  areasCap: string;
  areas: CountryArea[];
  picksCap: string;
  picks: CountryPick[];
  film?: CountryFilm;
  quote: string;
  quoteAuthor: string;
}

export const COUNTRIES: Record<string, CountryData> = {
  wales: {
    slug: "wales",
    name: "Wales",
    heroImage: "https://images.unsplash.com/photo-1576413209841-efe9c2cd11aa?w=2000&q=75",
    heroImageAlt: "Glacial lake in a green cwm below Snowdonia ridges",
    flagColors: ["rgba(255,255,255,.88)", "#00843D"],
    eyebrow: "The Nations · Wales",
    headline: "Wales,",
    headlineGradient: "properly.",
    subheadline: "Castles that wrote the rulebook, gardens that ignore it, and mountains keeping an eye on both.",
    introEyebrow: "The Standard Travels",
    introText: "Every place on this page has been walked, eaten in or slept in before it was written up. This is Wales on its best behaviour, and the standard does not bend for anyone.",
    areasCap: "NORTH WALES FIRST",
    areas: [
      {
        badge: "National Park",
        title: "Eryri · Snowdonia",
        subtitle: "The high country.",
        img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=70",
        alt: "Green upland valley with crags",
        link: "/search?q=Snowdonia",
      },
      {
        badge: "Coast & Castles",
        title: "Caernarfon & the Llŷn",
        subtitle: "Where the strait meets the sea.",
        img: "https://images.unsplash.com/photo-1557316276-20a327b894c9?w=800&q=70",
        alt: "Caernarfon Castle floodlit at sunset",
        link: "/search?q=Caernarfon",
      },
      {
        badge: "Woods & Water",
        title: "Betws-y-Coed & the Vale of Conwy",
        subtitle: "Woods, water and slate.",
        img: "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?w=800&q=70",
        alt: "Misty autumn woodland path",
        link: "/search?q=Conwy",
      },
    ],
    picksCap: "ATTRACTIONS · STAYS · EATING OUT",
    picks: [
      {
        badge: "Attraction · Wales",
        title: "Conwy Castle",
        quote: "Eight towers that have never needed an introduction.",
        img: "https://images.unsplash.com/photo-1697403471010-5b1b1f51236c?w=800&q=70",
        alt: "Conwy Castle",
        link: "/search?q=Conwy%20Castle",
      },
      {
        badge: "Garden · Wales",
        title: "Bodnant Garden",
        quote: "Eighty acres that outclass most countries.",
        img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=70",
        alt: "Bodnant Garden",
        featured: true,
        link: "/search?q=Bodnant%20Garden",
      },
      {
        badge: "Hotel · Wales",
        title: "Bodysgallen Hall & Spa",
        quote: "A seventeenth century manor with Snowdonia filling every window.",
        img: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&q=70",
        alt: "Bodysgallen Hall & Spa",
        link: "/search?q=Bodysgallen%20Hall",
      },
      {
        badge: "Hotel · Wales",
        title: "The Quay Hotel & Spa",
        quote: "Deganwy’s front-row seat on the estuary.",
        img: "https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&q=70",
        alt: "The Quay Hotel & Spa",
        link: "/search?q=The%20Quay%20Hotel",
      },
      {
        badge: "Restaurant · Wales",
        title: "The Jackdaw",
        quote: "Modern Welsh cooking with serious ambition, five minutes from the castle walls.",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=70",
        alt: "The Jackdaw",
        link: "/search?q=The%20Jackdaw",
      },
      {
        badge: "Restaurant · Wales",
        title: "Paysanne",
        quote: "French at heart, Welsh in its produce.",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=70",
        alt: "Paysanne",
        link: "/search?q=Paysanne",
      },
    ],
    film: {
      badge: "The Wales Film",
      title: "Sixty seconds of Wales.",
      subtitle: "Each nation carries its own film, chosen in the CRM.",
      img: "https://images.unsplash.com/photo-1576063346885-d30610dfc98a?w=2000&q=75",
      alt: "Boats on Conwy quay below the castle wall",
    },
    quote: "Wales is the shortest distance between a castle and a tasting menu.",
    quoteAuthor: "STEVENSON’S GUIDES",
  },
  england: {
    slug: "england",
    name: "England",
    heroImage: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=2000&q=75",
    heroImageAlt: "Tower Bridge and the River Thames at twilight, London",
    flagColors: ["rgba(255,255,255,.9)", "#C31A35"],
    eyebrow: "The Nations · England",
    headline: "England,",
    headlineGradient: "properly.",
    subheadline: "Ancient cathedral cities, world-class estates, iconic skylines, and untamed coastlines.",
    introEyebrow: "The Standard Travels",
    introText: "From the historic spires of Oxford to the dramatic cliffs of Cornwall, England blends thousands of years of living history with peerless hospitality.",
    areasCap: "EXPLORE ICONIC REGIONS",
    areas: [
      {
        badge: "National Park",
        title: "The Lake District",
        subtitle: "England’s grandest fells and waters.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=70",
        alt: "Misty tranquil lake in Cumbria",
        link: "/search?q=Lake%20District",
      },
      {
        badge: "Heritage & Stone",
        title: "The Cotswolds & Bath",
        subtitle: "Honey-coloured villages and Roman springs.",
        img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=70",
        alt: "Historic English streets and heritage",
        link: "/search?q=Cotswolds",
      },
      {
        badge: "Capital Iconic",
        title: "London & The Thames",
        subtitle: "The world’s cultural crossroads.",
        img: "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800&q=70",
        alt: "London landmarks and Big Ben",
        link: "/search?q=London",
      },
    ],
    picksCap: "ATTRACTIONS · STAYS · EATING OUT",
    picks: [
      {
        badge: "Attraction · England",
        title: "Tower of London",
        quote: "Nearly a thousand years of unbroken royal drama.",
        img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=70",
        alt: "Tower of London",
        link: "/search?q=Tower%20of%20London",
      },
      {
        badge: "Garden · England",
        title: "The Eden Project",
        quote: "Futuristic biodomes nestled in the Cornish earth.",
        img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=70",
        alt: "Eden Project biomes",
        featured: true,
        link: "/search?q=Eden%20Project",
      },
      {
        badge: "Attraction · England",
        title: "Windsor Great Park",
        quote: "Sweeping avenues, ancient oaks, and royal horizons.",
        img: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&q=70",
        alt: "Windsor Great Park",
        link: "/search?q=Windsor%20Great%20Park",
      },
      {
        badge: "Hotel · England",
        title: "The Savoy",
        quote: "A golden age landmark on the Strand with timeless British grandeur.",
        img: "https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&q=70",
        alt: "The Savoy London",
        link: "/search?q=The%20Savoy",
      },
      {
        badge: "Restaurant · England",
        title: "L'Enclume",
        quote: "Pioneering farm-to-table cuisine in the heart of Cartmel.",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=70",
        alt: "Fine dining in England",
        link: "/search?q=Enclume",
      },
      {
        badge: "Historical · England",
        title: "Blenheim Palace",
        quote: "Monumental Baroque architecture surrounded by Capability Brown parkland.",
        img: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=70",
        alt: "Blenheim Palace",
        link: "/search?q=Blenheim%20Palace",
      },
    ],
    film: {
      badge: "The England Film",
      title: "Sixty seconds of England.",
      subtitle: "Grand palaces, rolling downs, and unforgettable journeys.",
      img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=2000&q=75",
      alt: "English landscape and cityscape panorama",
    },
    quote: "England rewards those who take the slower, quieter road.",
    quoteAuthor: "STEVENSON’S GUIDES",
  },
  scotland: {
    slug: "scotland",
    name: "Scotland",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=75",
    heroImageAlt: "Dramatic Highland mountains and lochs in Scotland",
    flagColors: ["#005EB8", "rgba(255,255,255,.9)"],
    eyebrow: "The Nations · Scotland",
    headline: "Scotland,",
    headlineGradient: "properly.",
    subheadline: "Dramatic glens, ancient royal fortresses, misty isles, and lochs cut deep into the bedrock.",
    introEyebrow: "The Standard Travels",
    introText: "Wilderness with an edge of nobility. Scotland’s standard is built on centuries of proud craft, legendary warmth, and unmatched Highland scenery.",
    areasCap: "HIGHLANDS & BEYOND",
    areas: [
      {
        badge: "High Country",
        title: "The Highlands & Glencoe",
        subtitle: "Vast skies and legendary glens.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=70",
        alt: "Dramatic Scottish glen",
        link: "/search?q=Glencoe",
      },
      {
        badge: "Royal Capital",
        title: "Edinburgh & Lothians",
        subtitle: "Volcanic crags and medieval Old Town streets.",
        img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=70",
        alt: "Edinburgh Castle skyline",
        link: "/search?q=Edinburgh",
      },
      {
        badge: "Island Coast",
        title: "Isle of Skye & The Hebrides",
        subtitle: "Serrated pinnacles and wild Atlantic waters.",
        img: "https://images.unsplash.com/photo-1557316276-20a327b894c9?w=800&q=70",
        alt: "Isle of Skye crags",
        link: "/search?q=Skye",
      },
    ],
    picksCap: "ATTRACTIONS · STAYS · EATING OUT",
    picks: [
      {
        badge: "Attraction · Scotland",
        title: "Edinburgh Castle",
        quote: "Dominating the city skyline upon its ancient volcanic throne.",
        img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=70",
        alt: "Edinburgh Castle",
        link: "/search?q=Edinburgh%20Castle",
      },
      {
        badge: "Historical · Scotland",
        title: "Glenfinnan Viaduct",
        quote: "Curving over the Highlands with unforgettable historic grandeur.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=70",
        alt: "Glenfinnan Viaduct",
        featured: true,
        link: "/search?q=Glenfinnan",
      },
      {
        badge: "Hotel · Scotland",
        title: "The Gleneagles Hotel",
        quote: "A glorious estate for sporting, luxury dining, and Highland spa retreat.",
        img: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&q=70",
        alt: "Gleneagles Hotel",
        link: "/search?q=Gleneagles",
      },
      {
        badge: "Restaurant · Scotland",
        title: "The Witchery",
        quote: "Decadent Scottish seasonal produce beneath ancient tapestries.",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=70",
        alt: "The Witchery Edinburgh",
        link: "/search?q=The%20Witchery",
      },
      {
        badge: "Attraction · Scotland",
        title: "Eilean Donan Castle",
        quote: "Perhaps the most iconic island castle in the Western Highlands.",
        img: "https://images.unsplash.com/photo-1697403471010-5b1b1f51236c?w=800&q=70",
        alt: "Eilean Donan Castle",
        link: "/search?q=Eilean%20Donan",
      },
      {
        badge: "Hotel · Scotland",
        title: "The Balmoral",
        quote: "Princes Street’s landmark hotel with royal service and whisky bar.",
        img: "https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&q=70",
        alt: "The Balmoral Hotel",
        link: "/search?q=The%20Balmoral",
      },
    ],
    film: {
      badge: "The Scotland Film",
      title: "Sixty seconds of Scotland.",
      subtitle: "Where mountains meet sea lochs under dramatic northern skies.",
      img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=2000&q=75",
      alt: "Scottish Highlands panorama",
    },
    quote: "Scotland does not compromise on beauty or character.",
    quoteAuthor: "STEVENSON’S GUIDES",
  },
  ireland: {
    slug: "ireland",
    name: "Ireland",
    heroImage: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=2000&q=75",
    heroImageAlt: "Cobh Cathedral overlooking picturesque colorful seaside houses in Ireland",
    flagColors: ["#00843D", "rgba(255,255,255,.9)", "#FF7900"],
    eyebrow: "The Nations · Ireland",
    headline: "Ireland,",
    headlineGradient: "properly.",
    subheadline: "Atlantic cliffs, vibrant hearth fires, emerald pastures, and hospitality that knows no clock.",
    introEyebrow: "The Standard Travels",
    introText: "The Emerald Isle demands to be felt rather than merely seen. Every cliff, townland, and country manor carries stories written across millennia.",
    areasCap: "WILD ATLANTIC & ANCIENT EAST",
    areas: [
      {
        badge: "Ocean & Cliffs",
        title: "The Wild Atlantic Way",
        subtitle: "Towering sea cliffs and windswept bays.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=70",
        alt: "Atlantic coastal cliffs",
        link: "/search?q=Atlantic%20Way",
      },
      {
        badge: "Culture & Music",
        title: "Dublin & The Pale",
        subtitle: "Literary history, cobbled lanes, and warm fires.",
        img: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=70",
        alt: "Dublin city view",
        link: "/search?q=Dublin",
      },
      {
        badge: "Lakes & Mountains",
        title: "County Kerry & Killarney",
        subtitle: "Lakes, waterfalls, and mountain passes.",
        img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=70",
        alt: "County Kerry valley",
        link: "/search?q=Kerry",
      },
    ],
    picksCap: "ATTRACTIONS · STAYS · EATING OUT",
    picks: [
      {
        badge: "Attraction · Ireland",
        title: "Cliffs of Moher",
        quote: "Seven hundred feet of sheer Atlantic drama.",
        img: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=70",
        alt: "Cliffs of Moher",
        link: "/search?q=Cliffs%20of%20Moher",
      },
      {
        badge: "Garden · Ireland",
        title: "Powerscourt Estate & Gardens",
        quote: "Voted one of the greatest formal gardens on Earth.",
        img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=70",
        alt: "Powerscourt Estate",
        featured: true,
        link: "/search?q=Powerscourt",
      },
      {
        badge: "Hotel · Ireland",
        title: "Ashford Castle",
        quote: "An eight-hundred-year-old fortress transformed into world-renowned luxury.",
        img: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&q=70",
        alt: "Ashford Castle",
        link: "/search?q=Ashford%20Castle",
      },
      {
        badge: "Attraction · Ireland",
        title: "Guinness Storehouse",
        quote: "Seven storeys of brewing craft with panoramic Dublin views.",
        img: "https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&q=70",
        alt: "Guinness Storehouse",
        link: "/search?q=Guinness",
      },
      {
        badge: "Restaurant · Ireland",
        title: "Chapter One",
        quote: "Refined Michelin-starred dining celebrating Ireland's purest ingredients.",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=70",
        alt: "Chapter One Dublin",
        link: "/search?q=Chapter%20One",
      },
      {
        badge: "Historical · Ireland",
        title: "Kylemore Abbey",
        quote: "A Gothic monastery nestled peacefully beside a Connemara lake.",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=70",
        alt: "Kylemore Abbey",
        link: "/search?q=Kylemore%20Abbey",
      },
    ],
    film: {
      badge: "The Ireland Film",
      title: "Sixty seconds of Ireland.",
      subtitle: "Rolling hills, wild ocean spray, and golden Irish warmth.",
      img: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=2000&q=75",
      alt: "Irish countryside panorama",
    },
    quote: "In Ireland, a short journey always turns into a long, unforgettable story.",
    quoteAuthor: "STEVENSON’S GUIDES",
  },
  "northern-ireland": {
    slug: "northern-ireland",
    name: "Northern Ireland",
    heroImage: "https://images.unsplash.com/photo-1653143399868-6057edb4f0d3?w=2000&q=75",
    heroImageAlt: "Modern architecture along the Belfast waterfront",
    flagColors: ["#C31A35", "rgba(255,255,255,.9)"],
    eyebrow: "The Nations · Northern Ireland",
    headline: "Northern Ireland,",
    headlineGradient: "properly.",
    subheadline: "Basalt columns shaped by giants, coastal castles, storied shipyards, and peaceful loughs.",
    introEyebrow: "The Standard Travels",
    introText: "A compact country of grand wonders. From the world’s most dramatic coastline to Michelin-starred dining in Belfast, Northern Ireland stands tall.",
    areasCap: "COAST & MOUNTAINS",
    areas: [
      {
        badge: "Giant's Wonders",
        title: "Causeway Coast",
        subtitle: "Hexagonal columns and clifftop ruins.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=70",
        alt: "Causeway Coast coastline",
        link: "/search?q=Causeway",
      },
      {
        badge: "Maritime & Culture",
        title: "Belfast & Lagan Valley",
        subtitle: "Maritime heritage and world-class culinary revival.",
        img: "https://images.unsplash.com/photo-1653143399868-6057edb4f0d3?w=800&q=70",
        alt: "Belfast city view",
        link: "/search?q=Belfast",
      },
      {
        badge: "Lakes & Peaks",
        title: "Mourne Mountains & Fermanagh",
        subtitle: "Where mountains sweep down to the sea.",
        img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=70",
        alt: "Mourne Mountains",
        link: "/search?q=Mourne",
      },
    ],
    picksCap: "ATTRACTIONS · STAYS · EATING OUT",
    picks: [
      {
        badge: "Attraction · Northern Ireland",
        title: "Giant's Causeway",
        quote: "Forty thousand interlocking basalt columns born of volcanic legend.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=70",
        alt: "Giant's Causeway",
        link: "/search?q=Giant's%20Causeway",
      },
      {
        badge: "Attraction · Northern Ireland",
        title: "Titanic Belfast",
        quote: "The world's leading tourism attraction on the slipway where history was made.",
        img: "https://images.unsplash.com/photo-1653143399868-6057edb4f0d3?w=800&q=70",
        alt: "Titanic Belfast",
        featured: true,
        link: "/search?q=Titanic%20Belfast",
      },
      {
        badge: "Hotel · Northern Ireland",
        title: "The Merchant Hotel",
        quote: "A five-star Victorian jewel in Belfast's historic Cathedral Quarter.",
        img: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&q=70",
        alt: "The Merchant Hotel Belfast",
        link: "/search?q=The%20Merchant%20Hotel",
      },
      {
        badge: "Historical · Northern Ireland",
        title: "Dunluce Castle",
        quote: "Perched dramatically on the jagged edge of an Antrim cliff.",
        img: "https://images.unsplash.com/photo-1697403471010-5b1b1f51236c?w=800&q=70",
        alt: "Dunluce Castle ruins",
        link: "/search?q=Dunluce%20Castle",
      },
      {
        badge: "Restaurant · Northern Ireland",
        title: "The Muddlers Club",
        quote: "Industrial chic setting serving bold, Michelin-starred tasting menus.",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=70",
        alt: "The Muddlers Club",
        link: "/search?q=Muddlers%20Club",
      },
      {
        badge: "Hotel · Northern Ireland",
        title: "Culloden Estate & Spa",
        quote: "Standing high on the Holywood Hills overlooking Belfast Lough.",
        img: "https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&q=70",
        alt: "Culloden Estate",
        link: "/search?q=Culloden%20Estate",
      },
    ],
    film: {
      badge: "The Northern Ireland Film",
      title: "Sixty seconds of Northern Ireland.",
      subtitle: "Hexagonal stones, roaring Atlantic tides, and vibrant city spirit.",
      img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=2000&q=75",
      alt: "Northern Ireland coast and landscape",
    },
    quote: "Northern Ireland proves that the greatest adventures happen in the most unexpected places.",
    quoteAuthor: "STEVENSON’S GUIDES",
  },
};

export function getCountryData(slug: string): CountryData | undefined {
  const normalized = slug.toLowerCase().trim();
  if (normalized === "nireland") return COUNTRIES["northern-ireland"];
  return COUNTRIES[normalized];
}
