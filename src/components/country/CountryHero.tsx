"use client";

import React from "react";
import Link from "next/link";
import { CountryData } from "./country-data";

interface CountryHeroProps {
  country: CountryData;
}

export function CountryHero({ country }: CountryHeroProps) {
  return (
    <header className="whero">
      <img
        className="bg"
        src={country.heroImage}
        alt={country.heroImageAlt}
      />
      <div className="veil" />
      <div className="wrap" id="heroInner">
        <div className="nband rv in">
          {country.flagColors.map((color, idx) => (
            <span key={idx} style={{ background: color }} />
          ))}
        </div>
        <div className="eyebrow rv in" style={{ "--d": ".08s" } as React.CSSProperties}>
          {country.eyebrow}
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
          <Link
            className="hbtn fill"
            href={`/search?q=${encodeURIComponent(country.name)}`}
          >
            SEE EVERY PLACE IN {country.name.toUpperCase()}
          </Link>
          <Link className="hbtn line" href="/map">
            OPEN THE MAP
          </Link>
        </div>
      </div>
    </header>
  );
}
