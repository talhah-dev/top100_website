"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

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
}

const REGION_OPTIONS = [
  "All",
  "Wales",
  "London",
  "Northern Ireland",
  "Ireland",
  "Scotland",
  "Cornwall",
  "Cumbria",
  "Devon",
  "Yorkshire",
];

export function SearchResults({
  searchQuery = "",
  selectedCategory = "All",
  onCategoryChange,
}: SearchResultsProps) {
  const [activeRegion, setActiveRegion] = useState("All");
  const [attractions, setAttractions] = useState<AttractionItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

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
        if (activeRegion && activeRegion !== "All") params.set("area", activeRegion);
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
    [searchQuery, selectedCategory, activeRegion]
  );

  useEffect(() => {
    setPage(1);
    fetchResults(1, false);
  }, [fetchResults]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchResults(nextPage, true);
  };

  const CATEGORY_TABS = [
    "All",
    "Attractions",
    "Historical Places",
    "Garden",
    "Museums",
    "Accommodation",
    "Hotels",
    "Eating Out",
  ];

  return (
    <section className="results" id="results">
      <div className="wrap">
        <div className="toolbar rv in">
          <div className="tcount">
            {loading && attractions.length === 0
              ? "Searching places..."
              : `Showing ${attractions.length} of ${total.toLocaleString()} places`}
          </div>
          <div className="tchips">
            {REGION_OPTIONS.map((region) => (
              <button
                type="button"
                key={region}
                className={`fchip ${activeRegion === region ? "on" : ""}`}
                onClick={() => setActiveRegion(region)}
              >
                {region}
              </button>
            ))}
            <div className="flex items-center gap-1">
              {CATEGORY_TABS.slice(1, 4).map((cat) => (
                <button
                  type="button"
                  key={cat}
                  className={`fchip ${selectedCategory === cat ? "on" : ""}`}
                  onClick={() => onCategoryChange?.(selectedCategory === cat ? "All" : cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
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

              return (
                <Link
                  key={`${place.id}-${idx}`}
                  className="rcard rv in"
                  href={`/detail/${place.id}`}
                >
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
