"use client";

import React from "react";
import Link from "next/link";
import { CountryData } from "./country-data";

interface CountryPicksProps {
  country: CountryData;
}

export function CountryPicks({ country }: CountryPicksProps) {
  return (
    <>
      <div className="shead rv in">
        <h2>The guide&rsquo;s picks in {country.name}</h2>
        <span className="rule" />
        <span className="cap">{country.picksCap}</span>
      </div>

      <div className="rgrid" style={{ marginTop: 0 }}>
        {country.picks.map((pick, idx) => (
          <Link
            key={pick.title}
            className="rcard rv in"
            href={pick.link}
            style={{ "--d": `${(idx % 3) * 0.08}s` } as React.CSSProperties}
          >
            <div className="rph">
              <div className="rimg">
                <img src={pick.img} alt={pick.alt} loading="lazy" />
              </div>
              {pick.featured && <span className="rtag">Featured</span>}
            </div>
            <div className="rbody">
              <span className="rchip">{pick.badge}</span>
              <h3>{pick.title}</h3>
              <p className="rquote">{pick.quote}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagin rv in">
        <Link
          className="loadmore"
          href={`/search?q=${encodeURIComponent(country.name)}`}
        >
          SEE ALL OF {country.name.toUpperCase()}
        </Link>
      </div>
    </>
  );
}
