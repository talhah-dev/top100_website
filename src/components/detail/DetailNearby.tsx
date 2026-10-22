"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface DetailNearbyProps {
  hideStayNearby?: boolean;
  hideEatNearby?: boolean;
  hideAttractionsNearby?: boolean;
}

export function DetailNearby({
  hideStayNearby = false,
  hideEatNearby = false,
  hideAttractionsNearby = false,
}: DetailNearbyProps = {}) {
  if (hideStayNearby && hideEatNearby && hideAttractionsNearby) {
    return null;
  }

  return (
    <>
      {!hideAttractionsNearby && (
        <section className="section" id="more" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <div className="kicker rv in">
              <span className="line" />
              <span className="eyebrow">Keep exploring</span>
            </div>
            <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
              Attractions <span className="grad">nearby.</span>
            </h2>
            <div className="mlgrid">
              <Link className="gcard rv in" href="/search">
                <div className="gph">
                  <Image
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=70"
                    alt="Conwy Castle"
                    width={800}
                    height={400}
                  />
                </div>
                <div className="gbody">
                  <span className="gchip">Attraction &middot; Wales</span>
                  <h3>Conwy Castle</h3>
                </div>
              </Link>
              <Link className="gcard rv in" href="/search" style={{ "--d": ".12s" } as React.CSSProperties}>
                <div className="gph">
                  <Image
                    src="https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=70"
                    alt="Zip World Penrhyn Quarry"
                    width={800}
                    height={400}
                  />
                </div>
                <div className="gbody">
                  <span className="gchip">Attraction &middot; Wales</span>
                  <h3>Zip World Penrhyn Quarry</h3>
                </div>
              </Link>
              <Link className="gcard rv in" href="/search" style={{ "--d": ".24s" } as React.CSSProperties}>
                <div className="gph">
                  <Image
                    src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=70"
                    alt="Portmeirion Village"
                    width={800}
                    height={400}
                  />
                </div>
                <div className="gbody">
                  <span className="gchip">Attraction &middot; Wales</span>
                  <h3>Portmeirion Village</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {!hideEatNearby && (
        <section className="section" id="eat" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <div className="kicker rv in">
              <span className="line" />
              <span className="eyebrow">And eat well</span>
            </div>
            <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
              Eat <span className="grad">nearby.</span>
            </h2>
            <div className="mlgrid">
              <Link className="gcard rv in" href="/search">
                <div className="gph">
                  <Image
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=70"
                    alt="The Jackdaw, Conwy"
                    width={800}
                    height={400}
                  />
                </div>
                <div className="gbody">
                  <span className="gchip">Place to Eat &middot; Wales</span>
                  <h3>The Jackdaw</h3>
                  <span className="gloc">Conwy &middot; 5 miles away</span>
                </div>
              </Link>
              <Link className="gcard rv in" href="/search" style={{ "--d": ".12s" } as React.CSSProperties}>
                <div className="gph">
                  <Image
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=70"
                    alt="Paysanne, Deganwy"
                    width={800}
                    height={400}
                  />
                </div>
                <div className="gbody">
                  <span className="gchip">Place to Eat &middot; Wales</span>
                  <h3>Paysanne</h3>
                  <span className="gloc">Deganwy &middot; 6 miles away</span>
                </div>
              </Link>
              <Link className="gcard rv in" href="/search" style={{ "--d": ".24s" } as React.CSSProperties}>
                <div className="gph">
                  <Image
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=70"
                    alt="Watson's Bistro, Conwy"
                    width={800}
                    height={400}
                  />
                </div>
                <div className="gbody">
                  <span className="gchip">Place to Eat &middot; Wales</span>
                  <h3>Watson&rsquo;s Bistro</h3>
                  <span className="gloc">Conwy &middot; 5 miles away</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {!hideStayNearby && (
        <section className="section" id="stay" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <div className="kicker rv in">
              <span className="line" />
              <span className="eyebrow">Make a night of it</span>
            </div>
            <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
              Stay <span className="grad">nearby.</span>
            </h2>
            <div className="mlgrid">
              <Link className="gcard rv in" href="/search">
                <div className="gph">
                  <Image
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&q=70"
                    alt="Bodysgallen Hall and Spa"
                    width={800}
                    height={400}
                  />
                </div>
                <div className="gbody">
                  <span className="gchip">Place to Stay &middot; Wales</span>
                  <h3>Bodysgallen Hall &amp; Spa</h3>
                  <span className="gloc">Llandudno &middot; 6 miles away</span>
                </div>
              </Link>
              <Link className="gcard rv in" href="/search" style={{ "--d": ".12s" } as React.CSSProperties}>
                <div className="gph">
                  <Image
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&q=70"
                    alt="The Quay Hotel and Spa"
                    width={800}
                    height={400}
                  />
                </div>
                <div className="gbody">
                  <span className="gchip">Place to Stay &middot; Wales</span>
                  <h3>The Quay Hotel &amp; Spa</h3>
                  <span className="gloc">Deganwy &middot; 6 miles away</span>
                </div>
              </Link>
              <Link className="gcard rv in" href="/search" style={{ "--d": ".24s" } as React.CSSProperties}>
                <div className="gph">
                  <Image
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=70"
                    alt="The Castle Hotel, Conwy"
                    width={800}
                    height={400}
                  />
                </div>
                <div className="gbody">
                  <span className="gchip">Place to Stay &middot; Wales</span>
                  <h3>The Castle Hotel</h3>
                  <span className="gloc">Conwy &middot; 5 miles away</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
