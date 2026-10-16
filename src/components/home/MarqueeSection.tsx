import React from "react";

const marqueeItems = [
  "Titanic Belfast",
  "Snowdon Mountain Railway",
  "Edinburgh Castle",
  "Roman Baths",
  "Powerscourt Estate",
  "The Salthouse Hotel",
  "Portmeirion Village",
  "Giant's Causeway",
  "Tower of London",
  "Loch Ness & Urquhart Castle",
  "Conwy Castle",
  "The Merchant Hotel",
  "Cliffs of Moher",
  "Eden Project",
  "Bodnant Garden",
  "Isle of Skye",
  "Carrick-a-Rede",
  "Stonehenge",
  "Mallmore Country House",
  "Zip World Penrhyn",
  "Stirling Castle",
  "Dunluce Castle",
  "Chatsworth House",
  "Killarney National Park",
  "Caernarfon Castle",
  "Glenfinnan Viaduct",
  "Warwick Castle",
  "Kylemore Abbey",
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
