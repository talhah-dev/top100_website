"use client";

import React from "react";
import Link from "next/link";

interface AreaGroup {
  name: string;
  query?: string;
  items: Array<{ name: string; query?: string }>;
}

interface NationSection {
  nation: string;
  countryUrl?: string;
  groups: AreaGroup[];
}

const mainPages = [
  { title: "Homepage", desc: "Top 100 Attractions home & curated discoveries", url: "/" },
  { title: "The Book", desc: "Order the official printed guides & paper editions", url: "/book" },
  { title: "The Free App", desc: "Four nation apps for iPhone & Android", url: "/app" },
  { title: "Interactive Map", desc: "Live pan, zoom, and altitude filter exploration", url: "/map" },
  { title: "Attractions", desc: "Historic castles, gardens, iconic landmarks", url: "/search?category=Attractions" },
  { title: "Places to Stay", desc: "Handpicked hotels, inns, and country retreats", url: "/search?category=Accommodation" },
  { title: "Places to Eat", desc: "Michelin dining, traditional inns, and bistros", url: "/search?category=Eating+Out" },
  { title: "About Us", desc: "Our philosophy: recommendations, not directories", url: "/about" },
  { title: "Contact Us", desc: "Review desk bookings, suggestions, enquiries", url: "/contact" },
  { title: "Privacy Policy", desc: "How we protect data and uphold user rights", url: "/privacy" },
];

const nationsData: NationSection[] = [
  {
    nation: "England",
    countryUrl: "/country/england",
    groups: [
      {
        name: "England NE",
        query: "England NE",
        items: [
          { name: "Durham" },
          { name: "Lincolnshire" },
          { name: "North Yorkshire" },
          { name: "Northumberland" },
          { name: "Nottinghamshire" },
          { name: "South Yorkshire" },
          { name: "East Riding, Hull & The Wolds" },
        ],
      },
      {
        name: "England NW",
        query: "England NW",
        items: [
          { name: "Cheshire" },
          { name: "Cumbria" },
          { name: "Derbyshire" },
          { name: "Greater Manchester" },
          { name: "Isle of Man" },
          { name: "Lancashire" },
          { name: "Liverpool" },
          { name: "Wirral Peninsula" },
          { name: "West Yorkshire" },
          { name: "Yorkshire NW" },
        ],
      },
      {
        name: "England SE",
        query: "England SE",
        items: [
          { name: "Hampshire" },
          { name: "Cambridgeshire" },
          { name: "East Sussex" },
          { name: "Kent" },
          { name: "West Sussex" },
          { name: "Suffolk" },
          { name: "Leicestershire" },
          { name: "Norfolk" },
          { name: "Isle of Wight" },
        ],
      },
      {
        name: "England SW",
        query: "England SW",
        items: [
          { name: "Bath, Bristol City & Region" },
          { name: "Cornwall" },
          { name: "Devon" },
          { name: "Dorset" },
          { name: "Gloucestershire" },
          { name: "Oxfordshire" },
          { name: "Somerset" },
          { name: "Wiltshire" },
          { name: "Berkshire" },
        ],
      },
      {
        name: "The Midlands",
        query: "The Midlands",
        items: [
          { name: "Herefordshire" },
          { name: "Shropshire" },
          { name: "Staffordshire" },
          { name: "Northamptonshire" },
          { name: "Warwickshire" },
          { name: "West Midlands & The Black Country" },
          { name: "Worcestershire" },
          { name: "Yorkshire Borderlands" },
        ],
      },
    ],
  },
  {
    nation: "Scotland",
    countryUrl: "/country/scotland",
    groups: [
      {
        name: "Regions & Highlands",
        items: [
          { name: "Argyll & The Islands" },
          { name: "Aberdeenshire" },
          { name: "Highlands" },
          { name: "Isle of Skye" },
          { name: "Dundee & Angus" },
          { name: "Ayrshire & Arran" },
          { name: "Dumfries & Galloway" },
          { name: "Edinburgh & The Lothians" },
          { name: "Greater Glasgow and The Clyde Valley" },
          { name: "Loch Lomond, The Trossachs, Stirling and The Forth Valley" },
          { name: "Perthshire" },
          { name: "Scottish Borders" },
          { name: "South Lanarkshire" },
          { name: "Orkney Islands" },
        ],
      },
    ],
  },
  {
    nation: "Wales",
    countryUrl: "/country/wales",
    groups: [
      {
        name: "Regions & Coasts",
        items: [
          { name: "Mid Wales & Brecon" },
          { name: "North East Wales" },
          { name: "Pembrokeshire" },
          { name: "Snowdonia Mountain & Coast" },
          { name: "Wye Valley & Vale of Usk" },
          { name: "Flintshire" },
          { name: "Anglesey" },
          { name: "Cardiff" },
          { name: "Carmarthenshire" },
          { name: "Ceredigion / Cardigan Bay" },
          { name: "Conwy Valley & Denbighshire" },
          { name: "Glamorgan's Coast & Countryside" },
          { name: "South Wales Valleys" },
          { name: "Swansea & Gower Coast" },
        ],
      },
    ],
  },
  {
    nation: "Northern Ireland",
    countryUrl: "/country/northern-ireland",
    groups: [
      {
        name: "Counties & Cities",
        items: [
          { name: "Belfast" },
          { name: "Causeway Coast & Countryside" },
          { name: "Co. Armagh" },
          { name: "Co. Derry/Londonderry" },
          { name: "Co. Down" },
          { name: "Co. Fermanagh" },
          { name: "Co. Tyrone" },
        ],
      },
    ],
  },
  {
    nation: "Republic of Ireland",
    countryUrl: "/country/ireland",
    groups: [
      {
        name: "Dublin & Eastern Ireland",
        items: [
          { name: "Dublin City & Region" },
          { name: "Co. Kildare" },
          { name: "Co. Monaghan" },
          { name: "Co. Louth" },
          { name: "Co. Meath" },
          { name: "Co. Wicklow" },
        ],
      },
      {
        name: "Ireland West & Islands",
        items: [
          { name: "Ireland's Islands" },
          { name: "Co. Clare" },
          { name: "Co. Galway" },
          { name: "Co. Limerick" },
          { name: "Co. Mayo" },
        ],
      },
      {
        name: "North West Ireland",
        items: [
          { name: "Co. Donegal" },
          { name: "Co. Leitrim" },
          { name: "Co. Sligo" },
        ],
      },
      {
        name: "South East Ireland",
        items: [
          { name: "Co. Carlow" },
          { name: "Co. Kilkenny" },
          { name: "Co. Tipperary" },
          { name: "Co. Waterford" },
          { name: "Co. Wexford" },
        ],
      },
      {
        name: "South West Ireland",
        items: [
          { name: "Co. Cork" },
          { name: "Co. Kerry" },
        ],
      },
      {
        name: "The Midlands & Lakeland",
        items: [
          { name: "Co. Cavan" },
          { name: "Co. Longford" },
          { name: "Co. Offaly" },
          { name: "Co. Roscommon" },
          { name: "Co. Westmeath" },
          { name: "Co. Laois" },
        ],
      },
    ],
  },
  {
    nation: "Other Territories",
    groups: [
      {
        name: "International & Islands",
        items: [
          { name: "British Isles" },
          { name: "USA" },
        ],
      },
    ],
  },
];

export function SitemapContent() {
  return (
    <section className="sitemap-section">
      <div className="sitemap-container">
        <div className="sitemap-block">
          <div className="sitemap-heading rv in">
            <h2>Core Guide Pages</h2>
            <span className="rule" />
          </div>
          <div className="sitemap-pages-grid">
            {mainPages.map((page, idx) => (
              <Link
                key={page.title}
                className="sitemap-page-card rv in"
                href={page.url}
                style={{ "--d": `${(idx % 4) * 0.06}s` } as React.CSSProperties}
              >
                <b>{page.title}</b>
                <span>{page.desc}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="sitemap-block">
          <div className="sitemap-heading rv in">
            <h2>Nations &amp; Regional Directory</h2>
            <span className="rule" />
          </div>
          <div className="sitemap-areas-grid">
            {nationsData.map((nation, nIdx) => (
              <div
                key={nation.nation}
                className="sitemap-card rv in"
                style={{ "--d": `${(nIdx % 3) * 0.08}s` } as React.CSSProperties}
              >
                <div className="sitemap-card-header">
                  <h3>{nation.nation}</h3>
                  {nation.countryUrl && (
                    <Link href={nation.countryUrl}>
                      EXPLORE REGION &rarr;
                    </Link>
                  )}
                </div>
                <div className="sitemap-tree">
                  {nation.groups.map((group) => (
                    <div key={group.name} className="sitemap-tree-item">
                      <div className="sitemap-group-title">
                        {group.query ? (
                          <Link
                            href={`/search?area=${encodeURIComponent(group.query)}&q=${encodeURIComponent(group.query)}`}
                            className="sitemap-link"
                            style={{ color: "var(--gold)", fontWeight: 800 }}
                          >
                            {group.name}
                          </Link>
                        ) : (
                          <span>{group.name}</span>
                        )}
                      </div>
                      <div className="sitemap-sub-list">
                        {group.items.map((item) => (
                          <Link
                            key={item.name}
                            className="sitemap-link"
                            href={`/search?area=${encodeURIComponent(item.query || item.name)}&q=${encodeURIComponent(item.query || item.name)}`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

