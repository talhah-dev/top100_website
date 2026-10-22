"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, Check } from "lucide-react";
import { CategoryTreeDropdown } from "@/components/search/CategoryTreeDropdown";
import { getCategoryLabel, getCategoryIcon } from "@/components/search/category-data";

export interface DestinationItem {
  id: string;
  name: string;
  flagUrl: string;
}

export const DESTINATIONS: DestinationItem[] = [
  {
    id: "british-isles",
    name: "British Isles",
    flagUrl: "https://flagcdn.com/w40/gb.png",
  },
  {
    id: "england",
    name: "England",
    flagUrl: "https://flagcdn.com/w40/gb-eng.png",
  },
  {
    id: "island-of-ireland",
    name: "Island of Ireland",
    flagUrl: "https://flagcdn.com/w40/ie.png",
  },
  {
    id: "scotland",
    name: "Scotland",
    flagUrl: "https://flagcdn.com/w40/gb-sct.png",
  },
  {
    id: "wales",
    name: "Wales",
    flagUrl: "https://flagcdn.com/w40/gb-wls.png",
  },
  {
    id: "northern-ireland",
    name: "Northern Ireland",
    flagUrl: "https://flagcdn.com/w40/gb-nir.png",
  },
];

export interface CategoryItem {
  label: string;
  value: string;
}

export const CATEGORIES: CategoryItem[] = [
  { label: "All Categories", value: "All" },
  { label: "Attractions", value: "Attractions" },
  { label: "Historical Places", value: "Historical Places" },
  { label: "Gardens", value: "Garden" },
  { label: "Museums", value: "Museums" },
  { label: "Accommodation", value: "Accommodation" },
  { label: "Hotels", value: "Hotels" },
  { label: "Eating Out", value: "Eating Out" },
  { label: "Iconic", value: "Iconic" },
  { label: "Pet Friendly", value: "Pet Friendly" },
];

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  const [isDestOpen, setIsDestOpen] = useState(false);
  const [isCatOpen, setIsCatOpen] = useState(false);

  const destRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (destRef.current && !destRef.current.contains(target)) {
        setIsDestOpen(false);
      }
      if (catRef.current && !catRef.current.contains(target)) {
        setIsCatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsDestOpen(false);
    setIsCatOpen(false);

    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (category && category !== "All") params.set("category", category);

    if (viewMode === "map") {
      router.push("/map");
      return;
    }

    const qs = params.toString();
    router.push(qs ? `/search?${qs}` : "/search");
  };

  const filteredDestinations = query.trim()
    ? DESTINATIONS.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      )
    : DESTINATIONS;

  const currentCategory =
    CATEGORIES.find((c) => c.value === category) || CATEGORIES[0];

  return (
    <form
      onSubmit={handleSearch}
      className="search rv in"
      style={{ "--d": "1.15s" } as React.CSSProperties}
    >
      <div ref={destRef} className="search-input-box">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isDestOpen) setIsDestOpen(true);
          }}
          onFocus={() => setIsDestOpen(true)}
          placeholder="Where would you like to go?"
        />

        {isDestOpen && (
          <div className="hero-dropdown-menu left-0 min-w-[280px] sm:min-w-[320px]">
            <div className="px-3 py-2 text-[11px] font-bold text-[#FABF33] uppercase tracking-wider border-b border-white/5">
              Popular Destinations
            </div>
            <div className="hero-dropdown-list mt-1">
              {filteredDestinations.length > 0 ? (
                filteredDestinations.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => {
                      setQuery(dest.name);
                      setIsDestOpen(false);
                    }}
                    className="hero-dropdown-item"
                  >
                    <img
                      src={dest.flagUrl}
                      alt={dest.name}
                      width={28}
                      height={20}
                      className="w-7 h-5 object-cover rounded shadow-xs border border-white/10 shrink-0"
                      loading="lazy"
                    />
                    <span>{dest.name}</span>
                  </button>
                ))
              ) : (
                <div className="px-3 py-3 text-xs text-[#B9C1D4] italic">
                  Press search or enter to find &ldquo;{query}&rdquo;
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div ref={catRef} className="search-cat-box">
        <button
          type="button"
          onClick={() => {
            setIsCatOpen((prev) => !prev);
            setIsDestOpen(false);
          }}
          className="w-full flex items-center justify-between bg-transparent border-none text-[var(--cream,#F6EFDF)] text-sm cursor-pointer outline-none font-sans"
        >
          <div className="flex items-center gap-2 min-w-0">
            {getCategoryIcon(category) ? (
              <Image
                src={getCategoryIcon(category)!}
                alt=""
                width={18}
                height={18}
                className="w-4 h-4 object-contain shrink-0"
              />
            ) : null}
            <span className="truncate">{getCategoryLabel(category)}</span>
          </div>
          <ChevronDown
            className={`size-4 text-[#FABF33] transition-transform duration-200 shrink-0 ml-2 ${
              isCatOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isCatOpen && (
          <div className="hero-dropdown-menu left-0 sm:right-0 sm:left-auto min-w-[320px] sm:min-w-[360px] !text-left">
            <div className="px-3.5 py-2 text-[11px] font-bold text-[#FABF33] uppercase tracking-wider border-b border-white/5 !text-left">
              Categories
            </div>
            <CategoryTreeDropdown
              selectedCategory={category}
              onSelect={(cat) => setCategory(cat)}
              onClose={() => setIsCatOpen(false)}
            />
          </div>
        )}
      </div>

      <div className="search-seg seg">
        <button
          type="button"
          className={`segbtn ${viewMode === "grid" ? "on" : ""}`}
          onClick={() => setViewMode("grid")}
        >
          &#9638; Grid
        </button>
        <button
          type="button"
          className={`segbtn ${viewMode === "map" ? "on" : ""}`}
          onClick={() => router.push("/map")}
        >
          &#8982; Map
        </button>
      </div>

      <button type="submit" className="search-go-btn go">
        SEARCH
      </button>
    </form>
  );
}
