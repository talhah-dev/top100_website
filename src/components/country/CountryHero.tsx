"use client";

import React from "react";
import Link from "next/link";
import { CountryData } from "./country-data";

interface CountryHeroProps {
  country: CountryData;
}

const COUNTRY_FLAGS: Record<string, string> = {
  england: "/flags/england.svg",
  wales: "/flags/wales.svg",
  scotland: "/flags/scotland.svg",
  ireland: "/flags/ireland.svg",
  "northern-ireland": "/flags/northern-ireland.svg",
};

export function CountryHero({ country }: CountryHeroProps) {
  const flagUrl = country.flagUrl || COUNTRY_FLAGS[country.slug] || `/flags/${country.slug}.svg`;

  return (
    <header className="whero">
      <img
        className="bg"
        src={country.heroImage}
        alt={country.heroImageAlt}
      />
      <div className="veil" />
      <div className="wrap" id="heroInner">
        <div className="eyebrow rv in" style={{ "--d": ".08s" } as React.CSSProperties}>
          {flagUrl && (
            <img
              src={flagUrl}
              alt={country.name}
              width={20}
              height={14}
              className="badge-flag"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith(".png")) {
                  target.src = `/flags/${country.slug}.png`;
                }
              }}
            />
          )}
          <span>{country.eyebrow}</span>
        </div>
        <h1>
          <span className="wline">
            <span style={{ transitionDelay: ".3s" }}>
              {country.headline}{" "}
              <em className="grad" style={{ fontStyle: "normal" }}>
                {country.headlineGradient}
              </em>
            </span>
          </span>
        </h1>
        <p className="hsub rv in" style={{ "--d": ".45s" } as React.CSSProperties}>
          {country.subheadline}
        </p>
        <div className="hbtns rv in" style={{ "--d": ".55s" } as React.CSSProperties}>
          <Link className="hbtn line" href="/map">
            OPEN THE MAP
          </Link>
        </div>
      </div>
    </header>
  );
}
