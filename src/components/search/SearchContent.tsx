"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SearchHero } from "./SearchHero";
import { SearchResults } from "./SearchResults";

export function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category");
  const urlQuery = searchParams.get("q");
  const urlArea = searchParams.get("area") || searchParams.get("destination");
  const urlView = searchParams.get("view");

  const [query, setQuery] = useState(urlQuery || "");
  const [debouncedQuery, setDebouncedQuery] = useState(urlQuery || "");
  const [destination, setDestination] = useState(urlArea || "All");
  const [category, setCategory] = useState(urlCategory || "All");
  const [viewMode, setViewMode] = useState<"grid" | "map">(
    urlView === "map" ? "map" : "grid"
  );

  useEffect(() => {
    const q = searchParams.get("q") || "";
    const a = searchParams.get("area") || searchParams.get("destination") || "All";
    const c = searchParams.get("category") || "All";
    const v = searchParams.get("view");

    setQuery(q);
    setDebouncedQuery(q);
    setDestination(a);
    setCategory(c);
    if (v === "map" || v === "grid") {
      setViewMode(v);
    }
  }, [searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      const params = new URLSearchParams(window.location.search);
      if (query.trim()) {
        params.set("q", query.trim());
      } else {
        params.delete("q");
      }
      const qs = params.toString();
      window.history.replaceState(null, "", qs ? `/search?${qs}` : "/search");
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

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
  };

  const handleDestinationChange = (newDest: string) => {
    setDestination(newDest);
    const params = new URLSearchParams(window.location.search);
    if (newDest && newDest !== "All") {
      params.set("area", newDest);
    } else {
      params.delete("area");
    }
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `/search?${qs}` : "/search");
  };

  const handleSearchSubmit = () => {
    if (viewMode === "map") {
      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      if (destination && destination !== "All" && destination !== "All Countries") params.set("area", destination);
      if (category && category !== "All") params.set("category", category);
      const qs = params.toString();
      router.push(qs ? `/map?${qs}` : "/map");
      return;
    }
    setDebouncedQuery(query);
    const params = new URLSearchParams(window.location.search);
    if (query.trim()) params.set("q", query.trim());
    else params.delete("q");
    if (destination && destination !== "All") params.set("area", destination);
    else params.delete("area");
    if (category && category !== "All") params.set("category", category);
    else params.delete("category");
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `/search?${qs}` : "/search");

    const el = document.getElementById("results");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewModeChange = (newView: "grid" | "map") => {
    if (newView === "map") {
      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      if (destination && destination !== "All" && destination !== "All Countries") params.set("area", destination);
      if (category && category !== "All") params.set("category", category);
      const qs = params.toString();
      router.push(qs ? `/map?${qs}` : "/map");
      return;
    }
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
        destination={destination}
        onDestinationChange={handleDestinationChange}
        category={category}
        onCategoryChange={handleCategoryChange}
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
        onSearch={handleSearchSubmit}
      />
      <SearchResults
        searchQuery={debouncedQuery}
        selectedCategory={category}
        onCategoryChange={handleCategoryChange}
        selectedRegion={destination}
        onRegionChange={handleDestinationChange}
      />
    </main>
  );
}
