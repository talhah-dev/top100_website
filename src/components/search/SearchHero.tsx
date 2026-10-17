"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { CategoryTreeDropdown } from "./CategoryTreeDropdown";
import { getCategoryLabel } from "./category-data";

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

interface SearchHeroProps {
  query?: string;
  onQueryChange?: (val: string) => void;
  category?: string;
  onCategoryChange?: (val: string) => void;
  viewMode?: "grid" | "map";
  onViewModeChange?: (mode: "grid" | "map") => void;
  onSearch?: () => void;
}

export function SearchHero({
  query = "",
  onQueryChange,
  category = "All",
  onCategoryChange,
  viewMode = "grid",
  onViewModeChange,
  onSearch,
}: SearchHeroProps) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDestOpen(false);
    setIsCatOpen(false);
    if (onSearch) onSearch();
  };

  const filteredDestinations = query.trim()
    ? DESTINATIONS.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      )
    : DESTINATIONS;

  const currentCategory =
    CATEGORIES.find((c) => c.value === category) || CATEGORIES[0];

  return (
    <header className="shero">
      <div className="ghost100">100</div>
      <div className="inner" id="heroInner">
        <div className="eyebrow rv in">The UK&rsquo;s Leading Tourist Guide</div>
        <h1>
          <span className="wline">
            <span style={{ transitionDelay: ".3s" }}>
              Find somewhere <em className="grad" style={{ fontStyle: "normal" }}>worth going.</em>
            </span>
          </span>
        </h1>
        <p className="ssub rv in" style={{ "--d": ".45s" } as React.CSSProperties}>
          Name a place and see what is worth your time.
        </p>

        <form onSubmit={handleSubmit} className="search-bar-wrap rv in" style={{ "--d": ".55s" } as React.CSSProperties}>
          <div ref={destRef} className="search-input-field">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                onQueryChange?.(e.target.value);
                if (!isDestOpen) setIsDestOpen(true);
              }}
              onFocus={() => setIsDestOpen(true)}
              placeholder="Where would you like to go?"
            />

            {isDestOpen && (
              <div className="search-dropdown-menu left-0 min-w-[280px] sm:min-w-[320px]">
                <div className="px-3 py-2 text-[11px] font-bold text-[#FABF33] uppercase tracking-wider border-b border-white/5">
                  Popular Destinations
                </div>
                <div className="search-dropdown-list mt-1">
                  {filteredDestinations.length > 0 ? (
                    filteredDestinations.map((dest) => (
                      <button
                        key={dest.id}
                        type="button"
                        onClick={() => {
                          onQueryChange?.(dest.name);
                          setIsDestOpen(false);
                        }}
                        className="search-dropdown-item"
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

          <div ref={catRef} className="search-select-field">
            <button
              type="button"
              onClick={() => {
                setIsCatOpen((prev) => !prev);
                setIsDestOpen(false);
              }}
              className="w-full flex items-center justify-between bg-transparent border-none text-[var(--cream,#F6EFDF)] text-sm cursor-pointer outline-none font-sans"
            >
              <span className="truncate">{getCategoryLabel(category)}</span>
              <ChevronDown
                className={`size-4 text-[#FABF33] transition-transform duration-200 shrink-0 ml-2 ${
                  isCatOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isCatOpen && (
              <div className="search-dropdown-menu left-0 sm:right-0 sm:left-auto min-w-[320px] sm:min-w-[360px] !text-left">
                <div className="px-3.5 py-2 text-[11px] font-bold text-[#FABF33] uppercase tracking-wider border-b border-white/5 !text-left">
                  Categories
                </div>
                <CategoryTreeDropdown
                  selectedCategory={category}
                  onSelect={(cat) => onCategoryChange?.(cat)}
                  onClose={() => setIsCatOpen(false)}
                />
              </div>
            )}
          </div>

          <div className="search-seg">
            <button
              type="button"
              className={`segbtn ${viewMode === "grid" ? "on" : ""}`}
              onClick={() => onViewModeChange?.("grid")}
            >
              &#9638; Grid
            </button>
            <button
              type="button"
              className={`segbtn ${viewMode === "map" ? "on" : ""}`}
              onClick={() => onViewModeChange?.("map")}
            >
              &#8982; Map
            </button>
          </div>
          <button type="submit" className="search-go-btn">
            SEARCH
          </button>
        </form>
      </div>
    </header>
  );
}
