"use client";

import React, { useState } from "react";
import { SearchHero } from "./SearchHero";
import { SearchResults } from "./SearchResults";

export function SearchContent() {
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  return (
    <main>
      <SearchHero
        query={query}
        onQueryChange={setQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <SearchResults searchQuery={query} />
    </main>
  );
}
