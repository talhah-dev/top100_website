"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categoryItems = [
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch();
  };

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
          <input
            type="text"
            className="search-input-field"
            placeholder="Where would you like to go?"
            value={query}
            onChange={(e) => onQueryChange?.(e.target.value)}
          />

          <div className="search-select-field">
            <Select
              value={category}
              onValueChange={(val) => onCategoryChange?.(val || "All")}
            >
              <SelectTrigger className="w-full border-none bg-transparent shadow-none focus-visible:ring-0 text-[var(--cream,#fff)] text-sm  h-auto hover:bg-transparent cursor-pointer justify-between [&>svg]:text-[#FABF33] font-sans">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-[#101a30] border border-[#1e293b] text-white !p-2">
                <SelectGroup className={""}>
                  {categoryItems.map((item) => (
                    <SelectItem key={item.value} className={"!p-1"} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
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
