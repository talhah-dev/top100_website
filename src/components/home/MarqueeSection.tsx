import React from "react";

const marqueeItems = [
  "Titanic Belfast",
  "Conwy Castle",
  "Powerscourt Estate",
  "Bodnant Garden",
  "The Salthouse Hotel",
  "Snowdon Mountain Railway",
  "The Merchant Hotel",
  "Portmeirion Village",
];

export function MarqueeSection() {
  const repeatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee">
      <div className="fade l" />
      <div className="fade r" />
      <div className="track" id="marqueeTrack">
        {repeatedItems.map((item, idx) => (
          <span key={idx} className="item">
            {item} <i>&#9733;</i>
          </span>
        ))}
      </div>
    </div>
  );
}
