"use client";

import React, { useState } from "react";
import Link from "next/link";

const regionsData = [
  {
    key: "wales",
    name: "Wales",
    img: "https://images.unsplash.com/photo-1697403471010-5b1b1f51236c?w=900&q=70",
    alt: "Conwy Castle and its walled town from the air, Wales",
    delay: "0s",
    teasers: [
      { name: "Conwy Castle", loc: "Conwy" },
      { name: "Portmeirion Village", loc: "Gwynedd" },
      { name: "Bodnant Garden", loc: "Conwy Valley" },
    ],
  },
  {
    key: "england",
    name: "England",
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=900&q=70",
    alt: "England",
    delay: ".1s",
    teasers: [
      { name: "Tower of London", loc: "London" },
      { name: "The Eden Project", loc: "Cornwall" },
      { name: "Windsor Great Park", loc: "Berkshire" },
    ],
  },
  {
    key: "ireland",
    name: "Ireland",
    img: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=900&q=70",
    alt: "Ireland",
    delay: ".2s",
    teasers: [
      { name: "Powerscourt Estate", loc: "County Wicklow" },
      { name: "Cliffs of Moher", loc: "County Clare" },
      { name: "Guinness Storehouse", loc: "Dublin" },
    ],
  },
  {
    key: "nireland",
    name: "Northern Ireland",
    img: "https://images.unsplash.com/photo-1653143399868-6057edb4f0d3?w=900&q=70",
    alt: "Northern Ireland",
    delay: ".3s",
    teasers: [
      { name: "Titanic Belfast", loc: "Belfast" },
      { name: "Giant&rsquo;s Causeway", loc: "County Antrim" },
      { name: "The Merchant Hotel", loc: "Belfast" },
    ],
  },
  {
    key: "scotland",
    name: "Scotland",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=70",
    alt: "Scotland",
    delay: ".4s",
    teasers: [
      { name: "Edinburgh Castle", loc: "Edinburgh" },
      { name: "Loch Lomond", loc: "The Trossachs" },
      { name: "Isle of Skye", loc: "The Hebrides" },
    ],
  },
];

export function RegionsSection() {
  const [openRegion, setOpenRegion] = useState<string | null>(null);

  const toggleRegion = (key: string) => {
    setOpenRegion((prev) => (prev === key ? null : key));
  };

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
          {regionsData.map((reg) => {
            const isOpen = openRegion === reg.key;
            return (
              <div
                key={reg.key}
                onClick={() => toggleRegion(reg.key)}
                className={`nation ${reg.key} rv in ${isOpen ? "open" : ""}`}
                style={{ "--d": reg.delay } as React.CSSProperties}
              >
                <img src={reg.img} alt={reg.alt} />
                <div className="wash" />
                <div className="teaser">
                  {reg.teasers.map((t, idx) => (
                    <div key={idx} className="t-item">
                      <span dangerouslySetInnerHTML={{ __html: t.name }} />
                      <i>{t.loc}</i>
                    </div>
                  ))}
                  <Link href={`#${reg.key}`} className="t-all">
                    EXPLORE {reg.name.toUpperCase()} &rarr;
                  </Link>
                </div>
                <div className="label">
                  <b>{reg.name}</b>
                  <i>{isOpen ? "TAP TO COLLAPSE" : "TAP TO EXPLORE &rarr;"}</i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
