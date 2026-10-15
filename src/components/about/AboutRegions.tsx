import React from "react";
import Link from "next/link";

const regions = [
  {
    name: "Wales",
    href: "/country/wales",
    cls: "wales",
    img: "https://images.unsplash.com/photo-1697403471010-5b1b1f51236c?w=900&q=70",
    delay: "0s",
  },
  {
    name: "England",
    href: "/country/england",
    cls: "england",
    img: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=900&q=70",
    delay: ".1s",
  },
  {
    name: "Ireland",
    href: "/country/ireland",
    cls: "ireland",
    img: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=900&q=70",
    delay: ".2s",
  },
  {
    name: "Northern Ireland",
    href: "/country/northern-ireland",
    cls: "nireland",
    img: "https://images.unsplash.com/photo-1653143399868-6057edb4f0d3?w=900&q=70",
    delay: ".3s",
  },
  {
    name: "Scotland",
    href: "/country/scotland",
    cls: "scotland",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=70",
    delay: ".4s",
  },
];

export function AboutRegions() {
  return (
    <section className="section" id="regions" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="shead rv in">
          <h2>Five regions, one standard</h2>
          <span className="rule" />
          <span className="cap">
            ENGLAND &middot; SCOTLAND &middot; WALES &middot; NORTHERN IRELAND &middot; IRELAND
          </span>
        </div>
        <div className="nations">
          {regions.map((reg) => (
            <Link
              key={reg.name}
              className={`nation ${reg.cls} rv in`}
              href={reg.href}
              style={{ "--d": reg.delay } as React.CSSProperties}
            >
              <img
                src={reg.img}
                alt={reg.name}
                loading="lazy"
              />
              <div className="wash" />
              <div className="label">
                <b>{reg.name}</b>
                <i>TAP TO EXPLORE &rarr;</i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
