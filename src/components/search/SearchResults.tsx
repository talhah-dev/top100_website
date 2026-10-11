"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export interface PlaceItem {
  id: string;
  title: string;
  category: string;
  region: string;
  image: string;
  quote: string;
  featured?: boolean;
  delay?: string;
}

const PLACES_DATA: PlaceItem[] = [
  {
    id: "titanic-belfast",
    title: "Titanic Belfast",
    category: "Attraction",
    region: "Northern Ireland",
    image: "https://images.unsplash.com/photo-1653143399868-6057edb4f0d3?w=800&q=70",
    quote: "The story of the ship, told in the place that built her.",
  },
  {
    id: "palace-of-westminster",
    title: "Palace of Westminster",
    category: "Attraction",
    region: "England",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&q=70",
    quote: "The seat of it all, best seen from the bridge at dusk.",
    delay: ".08s",
  },
  {
    id: "tower-bridge",
    title: "Tower Bridge",
    category: "Attraction",
    region: "England",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=70",
    quote: "London\u2019s front door, still earning the postcard.",
    delay: ".16s",
  },
  {
    id: "stonehenge",
    title: "Stonehenge",
    category: "Attraction",
    region: "England",
    image: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?w=800&q=70",
    quote: "Five thousand years old and still keeping its secret.",
  },
  {
    id: "conwy-castle",
    title: "Conwy Castle",
    category: "Attraction",
    region: "Wales",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=70",
    quote: "Eight towers that have never needed an introduction.",
    delay: ".08s",
  },
  {
    id: "bodnant-garden",
    title: "Bodnant Garden",
    category: "Garden",
    region: "Wales",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=70",
    quote: "Eighty acres that outclass most countries.",
    featured: true,
    delay: ".16s",
  },
  {
    id: "snowdon-railway",
    title: "Snowdon Mountain Railway",
    category: "Attraction",
    region: "Wales",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=70",
    quote: "The easy way up, and still the dramatic one.",
  },
  {
    id: "portmeirion-village",
    title: "Portmeirion Village",
    category: "Attraction",
    region: "Wales",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=70",
    quote: "An Italian dream on a Welsh estuary.",
    delay: ".08s",
  },
  {
    id: "zip-world",
    title: "Zip World Penrhyn Quarry",
    category: "Attraction",
    region: "Wales",
    image: "https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=70",
    quote: "The fastest zip line in the world, in a slate cathedral.",
    delay: ".16s",
  },
  {
    id: "caernarfon-castle",
    title: "Caernarfon Castle",
    category: "Attraction",
    region: "Wales",
    image: "https://images.unsplash.com/photo-1651046895371-0036c0790795?w=800&q=70",
    quote: "Built to intimidate. It still does.",
  },
  {
    id: "salthouse-hotel",
    title: "The Salthouse Hotel",
    category: "Hotel",
    region: "Northern Ireland",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=70",
    quote: "Eco luxury above Ballycastle\u2019s coast.",
    delay: ".08s",
  },
  {
    id: "cliff-house-hotel",
    title: "The Cliff House Hotel",
    category: "Hotel",
    region: "Ireland",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=70",
    quote: "Dinner over the sea in Ardmore.",
    delay: ".16s",
  },
];

interface SearchResultsProps {
  searchQuery?: string;
}

export function SearchResults({ searchQuery = "" }: SearchResultsProps) {
  const [activeRegion, setActiveRegion] = useState("All");
  const [extraItemsLoaded, setExtraItemsLoaded] = useState(false);

  const filteredPlaces = useMemo(() => {
    return PLACES_DATA.filter((place) => {
      const matchesRegion =
        activeRegion === "All" ||
        place.region.toLowerCase() === activeRegion.toLowerCase();
      const matchesQuery =
        !searchQuery.trim() ||
        place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.quote.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesQuery;
    });
  }, [activeRegion, searchQuery]);

  const displayedPlaces = extraItemsLoaded
    ? [...filteredPlaces, ...filteredPlaces.map((p, i) => ({ ...p, id: `${p.id}-extra-${i}` }))]
    : filteredPlaces;

  return (
    <section className="results" id="results">
      <div className="wrap">
        <div className="toolbar rv in">
          <div className="tcount">
            Showing {displayedPlaces.length} of 5,000+ places
          </div>
          <div className="tchips">
            {["All", "Wales", "England", "Ireland", "Northern Ireland", "Scotland"].map(
              (region) => (
                <button
                  type="button"
                  key={region}
                  className={`fchip ${activeRegion === region ? "on" : ""}`}
                  onClick={() => setActiveRegion(region)}
                >
                  {region}
                </button>
              )
            )}
            <span className="fchip">
              All types <i>&#9662;</i>
            </span>
            <span className="fchip">
              Sort: Recommended <i>&#9662;</i>
            </span>
          </div>
        </div>

        <div className="rgrid">
          {displayedPlaces.map((place) => (
            <Link
              key={place.id}
              className="rcard rv in"
              href="/detail"
              style={place.delay ? ({ "--d": place.delay } as React.CSSProperties) : undefined}
            >
              <div className="rph">
                <div className="rimg">
                  <Image
                    src={place.image}
                    alt={place.title}
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </div>
                {place.featured && <span className="rtag">Featured</span>}
              </div>
              <div className="rbody">
                <span className="rchip">
                  {place.category} &middot; {place.region}
                </span>
                <h3>{place.title}</h3>
                <p className="rquote">{place.quote}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="pagin rv in">
          <button
            type="button"
            className="loadmore"
            onClick={() => setExtraItemsLoaded((prev) => !prev)}
          >
            {extraItemsLoaded ? "SHOW LESS" : "LOAD MORE"}
          </button>
        </div>
      </div>
    </section>
  );
}
