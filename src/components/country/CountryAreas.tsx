"use client";

import React from "react";
import Link from "next/link";
import { CountryData } from "./country-data";

interface CountryAreasProps {
  country: CountryData;
}

export function CountryAreas({ country }: CountryAreasProps) {
  return (
    <>
      <div className="wintro rv in">
        <div className="eyebrow">{country.introEyebrow}</div>
        <p>{country.introText}</p>
      </div>

      <div className="shead rv in">
        <h2>Start with an area</h2>
        <span className="rule" />
        <span className="cap">{country.areasCap}</span>
      </div>

      <div className="areas">
        {country.areas.map((area, idx) => (
          <Link
            key={area.title}
            className="imgcard rv in"
            href={area.link}
            style={{ "--d": `${idx * 0.1}s` } as React.CSSProperties}
          >
            <img
              loading="lazy"
              src={area.img}
              alt={area.alt}
            />
            <div className="veil" />
            <div className="meta">
              <span className="vchip">{area.badge}</span>
              <h3>{area.title}</h3>
              <p>{area.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
