"use client";

import React, { useState } from "react";
import { Search, MapPin, Sparkles, Map, LayoutGrid, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSearch() {
  const [destination, setDestination] = useState("");
  const [activity, setActivity] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto rounded-full bg-black/45 backdrop-blur-xl border border-white/20 px-3 py-2 sm:px-5 sm:py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.55)] transition-all hover:border-white/30"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-2">
        <div className="flex items-center gap-2.5 w-full md:w-auto flex-1 px-3">
          <MapPin className="size-4 text-amber-300/80 shrink-0 hidden sm:block" />
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where would you like to go?"
            className="w-full bg-transparent text-sm text-white placeholder:text-zinc-400 focus:outline-none"
          />
        </div>

        <div className="hidden md:block h-6 w-px bg-white/20" />

        <div className="flex items-center gap-2.5 w-full md:w-auto flex-1 px-3">
          <Sparkles className="size-4 text-cyan-300/80 shrink-0 hidden sm:block" />
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            placeholder="What would you like to do?"
            className="w-full bg-transparent text-sm text-white placeholder:text-zinc-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-between md:justify-end">
          <span className="hidden md:inline text-white/40 text-xs">-</span>

          <div className="flex items-center gap-1.5 bg-white/10 rounded-full p-1 border border-white/10">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                viewMode === "grid"
                  ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              <span className="size-2 rounded-xs bg-amber-400 inline-block" />
              Grid
            </button>
            <button
              type="button"
              onClick={() => setViewMode("map")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                viewMode === "map"
                  ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              <Plus className="size-3" />
              Map
            </button>
          </div>

          <Button
            type="submit"
            className="rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 hover:from-emerald-300 hover:to-amber-200 text-slate-950 font-extrabold text-xs tracking-wider uppercase px-6 py-2 h-9 shadow-lg shadow-emerald-950/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            SEARCH
          </Button>
        </div>
      </div>
    </form>
  );
}
