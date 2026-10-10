import React from "react";
import Image from "next/image";
import { HeroEmblem } from "./HeroEmblem";
import { HeroWireframe } from "./HeroWireframe";
import { HeroSearch } from "./HeroSearch";

const journeyLetters = [
  { char: "t", color: "#38bdf8" },
  { char: "h", color: "#60a5fa" },
  { char: "e", color: "#818cf8" },
  { char: " ", color: "transparent" },
  { char: "j", color: "#34d399" },
  { char: "o", color: "#a3e635" },
  { char: "u", color: "#facc15" },
  { char: "r", color: "#fb923c" },
  { char: "n", color: "#f87171" },
  { char: "e", color: "#fb7185" },
  { char: "y", color: "#e879f9" },
  { char: ".", color: "#f43f5e" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-950 text-white pt-24 pb-10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Historic coastal cathedral and town"
          fill
          priority
          className="object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_20%,_rgba(2,6,23,0.7)_100%]" />
      </div>

      <HeroWireframe className="z-10" />

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 max-w-5xl mx-auto text-center mt-6">
        <HeroEmblem className="w-40 sm:w-48 md:w-56 mb-4" />

        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="size-1 rounded-full bg-amber-400/80" />
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-amber-300 uppercase drop-shadow-sm">
            THE UK&apos;S LEADING TOURIST INFORMATION WEBSITE
          </p>
          <span className="size-1 rounded-full bg-amber-400/80" />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Places worth{" "}
          <span className="inline-block whitespace-nowrap">
            {journeyLetters.map((item, idx) => (
              <span
                key={idx}
                style={{ color: item.color }}
                className="transition-transform duration-300 hover:scale-110 inline-block"
              >
                {item.char === " " ? "\u00A0" : item.char}
              </span>
            ))}
          </span>
        </h1>

        <p className="max-w-2xl text-xs sm:text-sm md:text-base text-zinc-200/90 italic font-light drop-shadow mb-8 leading-relaxed">
          Attractions, places to stay and to eat across Britain and Ireland, selected and reviewed to the Stevenson&apos;s standard.
        </p>

        <div className="w-full">
          <HeroSearch />
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center mt-6 text-amber-300/80 hover:text-amber-300 transition-colors cursor-pointer group">
        <span className="text-[10px] tracking-[0.25em] font-semibold uppercase">SCROLL</span>
        <div className="w-px h-6 bg-gradient-to-b from-amber-400/60 to-transparent mt-1 group-hover:h-8 transition-all" />
      </div>
    </section>
  );
}
