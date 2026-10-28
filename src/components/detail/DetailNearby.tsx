"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface NearbyItem {
  slug: string;
  title: string;
  imageUrl?: string;
  town?: string;
  area?: string;
  distanceMiles?: number;
  categoryLabel?: string;
}

interface DetailNearbyProps {
  hideStayNearby?: boolean;
  hideEatNearby?: boolean;
  hideAttractionsNearby?: boolean;
  sectionOrder?: ("attractions" | "eat" | "stay")[];
  attractions?: NearbyItem[];
  eat?: NearbyItem[];
  stay?: NearbyItem[];
}

const DEFAULT_ATTRACTIONS: NearbyItem[] = [
  {
    slug: "zipworld-penrhyn-quarry",
    title: "Zip World Penrhyn Quarry",
    imageUrl: "https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=70",
    town: "Bangor",
    categoryLabel: "Attraction · Wales",
  },
  {
    slug: "portmeirion",
    title: "Portmeirion Village",
    imageUrl: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=70",
    town: "Gwynedd",
    categoryLabel: "Attraction · Wales",
  },
  {
    slug: "conwy-falls-forest-park",
    title: "Conwy Falls Forest Park",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=70",
    town: "Betws-y-Coed",
    categoryLabel: "Attraction · Wales",
  },
];

const DEFAULT_EAT: NearbyItem[] = [
  {
    slug: "the-gors-bach-inn",
    title: "The Gors Bach Inn",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=70",
    town: "Caernarfon",
    distanceMiles: 5,
    categoryLabel: "Place to Eat · Wales",
  },
  {
    slug: "paysanne",
    title: "Paysanne",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=70",
    town: "Deganwy",
    distanceMiles: 6,
    categoryLabel: "Place to Eat · Wales",
  },
  {
    slug: "watsons-bistro",
    title: "Watson's Bistro",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=70",
    town: "Conwy",
    distanceMiles: 5,
    categoryLabel: "Place to Eat · Wales",
  },
];

const DEFAULT_STAY: NearbyItem[] = [
  {
    slug: "hotel-port-dinorwic",
    title: "Hotel Port Dinorwic",
    imageUrl: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&q=70",
    town: "Y Felinheli",
    distanceMiles: 6,
    categoryLabel: "Place to Stay · Wales",
  },
  {
    slug: "ty-mawr-farm-cottages",
    title: "Ty Mawr Farm Cottages",
    imageUrl: "https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&q=70",
    town: "Caernarfon",
    distanceMiles: 6,
    categoryLabel: "Place to Stay · Wales",
  },
  {
    slug: "the-castle-hotel-newtownstewart",
    title: "The Castle Hotel",
    imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=70",
    town: "Conwy",
    distanceMiles: 5,
    categoryLabel: "Place to Stay · Wales",
  },
];

function renderCards(items: NearbyItem[], defaultLabel: string) {
  return (
    <div className="mlgrid">
      {items.map((item, index) => (
        <Link
          key={`${item.slug}-${index}`}
          className="gcard rv in"
          href={`/detail/${item.slug}`}
          style={index > 0 ? ({ "--d": `${index * 0.12}s` } as React.CSSProperties) : undefined}
        >
          <div className="gph">
            <Image
              src={item.imageUrl || "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=70"}
              alt={item.title}
              width={800}
              height={400}
              unoptimized
            />
          </div>
          <div className="gbody">
            <span className="gchip">{item.categoryLabel || defaultLabel}</span>
            <h3>{item.title}</h3>
            {(item.town || item.distanceMiles) && (
              <span className="gloc">
                {[
                  item.town,
                  item.distanceMiles
                    ? `${item.distanceMiles} mile${item.distanceMiles === 1 ? "" : "s"} away`
                    : null,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

export function DetailNearby({
  hideStayNearby = false,
  hideEatNearby = false,
  hideAttractionsNearby = false,
  sectionOrder = ["attractions", "eat", "stay"],
  attractions,
  eat,
  stay,
}: DetailNearbyProps = {}) {
  if (hideStayNearby && hideEatNearby && hideAttractionsNearby) {
    return null;
  }

  const finalAttractions = attractions && attractions.length > 0 ? attractions : DEFAULT_ATTRACTIONS;
  const finalEat = eat && eat.length > 0 ? eat : DEFAULT_EAT;
  const finalStay = stay && stay.length > 0 ? stay : DEFAULT_STAY;

  const sectionMap: Record<"attractions" | "eat" | "stay", React.ReactNode> = {
    attractions: !hideAttractionsNearby ? (
      <section className="section" id="more" key="attractions" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="kicker rv in">
            <span className="line" />
            <span className="eyebrow">Keep exploring</span>
          </div>
          <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
            Attractions <span className="grad">nearby.</span>
          </h2>
          {renderCards(finalAttractions, "Attraction")}
        </div>
      </section>
    ) : null,

    eat: !hideEatNearby ? (
      <section className="section" id="eat" key="eat" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="kicker rv in">
            <span className="line" />
            <span className="eyebrow">And eat well</span>
          </div>
          <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
            Eat <span className="grad">nearby.</span>
          </h2>
          {renderCards(finalEat, "Place to Eat")}
        </div>
      </section>
    ) : null,

    stay: !hideStayNearby ? (
      <section className="section" id="stay" key="stay" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="kicker rv in">
            <span className="line" />
            <span className="eyebrow">Make a night of it</span>
          </div>
          <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
            Stay <span className="grad">nearby.</span>
          </h2>
          {renderCards(finalStay, "Place to Stay")}
        </div>
      </section>
    ) : null,
  };

  return (
    <>
      {sectionOrder.map((key) => sectionMap[key])}
    </>
  );
}