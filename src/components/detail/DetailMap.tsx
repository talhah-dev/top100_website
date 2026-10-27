"use client";

import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

interface DetailMapProps {
  lat?: number;
  lng?: number;
  title?: string;
  placeType?: string;
  placeSubtype?: string;
  iconic?: boolean;
  embedQuery?: string;
}

export function DetailMap({
  lat,
  lng,
  title = "Attraction",
  placeType = "a",
  placeSubtype = "historic-house",
  iconic = false,
  embedQuery,
}: DetailMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (typeof lat !== "number" || typeof lng !== "number" || !containerRef.current) return;
    const latitude = lat;
    const longitude = lng;

    let isMounted = true;
    let leafletMap: import("leaflet").Map | null = null;

    async function initMap() {
      try {
        const L = await import("leaflet");
        if (!isMounted || !containerRef.current) return;

        leafletMap = L.map(containerRef.current, {
          zoomControl: true,
          attributionControl: false,
          scrollWheelZoom: false,
          zoomSnap: 0.25,
        }).setView([latitude, longitude], 15);

        L.tileLayer("https://{s}.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}", {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }).addTo(leafletMap);

        let iconsMap: Record<string, { colour?: string; file?: string }> = {};
        try {
          const res = await fetch("/icons/icons.json");
          const data = await res.json();
          data.forEach((i: { slug: string; colour?: string; file?: string }) => {
            iconsMap[i.slug] = i;
          });
        } catch {}

        if (!isMounted || !leafletMap) return;

        const types = placeType || "a";
        const n = types.length;
        const packCol = iconsMap[placeSubtype]?.colour || "#5E22BA";
        let body: string;
        let ink: string;
        let line: string;

        if (types === "a") {
          body = packCol;
          ink = "#FFFFFF";
          line = "#F6EFDF";
        } else {
          body = "#0A1122";
          ink = "#FFFFFF";
          line = types.indexOf("a") > -1 ? packCol : types.indexOf("e") > -1 ? "#F0607A" : "#6E8BFF";
        }

        const pinBtn = document.createElement("button");
        pinBtn.type = "button";
        pinBtn.className = "pin " + (n === 1 ? "t-" + types : "multi") + (n > 1 ? " n" + n : "") + (iconic ? " iconic" : "");
        pinBtn.style.setProperty("--pin-body-own", body);
        pinBtn.style.setProperty("--pin-ink-own", ink);
        pinBtn.style.setProperty("--pin-line-own", line);
        pinBtn.style.setProperty("--pin-body", body);
        pinBtn.style.setProperty("--pin-line", line);
        pinBtn.style.setProperty("--pin-ink", ink);
        pinBtn.setAttribute("aria-label", title);

        let cells = "";
        for (let i = 0; i < types.length; i++) {
          if (i) cells += '<span class="divider"></span>';
          if (types[i] === "a") {
            const file = iconsMap[placeSubtype]?.file || "60-local-landmark.png";
            const m = `/icons/${file}`;
            cells += `<span class="g" style="-webkit-mask-image:url(${m});mask-image:url(${m})"></span>`;
          } else {
            cells += `<span class="g g-${types[i] === "e" ? "eat" : "stay"}"></span>`;
          }
        }

        pinBtn.innerHTML = `<span class="body" style="background:${body};border:2.5px solid ${line}">${cells}</span>`;

        const customMarker = L.marker([latitude, longitude], {
          icon: L.divIcon({
            className: "",
            html: "",
            iconSize: [0, 0],
          }),
          keyboard: false,
        });

        customMarker.on("add", (e) => {
          const el = e.target.getElement();
          if (!el) return;
          el.style.width = "0";
          el.style.height = "0";
          el.appendChild(pinBtn);
        });

        customMarker.addTo(leafletMap);
        setHasLoaded(true);
      } catch {}
    }

    initMap();

    return () => {
      isMounted = false;
      if (leafletMap) {
        leafletMap.remove();
        leafletMap = null;
      }
    };
  }, [lat, lng, placeType, placeSubtype, iconic, title]);

  if (!lat || !lng) {
    return (
      <iframe
        title={`Map of ${title}`}
        width="100%"
        height="100%"
        style={{
          border: 0,
          width: "100%",
          height: "100%",
          minHeight: "420px",
          position: "absolute",
          inset: 0,
        }}
        loading="lazy"
        src={`https://maps.google.com/maps?q=${embedQuery || encodeURIComponent(title)}&hl=en&z=15&output=embed`}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="detail-leaflet-map w-full h-full min-h-[420px] relative"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "420px",
        position: "absolute",
        inset: 0,
        background: "#f2efe9",
      }}
    />
  );
}
