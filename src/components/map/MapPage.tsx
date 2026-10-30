"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./map.css";

interface Place {
  n: string;
  s: string;
  lat: number;
  lng: number;
  t: string;
  st: string;
  ic: number;
  town?: string;
  summary?: string;
}

interface IconDef {
  id: number;
  label: string;
  slug: string;
  file: string;
  colour: string;
  aspect: number;
}

const BANDS = [
  { k: "country", label: "COUNTRY", min: 0, max: 6.99, zoom: 6, v1: "Not a list.", v2: "A verdict." },
  { k: "region", label: "REGION", min: 7, max: 9.99, zoom: 8.2, v1: "{region}.", v2: "{n} worth the journey." },
  { k: "town", label: "TOWN", min: 10, max: 13.49, zoom: 11.6, v1: "{place}.", v2: "{n} reasons to stop." },
  { k: "street", label: "STREET", min: 13.5, max: 22, zoom: 15, v1: "You're here.", v2: "Now choose." },
];

const WORDS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
  "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven",
  "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four",
];

const REGIONS = [
  { k: "wales", name: "Wales", col: "#C31A35", lat: 52.65, lng: -3.75, loaded: true },
  { k: "england", name: "England", col: "#00356B", lat: 52.60, lng: -1.30, loaded: true },
  { k: "ireland", name: "Ireland", col: "#00843D", lat: 53.20, lng: -8.10, loaded: true },
  { k: "nireland", name: "N. Ireland", col: "#6C2BD9", lat: 54.70, lng: -6.60, loaded: true },
  { k: "scotland", name: "Scotland", col: "#007FFF", lat: 56.70, lng: -4.40, loaded: true },
];

const FAMILIES: [string, string[]][] = [
  ["Heritage & Ruins", ["historic-house", "castle", "stately-home", "palace", "ruins", "archaeology", "military-site", "industrial-heritage", "unesco-site", "local-landmark"]],
  ["Sacred Places", ["cathedral", "church", "abbey", "monastery", "temple", "mosque", "synagogue"]],
  ["Museums & Galleries", ["museum", "art-gallery", "heritage-centre", "visitor-centre"]],
  ["Gardens & Grounds", ["garden", "arboretum", "park", "nature-reserve"]],
  ["Coast & Water", ["beach", "lake", "river-walk", "waterfall", "harbour-marina", "lighthouse"]],
  ["Wild Landscape", ["cave", "mountain", "forest", "scenic-viewpoint"]],
  ["Animals & Wildlife", ["zoo", "aquarium", "safari-park", "farm-park", "wildlife-centre"]],
  ["Thrills & Sport", ["theme-park", "adventure-park", "water-park", "activity-centre", "family-entertainment", "sports-venue", "golf-attraction"]],
  ["Science & Steam", ["steam-railway", "science-centre", "planetarium", "observatory"]],
  ["Food, Drink & Market", ["distillery-brewery", "vineyard", "shopping-village", "market"]],
  ["Stage & Screen", ["cultural-centre", "theatre-performance", "live-music-venue", "film-tv-location", "festival-event-site"]],
];

const TOWNS: [string, number, number][] = [
  ["Llandudno", 53.324, -3.827],
  ["Conwy", 53.280, -3.831],
  ["Bangor", 53.228, -4.129],
  ["Caernarfon", 53.140, -4.277],
  ["Betws-y-Coed", 53.093, -3.800],
  ["Rhyl", 53.319, -3.491],
  ["Colwyn Bay", 53.294, -3.726],
  ["Denbigh", 53.184, -3.417],
  ["Ruthin", 53.114, -3.310],
  ["Blaenau Ffestiniog", 52.995, -3.938],
  ["Porthmadog", 52.925, -4.132],
  ["Wrexham", 53.046, -2.993],
  ["Mold", 53.166, -3.141],
  ["Holyhead", 53.309, -4.633],
  ["Beaumaris", 53.263, -4.090],
  ["Llangollen", 52.971, -3.168],
  ["Dolgellau", 52.743, -3.883],
  ["Barmouth", 52.722, -4.056],
  ["Cardiff", 51.481, -3.179],
  ["Swansea", 51.621, -3.943],
  ["Newport", 51.584, -2.997],
  ["Aberystwyth", 52.415, -4.082],
  ["Carmarthen", 51.857, -4.312],
  ["Tenby", 51.672, -4.704],
  ["Brecon", 51.946, -3.391],
  ["Belfast", 54.597, -5.930],
  ["Derry", 54.996, -7.309],
  ["Coleraine", 55.132, -6.666],
  ["Bushmills", 55.206, -6.523],
  ["Portrush", 55.205, -6.655],
  ["Enniskillen", 54.345, -7.641],
  ["Newry", 54.175, -6.337],
  ["Omagh", 54.600, -7.300],
  ["Armagh", 54.350, -6.654],
  ["Ballymena", 54.864, -6.276],
  ["Lisburn", 54.512, -6.044],
  ["Edinburgh", 55.953, -3.188],
  ["Glasgow", 55.864, -4.251],
  ["Inverness", 57.477, -4.224],
  ["Aberdeen", 57.149, -2.094],
  ["Dundee", 56.462, -2.970],
  ["Stirling", 56.116, -3.936],
  ["Dumfries", 55.070, -3.606],
  ["Fort William", 56.819, -5.105],
  ["Perth", 56.395, -3.430],
  ["St Andrews", 56.339, -2.796],
  ["Dublin", 53.349, -6.260],
  ["Cork", 51.898, -8.475],
  ["Galway", 53.270, -9.056],
  ["Killarney", 52.059, -9.504],
  ["Limerick", 52.663, -8.626],
  ["Kilkenny", 52.654, -7.252],
  ["Waterford", 52.259, -7.110],
  ["Sligo", 54.276, -8.476],
  ["Athlone", 53.423, -7.940],
  ["Donegal", 54.653, -8.110],
  ["London", 51.507, -0.127],
  ["Manchester", 53.480, -2.242],
  ["Liverpool", 53.408, -2.991],
  ["Birmingham", 52.486, -1.890],
  ["Chester", 53.190, -2.893],
  ["York", 53.960, -1.087],
  ["Newcastle", 54.978, -1.617],
  ["Bristol", 51.454, -2.587],
  ["Bath", 51.375, -2.359],
  ["Oxford", 51.752, -1.257],
  ["Cambridge", 52.205, 0.121],
  ["Leeds", 53.800, -1.549],
  ["Keswick", 54.601, -3.136],
  ["Windermere", 54.380, -2.906],
  ["Exeter", 50.718, -3.533],
  ["Brighton", 50.822, -0.137],
];

function spell(n: number) {
  return n <= 34 ? WORDS[n].charAt(0).toUpperCase() + WORDS[n].slice(1) : n.toLocaleString();
}

function nearestTown(la: number, ln: number) {
  let best = TOWNS[0];
  let bd = 1e9;
  for (const t of TOWNS) {
    const d = (t[1] - la) * (t[1] - la) + (t[2] - ln) * (t[2] - ln);
    if (d < bd) {
      bd = d;
      best = t;
    }
  }
  return best[0];
}

function nearestRegion(la: number, ln: number) {
  let best = REGIONS[0];
  let bd = 1e9;
  for (const r of REGIONS) {
    const d = (r.lat - la) * (r.lat - la) + (r.lng - ln) * (r.lng - ln);
    if (d < bd) {
      bd = d;
      best = r;
    }
  }
  return best;
}

function esc(s: string) {
  return String(s).replace(/[&<>"]/g, (c) => {
    return (
      {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
      }[c] || c
    );
  });
}

function typeWords(t: string) {
  const m: Record<string, string> = {
    a: "attraction",
    e: "place to eat",
    s: "place to stay",
  };
  return t
    .split("")
    .map((c) => m[c])
    .filter(Boolean)
    .join(" and ");
}

export function MapPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.setAttribute("data-base", "daylight");
    document.body.classList.add("map-route");

    let isMounted = true;
    let leafletMap: import("leaflet").Map | null = null;
    let layerGroup: import("leaflet").LayerGroup | null = null;

    const S = {
      places: [] as Place[],
      icons: {} as Record<string, IconDef>,
      band: BANDS[2],
      cats: { a: true, e: true, s: true } as Record<string, boolean>,
      subs: null as Record<string, number> | null,
      follow: true,
      sel: null as string | null,
      markers: [] as { p: Place; el: HTMLElement }[],
      pinmode: false,
      pinIdx: -1,
      visible: [] as Place[],
      moved: false,
      query: "",
    };

    const RM = window.matchMedia("(prefers-reduced-motion: reduce)");

    const glyphMask = (slug: string) => {
      const file = S.icons[slug] ? S.icons[slug].file : "60-local-landmark.png";
      return `/icons/${file}`;
    };

    const bandFor = (z: number) => {
      for (let i = 0; i < BANDS.length; i++) {
        if (z >= BANDS[i].min && z <= BANDS[i].max) return BANDS[i];
      }
      return BANDS[3];
    };

    const passes = (p: Place) => {
      let okCat = false;
      for (let i = 0; i < p.t.length; i++) {
        if (S.cats[p.t[i]]) okCat = true;
      }
      if (!okCat) return false;
      if (S.subs && p.t.indexOf("a") > -1 && !S.subs[p.st]) return false;
      if (S.query) {
        const q = S.query.toLowerCase();
        const nm = p.n && p.n.toLowerCase().includes(q);
        const tm = p.town && p.town.toLowerCase().includes(q);
        if (!nm && !tm) return false;
      }
      return true;
    };

    const inView = () => {
      if (!leafletMap) return [];
      const b = leafletMap.getBounds();
      return S.places.filter((p) => passes(p) && b.contains([p.lat, p.lng]));
    };

    const cluster = (list: Place[], px: number) => {
      if (!leafletMap) return [];
      const cells: Record<string, Place[]> = {};
      const out: { single?: Place; count?: number; lat?: number; lng?: number; kids?: Place[] }[] = [];
      list.forEach((p) => {
        const pt = leafletMap!.latLngToContainerPoint([p.lat, p.lng]);
        const k = Math.floor(pt.x / px) + ":" + Math.floor(pt.y / px);
        (cells[k] = cells[k] || []).push(p);
      });
      Object.keys(cells).forEach((k) => {
        const g = cells[k];
        if (g.length === 1) {
          out.push({ single: g[0] });
        } else {
          let la = 0;
          let ln = 0;
          g.forEach((p) => {
            la += p.lat;
            ln += p.lng;
          });
          out.push({
            count: g.length,
            lat: la / g.length,
            lng: ln / g.length,
            kids: g,
          });
        }
      });
      return out;
    };

    const hl = (slug: string, on: boolean) => {
      S.markers.forEach((m) => {
        if (m.p.s === slug) m.el.classList.toggle("hl", on);
      });
      const c = document.querySelector(`.card[data-slug="${CSS.escape(slug)}"]`) as HTMLElement | null;
      if (c) c.classList.toggle("hl", on);
      const g = document.querySelector("#gutter i") as HTMLElement | null;
      if (on && c && g) {
        const l = document.getElementById("list");
        if (l) {
          g.style.top = (c.offsetTop / Math.max(1, l.scrollHeight)) * l.clientHeight + "px";
          g.classList.add("on");
        }
      } else if (g) {
        g.classList.remove("on");
      }
    };

    const hidePop = () => {
      const el = document.getElementById("pop");
      if (el) el.classList.remove("on");
    };

    const showPop = (p: Place) => {
      if (!leafletMap) return;
      const el = document.getElementById("pop");
      if (!el) return;
      const pt = leafletMap.latLngToContainerPoint([p.lat, p.lng]);
      const kick = el.querySelector(".kick");
      const h3 = el.querySelector("h3");
      const desc = el.querySelector("p");
      const goBtn = el.querySelector(".go") as HTMLAnchorElement | null;
      const dirBtn = el.querySelector(".dir") as HTMLButtonElement | null;

      if (kick) kick.textContent = p.t === "a" ? (S.icons[p.st] ? S.icons[p.st].label : "Attraction") : typeWords(p.t).toUpperCase();
      if (h3) h3.textContent = p.n;
      if (desc) desc.textContent = p.ic ? "One of the iconic entries in the guide." : `In the guide for ${nearestTown(p.lat, p.lng)}.`;
      if (goBtn) goBtn.href = `/detail/${p.s}`;
      if (dirBtn) {
        dirBtn.onclick = () => {
          window.open(`https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`, "_blank", "noopener,noreferrer");
        };
      }

      const mw = document.getElementById("map")?.clientWidth || window.innerWidth;
      const mh = document.getElementById("map")?.clientHeight || window.innerHeight;
      const isMobile = window.innerWidth <= 760;
      const w = isMobile ? Math.min(280, mw - 24) : 272;
      const x = Math.min(Math.max(pt.x - w / 2, 12), mw - w - 12);
      let y = pt.y + 14;
      const bottomLimit = isMobile ? mh - 110 : mh;
      if (y + 190 > bottomLimit) y = pt.y - 200;
      el.style.left = x + "px";
      el.style.top = Math.max(isMobile ? 64 : 16, y) + "px";
      el.classList.add("on");
    };

    const select = (slug: string, fromMap?: boolean) => {
      S.sel = slug;
      const p = S.places.find((x) => x.s === slug);
      S.markers.forEach((m) => {
        m.el.classList.toggle("sel", m.p.s === slug);
      });
      document.querySelectorAll(".card").forEach((c) => {
        const el = c as HTMLElement;
        el.classList.toggle("sel", el.dataset.slug === slug);
      });
      const c = document.querySelector(`.card[data-slug="${CSS.escape(slug)}"]`) as HTMLElement | null;
      if (c) {
        c.scrollIntoView({
          block: "center",
          behavior: RM.matches ? "auto" : "smooth",
        });
      }
      if (p) {
        if (!fromMap && leafletMap) {
          leafletMap.panTo([p.lat, p.lng], {
            animate: !RM.matches,
            duration: 0.42,
          });
        }
        showPop(p);
      }
    };

    const pinEl = (p: Place) => {
      const types = p.t;
      const n = types.length;
      const packCol = (S.icons[p.st] && S.icons[p.st].colour) || "#5E22BA";
      let body: string;
      let ink: string;
      let line: string;

      if (types === "a") {
        body = packCol;
        ink = "#FFFFFF";
        line = "var(--keyline-col)";
      } else {
        body = "var(--neutral-body)";
        ink = "var(--neutral-ink)";
        line = types.indexOf("a") > -1 ? packCol : types.indexOf("e") > -1 ? "#F0607A" : "#6E8BFF";
      }

      const b = document.createElement("button");
      b.className = "pin " + (n === 1 ? "t-" + types : "multi") + (n > 1 ? " n" + n : "") + (p.ic ? " iconic" : "");
      b.style.setProperty("--pin-body-own", body);
      b.style.setProperty("--pin-ink-own", ink);
      b.style.setProperty("--pin-line-own", line);
      b.setAttribute("data-slug", p.s);
      b.setAttribute("data-subtype", p.st);
      b.setAttribute("tabindex", "-1");
      b.setAttribute("aria-label", `${p.n}, ${typeWords(p.t)}`);

      let cells = "";
      for (let i = 0; i < types.length; i++) {
        if (i) cells += '<span class="divider"></span>';
        if (types[i] === "a") {
          const m = glyphMask(p.st);
          cells += `<span class="g" style="-webkit-mask-image:url(${m});mask-image:url(${m})"></span>`;
        } else {
          cells += `<span class="g g-${types[i] === "e" ? "eat" : "stay"}"></span>`;
        }
      }
      b.innerHTML = '<span class="body">' + cells + "</span>";
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        select(p.s, true);
      });
      b.addEventListener("mouseenter", () => hl(p.s, true));
      b.addEventListener("mouseleave", () => hl(p.s, false));
      return b;
    };

    const clusterEl = (c: { count?: number; kids?: Place[] }) => {
      const n = c.count || 1;
      const b = document.createElement("button");
      b.className = "cluster " + (n < 10 ? "s1" : n < 50 ? "s2" : n < 100 ? "s3" : "s4");
      b.textContent = n > 99 ? "99+" : String(n);
      b.setAttribute("aria-label", `${n} places in this area, activate to zoom in`);
      b.addEventListener("click", async () => {
        if (!leafletMap || !c.kids) return;
        const L = await import("leaflet");
        const g = L.latLngBounds(c.kids.map((p) => [p.lat, p.lng]));
        leafletMap.flyToBounds(g, {
          padding: [70, 70],
          duration: RM.matches ? 0 : 0.62,
        });
      });
      return b;
    };

    const medalEl = (r: (typeof REGIONS)[0]) => {
      const b = document.createElement("button");
      b.className = "medal";
      b.style.setProperty("--mcol", r.col + "38");
      b.style.setProperty("--mring", r.col);
      const count = S.places.filter((p) => nearestRegion(p.lat, p.lng).k === r.k).length;
      const n = count.toLocaleString();
      b.innerHTML = `<b>${r.name}</b><i>${n}</i>`;
      b.setAttribute("aria-label", `${r.name}, ${n} places loaded`);
      b.addEventListener("click", () => {
        if (leafletMap) {
          leafletMap.flyTo([r.lat, r.lng], 8.2, {
            duration: RM.matches ? 0 : 0.62,
          });
        }
      });
      return b;
    };

    const puckEl = (name: string, list: Place[]) => {
      const w = document.createElement("div");
      w.style.position = "relative";
      const b = document.createElement("button");
      b.className = "puck";
      b.textContent = String(list.length);
      b.setAttribute("aria-label", `${name}, ${list.length} places`);
      b.addEventListener("click", async () => {
        if (!leafletMap) return;
        const L = await import("leaflet");
        if (list.length === 1) {
          leafletMap.flyTo([list[0].lat, list[0].lng], 12, {
            duration: RM.matches ? 0 : 0.62,
          });
        } else {
          const g = L.latLngBounds(list.map((p) => [p.lat, p.lng]));
          leafletMap.flyToBounds(g, {
            padding: [70, 70],
            duration: RM.matches ? 0 : 0.62,
          });
        }
      });
      const lab = document.createElement("span");
      lab.className = "pucklab";
      lab.textContent = name;
      w.appendChild(lab);
      w.appendChild(b);
      return w;
    };

    const regionCard = (r: (typeof REGIONS)[0]) => {
      const b = document.createElement("button");
      b.className = "card";
      const count = S.places.filter((p) => nearestRegion(p.lat, p.lng).k === r.k).length;
      b.innerHTML = `
        <span class="tile" style="background:${r.col}28;border-color:${r.col}"></span>
        <span class="tx">
          <span class="kick">REGION</span>
          <h3>${r.name}</h3>
          <span class="vq">${count.toLocaleString()} places loaded in this region.</span>
        </span>
      `;
      b.addEventListener("click", () => {
        if (leafletMap) {
          leafletMap.flyTo([r.lat, r.lng], 8.2, {
            duration: RM.matches ? 0 : 0.62,
          });
        }
      });
      return b;
    };

    const card = (p: Place) => {
      const b = document.createElement("button");
      b.className = "card" + (S.sel === p.s ? " sel" : "");
      b.setAttribute("data-slug", p.s);
      const lab = p.t === "a" ? (S.icons[p.st] ? S.icons[p.st].label : "Attraction") : typeWords(p.t).toUpperCase();
      const mask = p.t.indexOf("a") > -1 ? glyphMask(p.st) : null;
      const cc = leafletMap ? leafletMap.getCenter() : { lat: p.lat, lng: p.lng };
      const d = Math.sqrt((p.lat - cc.lat) * (p.lat - cc.lat) + (p.lng - cc.lng) * (p.lng - cc.lng)) * 111;

      b.innerHTML = `
        <span class="tile">
          ${
            mask
              ? `<span class="gl" style="-webkit-mask-image:url(${mask});mask-image:url(${mask})"></span>`
              : `<span class="gl" style="-webkit-mask-image:var(--m-${p.t.indexOf("e") > -1 ? "eat" : "stay"});mask-image:var(--m-${p.t.indexOf("e") > -1 ? "eat" : "stay"})"></span>`
          }
        </span>
        <span class="tx">
          <span class="kick">${lab}${p.ic ? " &middot; ICONIC" : ""}</span>
          <h3>${esc(p.n)}</h3>
          <span class="meta">${d.toFixed(1)} km from centre</span>
        </span>
      `;
      b.addEventListener("click", () => select(p.s, false));
      b.addEventListener("mouseenter", () => hl(p.s, true));
      b.addEventListener("mouseleave", () => hl(p.s, false));
      return b;
    };

    const paintRail = () => {
      document.querySelectorAll(".rail button").forEach((b) => {
        const btn = b as HTMLElement;
        btn.setAttribute("aria-current", btn.dataset.band === S.band.k ? "true" : "false");
      });
    };

    const paintPanel = (vis: Place[], bandChanged?: boolean) => {
      if (!leafletMap) return;
      const c = leafletMap.getCenter();
      const curReg = nearestRegion(c.lat, c.lng);
      const v1 = S.band.v1
        .replace("{place}", nearestTown(c.lat, c.lng))
        .replace("{region}", curReg.name);
      const v2 = S.band.v2.replace("{n}", S.band.k === "town" ? spell(vis.length) : vis.length.toLocaleString());

      const v1El = document.getElementById("v1");
      const v2El = document.getElementById("v2");
      if (v1El) v1El.textContent = v1;
      if (v2El) v2El.textContent = v2;

      const countEl = document.getElementById("count");
      if (countEl) {
        countEl.innerHTML = `<b>${vis.length.toLocaleString()}</b> in view of ${S.places.length.toLocaleString()}`;
      }

      ["a", "e", "s"].forEach((k) => {
        const count = S.places.filter((p) => p.t.indexOf(k) > -1).length;
        const tabCount = document.querySelector(`#tab-${k} .n`);
        if (tabCount) tabCount.textContent = count.toLocaleString();
      });

      const list = document.getElementById("list");
      const empty = document.getElementById("empty");
      if (!list) return;

      if (S.band.k === "country") {
        list.innerHTML = "";
        list.style.display = "";
        if (empty) empty.classList.remove("on");
        REGIONS.forEach((r) => list.appendChild(regionCard(r)));
        return;
      }

      if (!vis.length) {
        list.innerHTML = "";
        list.style.display = "none";
        if (empty) empty.classList.add("on");
        return;
      }

      if (empty) empty.classList.remove("on");
      list.style.display = "";
      list.innerHTML = "";
      const cc = leafletMap.getCenter();
      vis
        .slice()
        .sort((a, b) => {
          const da = (a.lat - cc.lat) * (a.lat - cc.lat) + (a.lng - cc.lng) * (a.lng - cc.lng);
          const db = (b.lat - cc.lat) * (b.lat - cc.lat) + (b.lng - cc.lng) * (b.lng - cc.lng);
          return da - db;
        })
        .slice(0, S.band.k === "region" ? 40 : 120)
        .forEach((p) => list.appendChild(card(p)));
    };

    const render = async (bandChanged?: boolean) => {
      if (!leafletMap || !layerGroup) return;
      const L = await import("leaflet");
      const vis = inView();
      S.visible = vis;
      layerGroup.clearLayers();
      S.markers = [];

      if (S.band.k === "country") {
        REGIONS.forEach((r) => {
          const m = L.marker([r.lat, r.lng], {
            icon: L.divIcon({ className: "", html: "", iconSize: [92, 92] }),
            keyboard: false,
          });
          m.on("add", (e) => {
            const el = e.target.getElement();
            if (el) el.appendChild(medalEl(r));
          });
          layerGroup!.addLayer(m);
        });
      } else if (S.band.k === "region") {
        const groups: Record<string, Place[]> = {};
        S.places.filter(passes).forEach((p) => {
          const k = Math.round(p.lat * 8) / 8 + "," + Math.round(p.lng * 8) / 8;
          (groups[k] = groups[k] || []).push(p);
        });
        Object.keys(groups).forEach((k) => {
          const g = groups[k];
          if (g.length < 1) return;
          let la = 0;
          let ln = 0;
          g.forEach((p) => {
            la += p.lat;
            ln += p.lng;
          });
          const m = L.marker([la / g.length, ln / g.length], {
            icon: L.divIcon({ className: "", html: "", iconSize: [46, 46] }),
            keyboard: false,
          });
          m.on("add", (e) => {
            const el = e.target.getElement();
            if (el) el.appendChild(puckEl(nearestTown(la / g.length, ln / g.length), g));
          });
          layerGroup!.addLayer(m);
        });
      } else {
        const marks = cluster(vis, S.band.k === "street" ? 48 : 64);
        marks.forEach((m) => {
          if (m.single) {
            const p = m.single;
            const marker = L.marker([p.lat, p.lng], {
              icon: L.divIcon({ className: "", html: "", iconSize: [0, 0] }),
              keyboard: false,
            });
            marker.on("add", (e) => {
              const el = e.target.getElement();
              if (!el) return;
              el.style.width = "0";
              el.style.height = "0";
              const pe = pinEl(p);
              el.appendChild(pe);
              S.markers.push({ p, el: pe });
              if (S.sel === p.s) pe.classList.add("sel");
            });
            layerGroup!.addLayer(marker);
          } else if (m.count) {
            const marker = L.marker([m.lat!, m.lng!], {
              icon: L.divIcon({ className: "", html: "", iconSize: [0, 0] }),
              keyboard: false,
            });
            marker.on("add", (e) => {
              const el = e.target.getElement();
              if (!el) return;
              el.style.width = "0";
              el.style.height = "0";
              el.appendChild(clusterEl(m));
            });
            layerGroup!.addLayer(marker);
          }
        });
      }

      paintPanel(vis, bandChanged);
      paintRail();
      const moved = document.getElementById("moved");
      if (moved) moved.classList.remove("on");
      S.moved = false;
    };

    const buildDrawer = () => {
      const body = document.getElementById("drawerBody");
      if (!body) return;
      body.innerHTML = '<div class="coll"><div class="ct">All sixty types, in eleven families</div></div>';
      FAMILIES.forEach(([name, subsList]) => {
        const subs = subsList.filter((s) => S.icons[s]);
        const n = S.places.filter((p) => p.t.indexOf("a") > -1 && subs.indexOf(p.st) > -1).length;
        const d = document.createElement("div");
        d.className = "fam";
        d.setAttribute("aria-expanded", "false");
        d.innerHTML = `
          <button type="button" aria-expanded="false">
            <span class="fg">${subs
              .slice(0, 3)
              .map((s) => `<i style="-webkit-mask-image:url(${glyphMask(s)});mask-image:url(${glyphMask(s)})"></i>`)
              .join("")}</span>
            <span class="fn">${name}</span><span class="fc">${n}</span>
            <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg>
          </button>
          <div class="sub">${subs
            .map(
              (s) => `
            <label>
              <input type="checkbox" data-sub="${s}" checked>
              <i style="-webkit-mask-image:url(${glyphMask(s)});mask-image:url(${glyphMask(s)})"></i>
              ${S.icons[s].label}
            </label>
          `
            )
            .join("")}</div>
        `;

        const btn = d.querySelector("button");
        if (btn) {
          btn.addEventListener("click", () => {
            const open = d.getAttribute("aria-expanded") === "true";
            document.querySelectorAll("#drawerBody .fam").forEach((o) => {
              o.setAttribute("aria-expanded", "false");
              o.querySelector("button")?.setAttribute("aria-expanded", "false");
            });
            if (!open) {
              d.setAttribute("aria-expanded", "true");
              btn.setAttribute("aria-expanded", "true");
            }
          });
        }

        d.addEventListener("mouseenter", () => {
          S.markers.forEach((m) => {
            m.el.classList.toggle("dim", subs.indexOf(m.p.st) === -1 || m.p.t.indexOf("a") === -1);
          });
        });
        d.addEventListener("mouseleave", () => {
          S.markers.forEach((m) => m.el.classList.remove("dim"));
        });
        body.appendChild(d);
      });
    };

    const readSubs = () => {
      const boxes = Array.from(document.querySelectorAll<HTMLInputElement>("#drawerBody input[data-sub]"));
      const all = boxes.every((b) => b.checked);
      const typeBadge = document.getElementById("typeBadge");
      if (all) {
        S.subs = null;
        if (typeBadge) typeBadge.classList.remove("on");
        return;
      }
      S.subs = {};
      let n = 0;
      boxes.forEach((b) => {
        if (b.checked && b.dataset.sub) {
          S.subs![b.dataset.sub] = 1;
          n++;
        }
      });
      if (typeBadge) {
        typeBadge.textContent = String(n);
        typeBadge.classList.add("on");
      }
    };

    const wireControls = () => {
      document.querySelectorAll(".rail button").forEach((b) => {
        b.addEventListener("click", () => {
          const btn = b as HTMLElement;
          const band = BANDS.find((x) => x.k === btn.dataset.band);
          if (band && leafletMap) {
            leafletMap.flyTo(leafletMap.getCenter(), band.zoom, {
              duration: RM.matches ? 0 : 0.62,
            });
          }
        });
      });

      document.getElementById("zin")?.addEventListener("click", () => leafletMap?.zoomIn(1));
      document.getElementById("zout")?.addEventListener("click", () => leafletMap?.zoomOut(1));
      document.getElementById("reset")?.addEventListener("click", () => {
        leafletMap?.flyTo([53.21, -3.8], 11.6, { duration: RM.matches ? 0 : 0.62 });
      });

      const followBtn = document.getElementById("follow");
      followBtn?.addEventListener("click", () => {
        S.follow = !S.follow;
        followBtn.setAttribute("aria-pressed", String(S.follow));
        if (S.follow) render();
      });

      document.getElementById("movedBtn")?.addEventListener("click", () => render());

      ["a", "e", "s"].forEach((k) => {
        const btn = document.getElementById("tab-" + k);
        btn?.addEventListener("click", () => {
          const on = Object.keys(S.cats).filter((x) => S.cats[x]);
          if (S.cats[k] && on.length === 1) return;
          S.cats[k] = !S.cats[k];
          btn.setAttribute("aria-pressed", String(S.cats[k]));
          render();
        });
      });

      const qInput = document.getElementById("q") as HTMLInputElement | null;
      qInput?.addEventListener("input", (e) => {
        S.query = (e.target as HTMLInputElement).value.trim();
        render();
      });

      const drawer = document.getElementById("drawer");
      const typesBtn = document.getElementById("typesBtn");
      const drawerClose = document.getElementById("drawerClose");
      const drawerScrim = drawer?.querySelector(".scrim");

      typesBtn?.addEventListener("click", () => drawer?.classList.add("on"));
      const closeDrawer = () => drawer?.classList.remove("on");
      drawerClose?.addEventListener("click", closeDrawer);
      drawerScrim?.addEventListener("click", closeDrawer);

      document.getElementById("applyBtn")?.addEventListener("click", () => {
        readSubs();
        closeDrawer();
        render();
      });
      document.getElementById("clearBtn")?.addEventListener("click", () => {
        document.querySelectorAll<HTMLInputElement>("#drawerBody input[data-sub]").forEach((b) => (b.checked = true));
        readSubs();
        render();
      });

      document.getElementById("clearFilters")?.addEventListener("click", () => {
        S.cats = { a: true, e: true, s: true };
        ["a", "e", "s"].forEach((k) => document.getElementById("tab-" + k)?.setAttribute("aria-pressed", "true"));
        document.querySelectorAll<HTMLInputElement>("#drawerBody input[data-sub]").forEach((b) => (b.checked = true));
        readSubs();
        render();
      });

      document.getElementById("zoomOutBtn")?.addEventListener("click", () => leafletMap?.zoomOut(2));

      document.querySelectorAll(".pinsw button").forEach((b) => {
        b.addEventListener("click", () => {
          const btn = b as HTMLElement;
          document.querySelectorAll(".pinsw button").forEach((o) => o.classList.toggle("on", o === btn));
          document.getElementById("map")?.setAttribute("data-pins", btn.dataset.pins || "client");
          document.querySelector(".legend")?.setAttribute("data-pins", btn.dataset.pins || "client");
        });
      });

      leafletMap?.getContainer().addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target === leafletMap?.getContainer() || target.classList.contains("leaflet-tile")) {
          S.sel = null;
          hidePop();
          document.querySelectorAll(".card.sel").forEach((c) => c.classList.remove("sel"));
          S.markers.forEach((m) => m.el.classList.remove("sel"));
        }
      });
    };

    const setupSheet = () => {
      const grab = document.getElementById("grab");
      const panel = document.querySelector(".panel") as HTMLElement | null;
      if (!panel) return;
      const list = document.getElementById("list");

      const detents = () => {
        const h = window.innerHeight - 56;
        return [96, Math.round(h * 0.55), h - 8];
      };
      let startY: number | null = null;
      let startX: number | null = null;
      let startH = 0;
      let activePointerId: number | null = null;
      let isDraggingSheet = false;
      let isListDrag = false;

      const setH = (px: number) => panel.style.setProperty("--sheet-h", px + "px");
      setH(detents()[1]);

      const onPointerDown = (e: PointerEvent) => {
        if (window.innerWidth > 900) return;
        const target = e.target as HTMLElement | null;
        if (!target) return;

        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.closest("input, textarea")) {
          return;
        }

        isListDrag = !!target.closest("#list");
        startY = e.clientY;
        startX = e.clientX;
        startH = panel.getBoundingClientRect().height;
        activePointerId = e.pointerId;
        isDraggingSheet = false;
      };

      const onPointerMove = (e: PointerEvent) => {
        if (startY === null || activePointerId !== e.pointerId) return;
        const dy = startY - e.clientY;
        const dx = Math.abs((startX ?? e.clientX) - e.clientX);

        if (!isDraggingSheet) {
          if (Math.abs(dy) > 8 && Math.abs(dy) > dx) {
            const d = detents();
            const isFullHeight = startH >= d[2] - 25;

            if (isListDrag) {
              if (isFullHeight) {
                if (dy < 0 && (list?.scrollTop || 0) <= 0) {
                  isDraggingSheet = true;
                } else {
                  return;
                }
              } else {
                isDraggingSheet = true;
              }
            } else {
              isDraggingSheet = true;
            }

            if (isDraggingSheet) {
              panel.classList.add("dragging");
              try {
                panel.setPointerCapture(e.pointerId);
              } catch (_) {}
            }
          }
        }

        if (isDraggingSheet) {
          setH(Math.max(60, startH + dy));
        }
      };

      const onPointerUp = (e: PointerEvent) => {
        if (startY === null || (activePointerId !== null && activePointerId !== e.pointerId)) return;
        const currentH = panel.getBoundingClientRect().height;
        const wasDragging = isDraggingSheet;
        startY = null;
        startX = null;
        activePointerId = null;
        isDraggingSheet = false;
        panel.classList.remove("dragging");

        if (wasDragging) {
          const d = detents();
          const target = d.reduce((a, b) => (Math.abs(b - currentH) < Math.abs(a - currentH) ? b : a));
          setH(target);
        }
      };

      panel.addEventListener("pointerdown", onPointerDown);
      panel.addEventListener("pointermove", onPointerMove);
      panel.addEventListener("pointerup", onPointerUp);
      panel.addEventListener("pointercancel", onPointerUp);

      if (grab) {
        grab.addEventListener("click", () => {
          const d = detents();
          const h = panel.getBoundingClientRect().height;
          const i = d.reduce((a, b, j) => (Math.abs(d[j] - h) < Math.abs(d[a] - h) ? j : a), 0);
          setH(d[(i + 1) % d.length]);
        });
      }

      window.addEventListener("resize", () => setH(detents()[1]));
    };

    async function init() {
      try {
        const L = await import("leaflet");
        if (!isMounted || !mapContainerRef.current) return;

        leafletMap = L.map(mapContainerRef.current, {
          zoomControl: false,
          attributionControl: false,
          zoomSnap: 0.25,
          minZoom: 5,
          maxZoom: 18,
          fadeAnimation: !RM.matches,
        }).setView([53.21, -3.8], 11.6);

        L.tileLayer("https://{s}.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}", {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
          attribution: "&copy; Google Maps",
        }).addTo(leafletMap);

        layerGroup = L.layerGroup().addTo(leafletMap);
        S.band = bandFor(leafletMap.getZoom());

        leafletMap.on("zoomend", () => {
          if (!leafletMap) return;
          const b = bandFor(leafletMap.getZoom());
          if (b.k !== S.band.k) {
            S.band = b;
            render(true);
          } else {
            render();
          }
        });

        leafletMap.on("movestart", () => {
          hidePop();
        });

        leafletMap.on("moveend", () => {
          if (S.follow) {
            render();
          } else {
            S.moved = true;
            document.getElementById("moved")?.classList.add("on");
            const movedN = document.getElementById("movedN");
            if (movedN) movedN.textContent = String(inView().length);
          }
        });

        const [placesRes, iconsRes] = await Promise.all([
          fetch("/api/map/places").then((r) => r.json()),
          fetch("/icons/icons.json").then((r) => r.json()),
        ]);

        if (!isMounted) return;
        S.places = placesRes;
        iconsRes.forEach((i: IconDef) => {
          S.icons[i.slug] = i;
        });

        buildDrawer();
        wireControls();
        setupSheet();
        document.getElementById("skel")?.remove();
        render();
      } catch (err) {
        document.getElementById("skel")?.remove();
        document.getElementById("error")?.classList.add("on");
      }
    }

    init();

    return () => {
      isMounted = false;
      document.body.removeAttribute("data-base");
      document.body.classList.remove("map-route");
      if (leafletMap) {
        leafletMap.remove();
        leafletMap = null;
      }
    };
  }, []);

  return (
    <>
      <header className="map-nav">
        <Link className="brand" href="/">
          <Image src="/images/logo.png" alt="Logo" width={120} height={34} style={{ height: "34px", width: "auto" }} />
          <b>Stevenson&apos;s Top 100</b>
        </Link>
        <nav aria-label="Sections">
          <Link href="/search?category=Attractions">Attractions</Link>
          <Link href="/search?category=Accommodation">Places to stay</Link>
          <Link href="/search?category=Eating+Out">Places to eat</Link>
          <Link aria-current="page" href="/map">
            Map
          </Link>
          <Link href="/book">The book</Link>
        </nav>
        <Link className="cta" href="/app">
          GET THE APP
        </Link>
        <button
          className="burger"
          id="burger"
          aria-label="Open menu"
          type="button"
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div id="mnav" className={menuOpen ? "open" : ""}>
        <button
          className="close"
          id="mclose"
          aria-label="Close menu"
          type="button"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <Link href="/search?category=Attractions" onClick={() => setMenuOpen(false)}>Attractions</Link>
        <Link href="/search?category=Accommodation" onClick={() => setMenuOpen(false)}>Places to Stay</Link>
        <Link href="/search?category=Eating+Out" onClick={() => setMenuOpen(false)}>Places to Eat</Link>
        <Link href="/map" onClick={() => setMenuOpen(false)}>Map</Link>
        <Link href="/book" onClick={() => setMenuOpen(false)}>The Book</Link>
        <Link href="/app" onClick={() => setMenuOpen(false)} style={{ color: "var(--gold)" }}>
          Get the App
        </Link>
        <span className="foot-soc">
          <a
            href="https://www.facebook.com/Top100AttractionsUKIRELAND"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z" />
            </svg>
          </a>
          <a
            href="https://x.com/top100attractio"
            target="_blank"
            rel="noreferrer"
            aria-label="X, formerly Twitter"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/top100attractions"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </span>
      </div>

      <div className="stage">
        <section className="panel" aria-label="Places in view">
          <button className="sheetgrab" id="grab" aria-label="Place list. Drag or tap to resize." />

          <div className="psearch">
            <input id="q" type="search" placeholder="Conwy castle, Snowdonia, a postcode..." aria-label="Search places" />
            <span className="mag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>
            </span>
          </div>

          <div className="verdict map-verdict">
            <span className="vl">
              <span className="v1" id="v1">
                Conwy.
              </span>
            </span>
            <span className="vl">
              <span className="v2" id="v2">
                Thirty-four reasons to stop.
              </span>
            </span>
          </div>

          <div className="ptools">
            <span className="count" id="count">
              <b>0</b> in view
            </span>
            <button className="follow" id="follow" aria-pressed="true">
              <span className="dot" />
              FOLLOW MAP
            </button>
          </div>

          <div className="tabs" role="group" aria-label="Category">
            <button id="tab-a" aria-pressed="true">
              ATTRACTIONS <span className="n">0</span>
            </button>
            <button id="tab-e" aria-pressed="true">
              TO EAT <span className="n">0</span>
            </button>
            <button id="tab-s" aria-pressed="true">
              TO STAY <span className="n">0</span>
            </button>
          </div>

          <div className="frow">
            <button className="ftypes" id="typesBtn" aria-haspopup="dialog">
              ALL TYPES <span className="badge" id="typeBadge">0</span>
            </button>
            <button className="fsort" id="sortBtn">
              NEAREST
            </button>
          </div>

          <div className="prule" />

          <div className="plist" id="list" tabIndex={-1} />
          <div className="gutter" id="gutter" aria-hidden="true">
            <i />
          </div>

          <div className="skel" id="skel" aria-hidden="true">
            <div className="row">
              <div className="sq" />
              <div className="bars">
                <i style={{ width: "60%" }} />
                <i style={{ width: "90%" }} />
                <i style={{ width: "40%" }} />
              </div>
            </div>
            <div className="row">
              <div className="sq" />
              <div className="bars">
                <i style={{ width: "60%" }} />
                <i style={{ width: "90%" }} />
                <i style={{ width: "40%" }} />
              </div>
            </div>
            <div className="row">
              <div className="sq" />
              <div className="bars">
                <i style={{ width: "60%" }} />
                <i style={{ width: "90%" }} />
                <i style={{ width: "40%" }} />
              </div>
            </div>
          </div>

          <div className="pstate" id="empty">
            <h3>Nothing here. Not even close.</h3>
            <p>No place in this view matches those filters.</p>
            <div className="acts">
              <button className="p" id="zoomOutBtn">
                ZOOM OUT
              </button>
              <button className="s" id="clearFilters">
                CLEAR FILTERS
              </button>
            </div>
          </div>

          <div className="pstate" id="error">
            <h3>The map didn&apos;t load.</h3>
            <p>Please check your connection and try again.</p>
            <div className="acts">
              <button className="s" onClick={() => window.location.reload()}>
                RETRY
              </button>
            </div>
          </div>

          <div className="pfoot">
            <Link href="/search">OPEN AS A GRID &rarr;</Link>
            <em>Not a list. A verdict.</em>
          </div>
        </section>

        <div className="mapwrap">
          <div
            id="map"
            ref={mapContainerRef}
            data-pins="client"
            role="application"
            aria-roledescription="interactive map"
            tabIndex={0}
            aria-label="Map of places in the guide. Arrow keys pan, plus and minus zoom, Enter opens pin mode."
          />
          <span className="tint" aria-hidden="true" />

          <div className="pinmode" id="pinmode" aria-hidden="true" />

          <div className="rail" role="group" aria-label="Altitude">
            <button type="button" data-band="country" aria-current="false">
              <span className="tick" />
              COUNTRY
              <span className="has" />
            </button>
            <button type="button" data-band="region" aria-current="false">
              <span className="tick" />
              REGION
              <span className="has" />
            </button>
            <button type="button" data-band="town" aria-current="false">
              <span className="tick" />
              TOWN
              <span className="has" />
            </button>
            <button type="button" data-band="street" aria-current="false">
              <span className="tick" />
              STREET
              <span className="has" />
            </button>
          </div>

          <div className="mctl">
            <button id="zin" aria-label="Zoom in">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <button id="zout" aria-label="Zoom out">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14" />
              </svg>
            </button>
            <button id="reset" aria-label="Reset the view">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="7" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
              </svg>
            </button>
          </div>

          <div className="moved" id="moved">
            <span>
              <b id="movedN">0</b> places in this view
            </span>
            <button id="movedBtn">UPDATE LIST</button>
          </div>

          <div className="legend" data-pins="client">
            <span className="lg-client">
              <b className="swatch" />
              Attraction, colour by type
            </span>
            <span className="lg-cat">
              <b style={{ background: "#F6EFDF", boxShadow: "inset 0 0 0 2px #0A1122" }} />
              Attraction
            </span>
            <span>
              <b style={{ background: "#F6EFDF", boxShadow: "inset 0 0 0 2px #F0607A" }} />
              Places to eat
            </span>
            <span>
              <b style={{ background: "#F6EFDF", boxShadow: "inset 0 0 0 2px #6E8BFF" }} />
              Places to stay
            </span>
            <span>
              <b className="wide" style={{ background: "#F6EFDF", boxShadow: "inset 0 0 0 2px #0A1122" }} />
              More than one
            </span>
          </div>

          <div className="pinsw" role="group" aria-label="Pin colour treatment">
            <button type="button" data-pins="client" className="on">
              JOSHUA&apos;S COLOURS
            </button>
            <button type="button" data-pins="category">
              BY CATEGORY
            </button>
          </div>

          <div className="popcard" id="pop">
            <div className="pb">
              <span className="kick">ATTRACTION</span>
              <h3 />
              <p />
              <div className="btns">
                <a className="go" href="/detail">
                  VIEW PAGE
                </a>
                <button className="dir" type="button">
                  DIRECTIONS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Attraction types">
        <div className="scrim" />
        <div className="sheet">
          <div className="dh">
            <h2>Attraction types</h2>
            <button id="drawerClose" aria-label="Close" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div className="db" id="drawerBody">
            <div className="coll">
              <div className="ct">All sixty types, in eleven families</div>
            </div>
          </div>
          <div className="df">
            <button className="p" id="applyBtn" type="button">
              APPLY
            </button>
            <button className="s" id="clearBtn" type="button">
              SELECT ALL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
