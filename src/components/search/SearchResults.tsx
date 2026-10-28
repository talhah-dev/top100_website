"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { CATEGORY_GROUPS } from "./category-data";

export interface AttractionItem {
  id: number;
  title: string;
  slug: string;
  uri?: string;
  summary?: string;
  town?: string;
  county?: string;
  area?: string;
  image?: string;
  image_url?: string;
  categories: string[];
  lat?: number;
  lng?: number;
  featured?: boolean;
}

interface SearchResultsProps {
  searchQuery?: string;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  selectedRegion?: string;
  onRegionChange?: (region: string) => void;
}

const REGION_OPTIONS = [
  "All",
  "England",
  "Wales",
  "Scotland",
  "Ireland",
  "Northern Ireland",
];

const REGION_SUB_OPTIONS: Record<string, string[]> = {
  England: [
    "London",
    "Cornwall",
    "Cumbria",
    "Devon",
    "Yorkshire",
    "Lancashire",
    "Cheshire",
    "Manchester",
    "Bath & Bristol",
  ],
  Wales: [
    "Snowdonia",
    "Anglesey",
    "Conwy",
    "Pembrokeshire",
    "Brecon",
    "Cardigan Bay",
    "Carmarthenshire",
    "Gwynedd",
    "Cardiff",
  ],
  Scotland: [
    "Edinburgh",
    "Glasgow",
    "Highlands",
    "Dumfries & Galloway",
    "Scottish Borders",
    "Ayrshire",
    "Isle of Skye",
  ],
  Ireland: [
    "Dublin",
    "Co. Galway",
    "Co. Kerry",
    "Co. Cork",
    "Co. Clare",
    "Co. Wicklow",
    "Co. Mayo",
    "Kilkenny",
  ],
  "Northern Ireland": [
    "Belfast",
    "Causeway Coast",
    "Co. Antrim",
    "Co. Down",
    "Co. Londonderry",
    "Co. Fermanagh",
    "Co. Tyrone",
  ],
};

const CORE_CATEGORIES = [
  { label: "Attractions", value: "Attractions" },
  { label: "Places to Stay", value: "Accommodation" },
  { label: "Places to Eat", value: "Eating Out" },
];

export function SearchResults({
  searchQuery = "",
  selectedCategory = "All",
  onCategoryChange,
  selectedRegion = "All",
  onRegionChange,
}: SearchResultsProps) {
  const [activeRegion, setActiveRegion] = useState(selectedRegion || "All");

  useEffect(() => {
    if (selectedRegion !== undefined) {
      setActiveRegion(selectedRegion);
    }
  }, [selectedRegion]);
  const [activeSubRegion, setActiveSubRegion] = useState("");
  const [attractions, setAttractions] = useState<AttractionItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [navigatingSlug, setNavigatingSlug] = useState<string | number | null>(null);

  useEffect(() => {
    const handleReset = () => setNavigatingSlug(null);
    window.addEventListener("pageshow", handleReset);
    window.addEventListener("popstate", handleReset);
    window.addEventListener("focus", handleReset);
    return () => {
      window.removeEventListener("pageshow", handleReset);
      window.removeEventListener("popstate", handleReset);
      window.removeEventListener("focus", handleReset);
    };
  }, []);

  const handleCardClick = (slug: string | number) => {
    setNavigatingSlug(slug);
    setTimeout(() => {
      setNavigatingSlug(null);
    }, 1200);
  };

  const fetchResults = useCallback(
    async (pageToFetch: number, append: boolean = false) => {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      try {
        const params = new URLSearchParams();
        if (searchQuery.trim()) params.set("q", searchQuery.trim());
        if (selectedCategory && selectedCategory !== "All") params.set("category", selectedCategory);
        const areaToFilter = activeSubRegion || (activeRegion !== "All" ? activeRegion : "");
        if (areaToFilter) params.set("area", areaToFilter);
        params.set("page", pageToFetch.toString());
        params.set("limit", "12");

        const res = await fetch(`/api/attractions?${params.toString()}`);
        if (!res.ok) throw new Error("Failed to load attractions");

        const data = await res.json();
        setTotal(data.total || 0);

        if (append) {
          setAttractions((prev) => {
            const seen = new Set(prev.map((a) => a.slug || a.id));
            const fresh = (data.attractions || []).filter(
              (a: AttractionItem) => !seen.has(a.slug || a.id)
            );
            return [...prev, ...fresh];
          });
        } else {
          setAttractions(data.attractions || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [searchQuery, selectedCategory, activeRegion, activeSubRegion]
  );

  useEffect(() => {
    setPage(1);
    setNavigatingSlug(null);
    fetchResults(1, false);
  }, [fetchResults]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchResults(nextPage, true);
  };

  const activeCategoryGroup = CATEGORY_GROUPS.find(
    (g) =>
      g.value === selectedCategory ||
      g.subcategories.some((s) => s.value === selectedCategory)
  );

  return (
    <section className="results" id="results">
      <div className="wrap">
        <div className="toolbar rv in flex flex-col items-start gap-3 w-full">
          <div className="filter-row filter-row-countries w-full flex items-center justify-between gap-4 flex-wrap">
            <div className="tchips flex-wrap">
              {REGION_OPTIONS.map((region) => (
                <button
                  type="button"
                  key={region}
                  className={`fchip ${activeRegion === region ? "on" : ""}`}
                  onClick={() => {
                    setActiveRegion(region);
                    setActiveSubRegion("");
                    onRegionChange?.(region);
                  }}
                >
                  {region}
                </button>
              ))}
            </div>
            <div className="tcount shrink-0">
              {loading && attractions.length === 0
                ? "Searching places..."
                : `Showing ${attractions.length} of ${total.toLocaleString()} places`}
            </div>
          </div>

          <div className="filter-row filter-row-categories w-full flex items-center gap-2 flex-wrap pt-1">
            <button
              type="button"
              className={`fchip ${selectedCategory === "All" || !selectedCategory ? "on" : ""}`}
              onClick={() => onCategoryChange?.("All")}
            >
              All Categories
            </button>
            {CORE_CATEGORIES.map((cat) => {
              const isGroupActive =
                selectedCategory === cat.value ||
                CATEGORY_GROUPS.find((g) => g.value === cat.value)?.subcategories.some(
                  (s) => s.value === selectedCategory
                );
              return (
                <button
                  type="button"
                  key={cat.value}
                  className={`fchip ${isGroupActive ? "on" : ""}`}
                  onClick={() =>
                    onCategoryChange?.(isGroupActive ? "All" : cat.value)
                  }
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {(activeCategoryGroup || (activeRegion !== "All" && REGION_SUB_OPTIONS[activeRegion])) && (
            <div className="subfilters-container w-full flex flex-col gap-2.5 pt-2 border-t border-[rgba(185,193,212,0.12)]">
              {activeCategoryGroup && (
                <div className="subfilters-row flex items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    className={`fchip text-[11px] py-1.5 px-3.5 ${selectedCategory === activeCategoryGroup.value ? "on" : ""}`}
                    onClick={() => onCategoryChange?.(activeCategoryGroup.value)}
                  >
                    All {activeCategoryGroup.name}
                  </button>
                  {activeCategoryGroup.subcategories.map((sub) => {
                    const isSelected = selectedCategory === sub.value;
                    return (
                      <button
                        type="button"
                        key={sub.value}
                        className={`fchip text-[11px] py-1.5 px-3.5 flex items-center gap-1.5 ${isSelected ? "on" : ""}`}
                        onClick={() =>
                          onCategoryChange?.(isSelected ? activeCategoryGroup.value : sub.value)
                        }
                      >
                        {sub.iconPath && (
                          <Image
                            src={sub.iconPath}
                            alt=""
                            width={14}
                            height={14}
                            className="w-3.5 h-3.5 object-contain inline-block shrink-0"
                          />
                        )}
                        {sub.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {activeRegion !== "All" && REGION_SUB_OPTIONS[activeRegion] && (
                <div className="subfilters-row flex items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    className={`fchip text-[11px] py-1.5 px-3.5 ${!activeSubRegion ? "on" : ""}`}
                    onClick={() => setActiveSubRegion("")}
                  >
                    All {activeRegion}
                  </button>
                  {REGION_SUB_OPTIONS[activeRegion].map((subArea) => (
                    <button
                      type="button"
                      key={subArea}
                      className={`fchip text-[11px] py-1.5 px-3.5 ${activeSubRegion === subArea ? "on" : ""}`}
                      onClick={() => setActiveSubRegion(activeSubRegion === subArea ? "" : subArea)}
                    >
                      {subArea}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {loading && attractions.length === 0 ? (
          <div className="py-24 text-center text-muted-foreground">
            <div className="inline-block size-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]" />
            <p className="mt-4 text-sm text-[var(--mist,#94a3b8)]">Loading places worth your time...</p>
          </div>
        ) : attractions.length === 0 ? (
          <div className="py-24 text-center">
            <h3 className="text-xl font-bold text-white mb-2">No matching attractions found</h3>
            <p className="text-sm text-[var(--mist,#94a3b8)]">Try adjusting your search terms, area or category filter.</p>
          </div>
        ) : (
          <div className="rgrid">
            {attractions.map((place, idx) => {
              const displayImage =
                place.image_url ||
                "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=70";
              const categoryLabel = place.categories?.[0] || "Attraction";
              const locationLabel = place.town || place.area || place.county || "UK";

              const itemSlug = place.slug || place.id;
              const isNavigating = navigatingSlug === itemSlug;

              const categoryQuery =
                selectedCategory && selectedCategory !== "All"
                  ? `?from=${encodeURIComponent(selectedCategory)}`
                  : "";

              return (
                <Link
                  key={`${place.id}-${idx}`}
                  className={`rcard rv in ${isNavigating ? "pointer-events-none" : ""}`}
                  href={`/detail/${itemSlug}${categoryQuery}`}
                  onClick={() => handleCardClick(itemSlug)}
                >
                  {isNavigating && (
                    <div className="absolute inset-0 bg-[#060B16]/85 backdrop-blur-[3px] z-20 flex flex-col items-center justify-center gap-3">
                      <div className="relative">
                        <div className="absolute -inset-1.5 rounded-full blur-md bg-[var(--gold,#FABF33)]/30 animate-pulse" />
                        <Spinner className="relative size-8 text-[var(--gold,#FABF33)]" />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-[var(--gold,#FABF33)]">
                        Loading...
                      </span>
                    </div>
                  )}
                  <div className="rph">
                    <div className="rimg">
                      <Image
                        src={displayImage}
                        alt={place.title}
                        width={800}
                        height={600}
                        loading="lazy"
                        unoptimized
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {place.featured && <span className="rtag">Featured</span>}
                  </div>
                  <div className="rbody">
                    <span className="rchip">
                      {categoryLabel} &middot; {locationLabel}
                    </span>
                    <h3>{place.title}</h3>
                    <p className="rquote">
                      {place.summary ? (
                        place.summary.slice(0, 110) + (place.summary.length > 110 ? "..." : "")
                      ) : (
                        `Located in ${locationLabel}`
                      )}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {attractions.length < total && (
          <div className="pagin rv in">
            <button
              type="button"
              className="loadmore"
              onClick={handleLoadMore}
              disabled={loadingMore}
            >
              {loadingMore ? "LOADING MORE..." : "LOAD MORE"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
