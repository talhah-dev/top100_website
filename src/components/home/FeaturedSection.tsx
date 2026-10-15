import React from "react";
import Link from "next/link";

const featuredItems = [
  {
    chip: "Featured Attraction",
    title: "Universal Orlando Resort",
    where: "Orlando, Florida",
    quote: "As a seasoned travel journalist with nearly two decades of experience visiting attractions across the British Isles and Ireland, I embarked on a journey to sunny Florida to see how some of the world's biggest theme parks compare. My first stop was Universal Studios and the Islands of Adventure in Orlando.",
    who: "JOSH STEVENSON",
    linkText: "READ THE FULL REVIEW",
    href: "/search?q=Universal+Orlando",
    img: "/images/standouts/universal-orlando.jpg",
    flip: false,
  },
  {
    chip: "Featured Dining",
    title: "The Salthouse Hotel",
    where: "Ballycastle, County Antrim",
    quote: "Fresh from appearing in my Top 100 Romantic Destinations book, The Salthouse Hotel & Spa has taken luxury to the next level. Since my last visit, this incredible retreat has evolved dramatically, cementing its place among Northern Ireland’s finest hotels. With opulent bedrooms and eco-lodges, luxury is simply standard here.",
    who: "JOSH STEVENSON",
    linkText: "VIEW THE FULL LISTING",
    href: "/search?q=The+Salthouse+Hotel",
    img: "/images/standouts/salthouse-hotel.jpg",
    flip: true,
  },
  {
    chip: "Featured Accommodation",
    title: "The Merchant Hotel",
    where: "Belfast, Northern Ireland",
    quote: "An ideal base when visiting Belfast, this outstanding hotel blends luxury and originality in the most fascinating of ways. The rooms are incredibly designed with rainfall showers and cosy armchairs, and the rooftop hot tub overlooks the city.",
    who: "JOSH STEVENSON",
    linkText: "VIEW THE FULL LISTING",
    href: "/search?q=The+Merchant+Hotel",
    img: "/images/standouts/merchant-hotel.jpg",
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
