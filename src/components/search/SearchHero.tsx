"use client";

import React from "react";

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
          <div className="search-select-field relative flex items-center">
            <select
              value={category}
              onChange={(e) => onCategoryChange?.(e.target.value)}
              className="w-full bg-transparent text-sm text-[var(--cream)] border-none outline-none appearance-none cursor-pointer pr-6"
              style={{ color: "var(--cream, #fff)" }}
            >
              <option value="All" className="bg-[#101a30] text-white">All Categories</option>
              <option value="Attractions" className="bg-[#101a30] text-white">Attractions</option>
              <option value="Historical Places" className="bg-[#101a30] text-white">Historical Places</option>
              <option value="Garden" className="bg-[#101a30] text-white">Gardens</option>
              <option value="Museums" className="bg-[#101a30] text-white">Museums</option>
              <option value="Accommodation" className="bg-[#101a30] text-white">Accommodation</option>
              <option value="Hotels" className="bg-[#101a30] text-white">Hotels</option>
              <option value="Eating Out" className="bg-[#101a30] text-white">Eating Out</option>
              <option value="Iconic" className="bg-[#101a30] text-white">Iconic</option>
              <option value="Pet Friendly" className="bg-[#101a30] text-white">Pet Friendly</option>
            </select>
            <i className="chev pointer-events-none">&#9662;</i>
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
