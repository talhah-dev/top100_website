import React from "react";
import Link from "next/link";

const featuredItems = [
  {
    chip: "Featured Attraction · Wales",
    title: "Bodnant Garden",
    where: "Tal-y-Cafn, Conwy Valley, North Wales",
    quote: "Eighty acres of pure horticultural theatre. Time your visit for the laburnum arch and thank me later.",
    who: "JOSH STEVENSON",
    linkText: "READ THE FULL REVIEW",
    href: "#attractions",
    img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1400&q=75",
    flip: false,
  },
  {
    chip: "Featured Place to Eat · Wales",
    title: "The Jackdaw",
    where: "Conwy, North Wales",
    quote: "Modern Welsh cooking with serious ambition, five minutes from the castle walls. Book the tasting menu and let them show off.",
    who: "JOSH STEVENSON",
    linkText: "VIEW THE FULL LISTING",
    href: "#eat",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=75",
    flip: true,
  },
  {
    chip: "Featured Place to Stay · Wales",
    title: "Bodysgallen Hall & Spa",
    where: "Llandudno, North Wales",
    quote: "A seventeenth century manor with Snowdonia filling every window. Arrive for one night and you will wish you had booked three.",
    who: "JOSH STEVENSON",
    linkText: "VIEW THE FULL LISTING",
    href: "#stay",
    img: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=1400&q=75",
    flip: false,
  },
];

export function FeaturedSection() {
  return (
    <section className="section" id="featured">
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">In the Spotlight</span>
        </div>
        <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          Start with <span className="grad">the standouts.</span>
        </h2>

        {featuredItems.map((item, idx) => (
          <div key={idx} className={`entry ${item.flip ? "flip" : ""}`}>
            <div className="media rv in">
              <div className="frame">
                <div className="ph">
                  <img src={item.img} alt={item.title} data-pimg />
                </div>
              </div>
            </div>
            <div>
              <span className="chip rv in">
                <b>{item.chip}</b>
              </span>
              <h3 className="rv in" style={{ "--d": ".08s" } as React.CSSProperties}>
                {item.title}
              </h3>
              <div className="where rv in" style={{ "--d": ".14s" } as React.CSSProperties}>
                {item.where}
              </div>
              <blockquote className="rv in" style={{ "--d": ".2s" } as React.CSSProperties}>
                {item.quote}
                <span className="who">{item.who}</span>
              </blockquote>
              <Link
                className="more rv in"
                href={item.href}
                style={{ "--d": ".26s" } as React.CSSProperties}
              >
                {item.linkText} <span>&rarr;</span>
              </Link>
            </div>
          </div>
        ))}

        <div className="interlude rv in">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=70"
            alt="Mountain landscape"
            data-pimg
          />
          <div className="veil" />
          <div className="txt">
            <b>The map opens up.</b>
            <span>
              From landmark days out to memorable meals and stays, there is more to discover in every direction.
            </span>
            <Link className="cta" href="#search" style={{ display: "inline-block", marginTop: "26px" }}>
              EXPLORE ALL
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
