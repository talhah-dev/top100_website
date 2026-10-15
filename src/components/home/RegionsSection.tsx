"use client";

import React from "react";
import Link from "next/link";

const regionsData = [
  {
    key: "wales",
    name: "Wales",
    slug: "wales",
    img: "https://images.unsplash.com/photo-1697403471010-5b1b1f51236c?w=900&q=70",
    alt: "Conwy Castle and its walled town from the air, Wales",
    delay: "0s",
  },
  {
    key: "england",
    name: "England",
    slug: "england",
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=900&q=70",
    alt: "England",
    delay: ".1s",
  },
  {
    key: "ireland",
    name: "Ireland",
    slug: "ireland",
    img: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=900&q=70",
    alt: "Ireland",
    delay: ".2s",
  },
  {
    key: "nireland",
    name: "Northern Ireland",
    slug: "northern-ireland",
    img: "https://images.unsplash.com/photo-1653143399868-6057edb4f0d3?w=900&q=70",
    alt: "Northern Ireland",
    delay: ".3s",
  },
  {
    key: "scotland",
    name: "Scotland",
    slug: "scotland",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=70",
    alt: "Scotland",
    delay: ".4s",
  },
];

export function RegionsSection() {
  return (
    <section className="section" id="regions" style={{ paddingTop: "40px" }}>
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">Explore by Region</span>
        </div>
        <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          One standard. <span className="grad">Five very different adventures.</span>
        </h2>
        <div className="nations">
          {regionsData.map((reg) => (
            <Link
              key={reg.key}
              href={`/country/${reg.slug}`}
              className={`nation ${reg.key} rv in`}
              style={{ "--d": reg.delay } as React.CSSProperties}
            >
              <img src={reg.img} alt={reg.alt} />
              <div className="wash" />
              <div className="label">
                <b>{reg.name}</b>
                <i>EXPLORE {reg.name.toUpperCase()} &rarr;</i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
