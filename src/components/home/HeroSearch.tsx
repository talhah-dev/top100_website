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
    id: "all",
    name: "All Countries",
    flagUrl: "/flags/gb.svg",
  },
  {
    id: "wales",
    name: "Wales",
    flagUrl: "/flags/wales.svg",
  },
  {
    id: "england",
    name: "England",
    flagUrl: "/flags/england.svg",
  },
  {
    id: "ireland",
    name: "Ireland",
    flagUrl: "/flags/ireland.svg",
  },
  {
    id: "northern-ireland",
    name: "Northern Ireland",
    flagUrl: "/flags/northern-ireland.svg",
  },
  {
    id: "scotland",
    name: "Scotland",
    flagUrl: "/flags/scotland.svg",
  },
];

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [destination, setDestination] = useState("All");
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

    if (viewMode === "map") {
      router.push("/map");
      return;
    }

    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (destination && destination !== "All") params.set("area", destination);
    if (category && category !== "All") params.set("category", category);

    const qs = params.toString();
    router.push(qs ? `/search?${qs}` : "/search");
  };

  const selectedDest = DESTINATIONS.find((d) => d.name === destination);

  return (
    <form
      onSubmit={handleSearch}
      className="search rv in"
      style={{ "--d": "1.15s" } as React.CSSProperties}
    >
      <div className="search-keyword-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What would you like to search?"
        />
      </div>

      <div ref={destRef} className="search-dest-box">
        <button
          type="button"
          onClick={() => {
            setIsDestOpen((prev) => !prev);
            setIsCatOpen(false);
          }}
          className="w-full flex items-center justify-between bg-transparent border-none text-[var(--cream,#F6EFDF)] text-sm cursor-pointer outline-none font-sans"
        >
          <div className="flex items-center gap-2 min-w-0">
            {selectedDest && destination !== "All" ? (
              <img
                src={selectedDest.flagUrl}
                alt=""
                width={20}
                height={14}
                className="w-5 h-3.5 object-cover rounded shrink-0 border border-white/10"
              />
            ) : null}
            <span className="truncate">
              {destination && destination !== "All"
                ? destination
                : "Where would you like to go?"}
            </span>
          </div>
          <ChevronDown
            className={`size-4 text-[#FABF33] transition-transform duration-200 shrink-0 ml-2 ${
              isDestOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDestOpen && (
          <div className="hero-dropdown-menu left-0 min-w-[240px] sm:min-w-[270px]">
            <div className="px-3 py-2 text-[11px] font-bold text-[#FABF33] uppercase tracking-wider border-b border-white/5">
              Select Country
            </div>
            <div className="hero-dropdown-list mt-1">
              {DESTINATIONS.map((dest) => {
                const isSelected =
                  (dest.id === "all" && (!destination || destination === "All")) ||
                  destination === dest.name;
                return (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => {
                      setDestination(dest.id === "all" ? "All" : dest.name);
                      setIsDestOpen(false);
                    }}
                    className={`hero-dropdown-item ${isSelected ? "active" : ""}`}
                  >
                    <img
                      src={dest.flagUrl}
                      alt={dest.name}
                      width={24}
                      height={16}
                      className="w-6 h-4 object-cover rounded shadow-xs border border-white/10 shrink-0"
                      loading="lazy"
                    />
                    <span className="flex-1 text-left">{dest.name}</span>
                    {isSelected && (
                      <Check className="size-3.5 text-[#FABF33] shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
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
