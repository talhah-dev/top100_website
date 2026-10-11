"use client";

import React from "react";
import Image from "next/image";

export function DetailGallery() {
  return (
    <section className="section" id="gallery" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">Film &amp; Gallery</span>
        </div>
        <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          See it <span className="grad">before you see it.</span>
        </h2>
        <a className="filmcard rv in" href="#video" aria-label="Play the Bodnant Garden film">
          <Image
            loading="lazy"
            src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1200&q=70"
            alt="Bodnant Garden, film still"
            width={1200}
            height={520}
          />
          <span className="veil" />
          <span className="play" />
          <div className="fmeta">
            <span className="fchip">Video</span>
            <h3>Bodnant Garden on film</h3>
            <p>YouTube, Vimeo or a direct file, set per business in the CRM.</p>
          </div>
        </a>

        <div className="gal">
          <div className="gitem tall rv in" style={{ "--d": ".05s" } as React.CSSProperties}>
            <Image
              loading="lazy"
              src="https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=800&q=70"
              alt="The river running through the Dell"
              width={800}
              height={400}
            />
          </div>
          <div className="gitem rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
            <Image
              loading="lazy"
              src="https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=800&q=70"
              alt="A rose on the upper terraces"
              width={800}
              height={400}
            />
          </div>
          <div className="gitem tall rv in" style={{ "--d": ".15s" } as React.CSSProperties}>
            <Image
              loading="lazy"
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=70"
              alt="Sunlight through the woodland walk"
              width={800}
              height={400}
            />
          </div>
          <div className="gitem rv in" style={{ "--d": ".2s" } as React.CSSProperties}>
            <Image
              loading="lazy"
              src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=70"
              alt="Massed begonias in high summer"
              width={800}
              height={400}
            />
          </div>
          <div className="gitem rv in" style={{ "--d": ".25s" } as React.CSSProperties}>
            <Image
              loading="lazy"
              src="https://images.unsplash.com/photo-1469259943454-aa100abba749?w=800&q=70"
              alt="Lilies in the borders"
              width={800}
              height={400}
            />
          </div>
          <div className="gitem tall rv in" style={{ "--d": ".3s" } as React.CSSProperties}>
            <Image
              loading="lazy"
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=70"
              alt="One of the champion trees"
              width={800}
              height={400}
            />
          </div>
          <div className="gitem wide rv in" style={{ "--d": ".35s" } as React.CSSProperties}>
            <Image
              loading="lazy"
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=70"
              alt="The view over the green valley"
              width={1200}
              height={400}
            />
          </div>
          <div className="gitem rv in" style={{ "--d": ".4s" } as React.CSSProperties}>
            <Image
              loading="lazy"
              src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&q=70"
              alt="Morning mist in the pinetum"
              width={800}
              height={400}
            />
          </div>
          <div className="gitem rv in" style={{ "--d": ".45s" } as React.CSSProperties}>
            <Image
              loading="lazy"
              src="https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?w=800&q=70"
              alt="A water lily on the terrace pond"
              width={800}
              height={400}
            />
          </div>
          <div className="gitem wide rv in" style={{ "--d": ".5s" } as React.CSSProperties}>
            <Image
              loading="lazy"
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1200&q=70"
              alt="Autumn light through the trees"
              width={1200}
              height={400}
            />
          </div>
          <div className="gitem rv in" style={{ "--d": ".55s" } as React.CSSProperties}>
            <Image
              loading="lazy"
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=70"
              alt="Poppies in the wildflower meadow"
              width={800}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
