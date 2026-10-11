"use client";

import React, { useState } from "react";
import { SearchHero } from "./SearchHero";
import { SearchResults } from "./SearchResults";

export function SearchContent() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  return (
    <main>
      <SearchHero
        query={query}
        onQueryChange={setQuery}
        category={category}
        onCategoryChange={setCategory}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <SearchResults
        searchQuery={query}
        selectedCategory={category}
        onCategoryChange={setCategory}
      />
    </main>
  );
}
