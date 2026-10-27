import React from "react";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import "@/components/home/home.css";
import "@/components/detail/detail.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  DetailHero,
  DetailVerdict,
  DetailEditorial,
  DetailBeforeYouGo,
  DetailVisitCard,
  DetailGallery,
  DetailNearby,
} from "@/components/detail";
import { getDb } from "@/lib/db";
import { resolveCoordinates } from "@/lib/geocode";

export const instant = false;

export async function generateStaticParams() {
  const db = getDb();
  const rows = db.prepare("SELECT slug FROM attractions WHERE slug IS NOT NULL AND slug != '' GROUP BY slug LIMIT 20").all() as { slug: string }[];
  return rows.map((r) => ({ id: r.slug }));
}

interface DetailPageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface AttractionDetail {
  id: number;
  title: string;
  slug: string;
  uri?: string;
  summary?: string;
  description?: string;
  review?: string;
  town?: string;
  county?: string;
  postcode?: string;
  address?: string;
  address2?: string;
  website?: string;
  phone?: string;
  email?: string;
  booking_code?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  trip_advisor?: string;
  featured?: boolean;
  national_trust?: boolean;
  order_priority?: number;
  area?: string;
  categories: string[];
  image?: string;
  image_url?: string;
  photos: string[];
  lat?: number;
  lng?: number;
}

function getAttraction(idOrSlug: string): AttractionDetail | null {
  const db = getDb();
  const isNumeric = /^\d+$/.test(idOrSlug);
  const query = isNumeric
    ? "SELECT * FROM attractions WHERE id = ? LIMIT 1"
    : "SELECT * FROM attractions WHERE slug = ? ORDER BY (CASE WHEN review != '' AND review IS NOT NULL AND review != '<p></p>' THEN 0 ELSE 1 END), (CASE WHEN image_url != '' AND image_url IS NOT NULL THEN 0 ELSE 1 END), id DESC LIMIT 1";
  const param = isNumeric ? parseInt(idOrSlug, 10) : idOrSlug;
  const row = db.prepare(query).get(param) as Record<string, unknown> | undefined;

  if (!row) return null;

  let categories: string[] = [];
  if (row.slug) {
    const allCatRows = db.prepare("SELECT categories FROM attractions WHERE slug = ?").all(String(row.slug)) as { categories: string }[];
    const catSet = new Set<string>();
    allCatRows.forEach((r) => {
      try {
        const parsed = JSON.parse(r.categories);
        if (Array.isArray(parsed)) parsed.forEach((c) => catSet.add(c));
      } catch {}
    });
    categories = Array.from(catSet);
  } else if (typeof row.categories === "string") {
    try {
      categories = JSON.parse(row.categories);
    } catch {
      categories = [];
    }
  }

  return {
    id: Number(row.id),
    title: String(row.title || ""),
    slug: String(row.slug || ""),
    uri: row.uri ? String(row.uri) : undefined,
    summary: row.summary ? String(row.summary) : undefined,
    description: row.description ? String(row.description) : undefined,
    review: row.review ? String(row.review) : undefined,
    town: row.town ? String(row.town) : undefined,
    county: row.county ? String(row.county) : undefined,
    postcode: row.postcode ? String(row.postcode) : undefined,
    address: row.address ? String(row.address) : undefined,
    address2: row.address2 ? String(row.address2) : undefined,
    website: row.website ? String(row.website) : undefined,
    phone: row.phone ? String(row.phone) : undefined,
    email: row.email ? String(row.email) : undefined,
    booking_code: row.booking_code ? String(row.booking_code) : undefined,
    facebook: row.facebook ? String(row.facebook) : undefined,
    instagram: row.instagram ? String(row.instagram) : undefined,
    twitter: row.twitter ? String(row.twitter) : undefined,
    trip_advisor: row.trip_advisor ? String(row.trip_advisor) : undefined,
    featured: Boolean(row.featured),
    national_trust: Boolean(row.national_trust),
    order_priority: Number(row.order_priority || 0),
    area: row.area ? String(row.area) : undefined,
    categories,
    image: row.image ? String(row.image) : undefined,
    image_url: row.image_url ? String(row.image_url) : undefined,
    photos: typeof row.photos === "string" ? JSON.parse(row.photos) : (row.photos as string[] || []),
    lat: row.lat !== null && row.lat !== undefined ? Number(row.lat) : undefined,
    lng: row.lng !== null && row.lng !== undefined ? Number(row.lng) : undefined,
  };
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const attraction = getAttraction(id);
  if (!attraction) {
    return { title: "Attraction Not Found | Top 100 Attractions" };
  }
  return {
    title: `${attraction.title} | Top 100 Attractions`,
    description:
      attraction.summary ||
      `Discover ${attraction.title} in ${attraction.town || attraction.area || "the UK"}.`,
  };
}

export default async function DetailDynamicPage({ params, searchParams }: DetailPageProps) {
  const { id } = await params;
  const sp = searchParams ? await searchParams : {};
  const fromCategory = String(sp.from || sp.category || "");
  const attraction = getAttraction(id);

  if (!attraction) {
    notFound();
  }

  const isNumeric = /^\d+$/.test(id);
  if (isNumeric && attraction.slug) {
    const qs = fromCategory ? `?from=${encodeURIComponent(fromCategory)}` : "";
    redirect(`/detail/${attraction.slug}${qs}`);
  }

  const categoryLabel = fromCategory || attraction.categories?.[0] || "Attraction";

  const ATTRACTION_CATEGORIES = new Set([
    "attractions",
    "attraction",
    "historical places",
    "garden",
    "gardens",
    "museums",
    "museum",
    "iconic",
    "features",
  ]);

  const ACCOMMODATION_CATEGORIES = new Set([
    "accommodation",
    "hotels",
    "hotel",
    "guest house / b&bs",
    "guest house",
    "b&b",
    "b&bs",
    "self catering",
    "caravans / campsites / glamping",
    "caravans",
    "campsites",
    "glamping",
    "hostels",
    "hostel",
    "country house",
    "romance",
    "pet friendly",
  ]);

  const EATING_OUT_CATEGORIES = new Set([
    "eating out",
    "eating",
    "eat",
    "food",
    "restaurant",
    "restaurant with rooms",
    "restaurants",
  ]);

  const fromCatLower = fromCategory.toLowerCase().trim();
  const isFromAccommodation =
    fromCatLower.includes("accommodation") ||
    fromCatLower.includes("stay") ||
    fromCatLower.includes("hotel") ||
    fromCatLower.includes("b&b") ||
    fromCatLower.includes("self catering") ||
    fromCatLower.includes("campsite") ||
    fromCatLower.includes("glamping") ||
    fromCatLower.includes("hostel");

  const isFromEatingOut =
    fromCatLower.includes("eating out") ||
    fromCatLower.includes("eat") ||
    fromCatLower.includes("restaurant") ||
    fromCatLower.includes("food") ||
    fromCatLower.includes("dining");

  const isFromAttraction =
    fromCatLower.includes("attraction") ||
    fromCatLower.includes("historical") ||
    fromCatLower.includes("garden") ||
    fromCatLower.includes("museum") ||
    fromCatLower.includes("castle");

  const catsLower = (attraction.categories || []).map((c) => c.toLowerCase().trim());
  const hasAccommodation = catsLower.some((c) =>
    ACCOMMODATION_CATEGORIES.has(c) ||
    c.includes("accommodation") ||
    c.includes("hotel") ||
    c.includes("guest house") ||
    c.includes("b&b") ||
    c.includes("self catering") ||
    c.includes("campsite") ||
    c.includes("glamping") ||
    c.includes("hostel") ||
    c.includes("country house")
  );

  const hasEatingOut = catsLower.some((c) =>
    EATING_OUT_CATEGORIES.has(c) ||
    c.includes("eating out") ||
    c.includes("restaurant") ||
    c.includes("pub") ||
    c.includes("cafe") ||
    c.includes("dining")
  );

  const hasSpecificAttraction = catsLower.some((c) =>
    c.includes("historical places") ||
    c.includes("museum") ||
    c.includes("garden") ||
    c.includes("castle") ||
    c.includes("theme park") ||
    c.includes("zoo") ||
    c.includes("landmark")
  );

  let hideStayNearby = false;
  let hideEatNearby = false;
  let hideAttractionsNearby = false;
  let sectionOrder: ("attractions" | "eat" | "stay")[] = ["attractions", "eat", "stay"];

  if (isFromAccommodation || (hasAccommodation && !hasSpecificAttraction && !isFromEatingOut && !isFromAttraction)) {
    hideStayNearby = true;
    hideEatNearby = false;
    hideAttractionsNearby = false;
    sectionOrder = ["attractions", "eat"];
  } else if (isFromEatingOut || (hasEatingOut && !hasAccommodation && !hasSpecificAttraction && !isFromAttraction)) {
    hideEatNearby = true;
    hideAttractionsNearby = false;
    hideStayNearby = false;
    sectionOrder = ["attractions", "stay"];
  } else {
    hideAttractionsNearby = true;
    hideEatNearby = false;
    hideStayNearby = false;
    sectionOrder = ["eat", "stay"];
  }

  const db = getDb();
  let placeType = "a";
  let placeSubtype = "historic-house";
  let isIconic = false;

  const mapPlace = attraction.slug
    ? (db.prepare("SELECT lat, lng, type, subtype, iconic FROM map_places WHERE slug = ? LIMIT 1").get(attraction.slug) as {
        lat: number;
        lng: number;
        type: string;
        subtype: string;
        iconic: number;
      } | undefined)
    : undefined;

  if (mapPlace) {
    placeType = mapPlace.type || "a";
    placeSubtype = mapPlace.subtype || "historic-house";
    isIconic = Boolean(mapPlace.iconic);
  } else {
    if (hasSpecificAttraction && hasEatingOut && hasAccommodation) placeType = "aes";
    else if (hasSpecificAttraction && hasEatingOut) placeType = "ae";
    else if (hasSpecificAttraction && hasAccommodation) placeType = "as";
    else if (hasEatingOut && hasAccommodation) placeType = "es";
    else if (hasEatingOut) placeType = "e";
    else if (hasAccommodation) placeType = "s";
    else placeType = "a";

    const catsLower = (attraction.categories || []).map((c) => c.toLowerCase());
    if (catsLower.some((c) => c.includes("garden"))) placeSubtype = "garden";
    else if (catsLower.some((c) => c.includes("museum"))) placeSubtype = "museum";
    else if (catsLower.some((c) => c.includes("castle"))) placeSubtype = "castle";
    else if (catsLower.some((c) => c.includes("hotel"))) placeSubtype = "hotels";
    else if (catsLower.some((c) => c.includes("guest house") || c.includes("b&b"))) placeSubtype = "guest-house-bbs";
    else if (catsLower.some((c) => c.includes("campsite") || c.includes("caravan") || c.includes("glamping"))) placeSubtype = "caravans-campsites-glamping";
    else if (catsLower.some((c) => c.includes("historical"))) placeSubtype = "historic-house";
    else placeSubtype = "local-landmark";
  }

  let finalLat = attraction.lat ?? mapPlace?.lat;
  let finalLng = attraction.lng ?? mapPlace?.lng;

  if (typeof finalLat !== "number" || typeof finalLng !== "number") {
    const resolved = await resolveCoordinates({
      id: attraction.id,
      title: attraction.title,
      address: attraction.address,
      town: attraction.town,
      county: attraction.county,
      postcode: attraction.postcode,
      area: attraction.area,
    });
    if (resolved) {
      finalLat = resolved.lat;
      finalLng = resolved.lng;
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <DetailHero
          title={attraction.title}
          category={categoryLabel}
          town={attraction.town}
          area={attraction.area}
          imageUrl={attraction.image_url}
        />
        <DetailVerdict
          summary={attraction.summary}
          description={attraction.description}
          review={attraction.review}
        />
        <DetailEditorial
          title={attraction.title}
          description={attraction.description}
          review={attraction.review}
        />
        <DetailBeforeYouGo
          title={attraction.title}
          town={attraction.town}
          area={attraction.area}
        />
        <DetailVisitCard
          title={attraction.title}
          address={attraction.address}
          address2={attraction.address2}
          town={attraction.town}
          county={attraction.county}
          postcode={attraction.postcode}
          phone={attraction.phone}
          email={attraction.email}
          website={attraction.website}
          facebook={attraction.facebook}
          twitter={attraction.twitter}
          instagram={attraction.instagram}
          lat={finalLat}
          lng={finalLng}
          placeType={placeType}
          placeSubtype={placeSubtype}
          iconic={isIconic}
        />
        <DetailGallery
          title={attraction.title}
          photos={attraction.photos}
          mainImage={attraction.image_url}
        />
        <DetailNearby
          hideStayNearby={hideStayNearby}
          hideEatNearby={hideEatNearby}
          hideAttractionsNearby={hideAttractionsNearby}
          sectionOrder={sectionOrder}
        />
      </main>
      <Footer />
    </>
  );
}
