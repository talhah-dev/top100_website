"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SearchHero } from "./SearchHero";
import { SearchResults } from "./SearchResults";

export function SearchContent() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category");
  const urlQuery = searchParams.get("q");
  const urlView = searchParams.get("view");

  const [query, setQuery] = useState(urlQuery || "");
  const [category, setCategory] = useState(urlCategory || "All");
  const [viewMode, setViewMode] = useState<"grid" | "map">(
    urlView === "map" ? "map" : "grid"
  );

  useEffect(() => {
    setCategory(urlCategory || "All");
  }, [urlCategory]);

  useEffect(() => {
    if (urlQuery !== null) {
      setQuery(urlQuery);
    }
  }, [urlQuery]);

  useEffect(() => {
    if (urlView === "map" || urlView === "grid") {
      setViewMode(urlView);
    }
  }, [urlView]);

  const handleCategoryChange = (newCat: string) => {
    setCategory(newCat);
    const params = new URLSearchParams(window.location.search);
    if (newCat && newCat !== "All") {
      params.set("category", newCat);
    } else {
      params.delete("category");
    }
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `/search?${qs}` : "/search");
  };

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    const params = new URLSearchParams(window.location.search);
    if (newQuery.trim()) {
      params.set("q", newQuery.trim());
    } else {
      params.delete("q");
    }
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `/search?${qs}` : "/search");
  };

  const handleViewModeChange = (newView: "grid" | "map") => {
    setViewMode(newView);
    const params = new URLSearchParams(window.location.search);
    if (newView && newView !== "grid") {
      params.set("view", newView);
    } else {
      params.delete("view");
    }
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `/search?${qs}` : "/search");
  };

  return (
    <main>
      <SearchHero
        query={query}
        onQueryChange={handleQueryChange}
        category={category}
        onCategoryChange={handleCategoryChange}
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
      />
      <SearchResults
        searchQuery={query}
        selectedCategory={category}
        onCategoryChange={handleCategoryChange}
      />
    </main>
  );
}
