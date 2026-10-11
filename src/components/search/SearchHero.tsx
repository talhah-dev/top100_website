"use client";

import React from "react";

interface SearchHeroProps {
  query?: string;
  onQueryChange?: (val: string) => void;
  viewMode?: "grid" | "map";
  onViewModeChange?: (mode: "grid" | "map") => void;
  onSearch?: () => void;
}

export function SearchHero({
  query = "",
  onQueryChange,
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
            <span>What would you like to do?</span>
            <i className="chev">&#9662;</i>
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
