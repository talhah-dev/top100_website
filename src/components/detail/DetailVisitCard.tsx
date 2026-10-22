"use client";

import React from "react";

interface DetailVisitCardProps {
  title?: string;
  address?: string;
  address2?: string;
  town?: string;
  county?: string;
  postcode?: string;
  phone?: string;
  email?: string;
  website?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  lat?: number;
  lng?: number;
}

export function DetailVisitCard({
  title = "Attraction",
  address,
  address2,
  town,
  county,
  postcode,
  phone,
  email,
  website,
  facebook,
  twitter,
  instagram,
  lat,
  lng,
}: DetailVisitCardProps) {
  const addressParts = [address, address2, town, county, postcode].filter(Boolean);
  const displayAddress = addressParts.length > 0 ? addressParts.join(", ") : "United Kingdom";
  const embedQuery =
    lat && lng
      ? `${lat},${lng}`
      : encodeURIComponent([title, address, town, county, postcode].filter(Boolean).join(", ") || displayAddress);
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${embedQuery}`;

  return (
    <section className="section" id="visit" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="kicker rv in">
          <span className="line" />
          <span className="eyebrow">Plan Your Visit</span>
        </div>
        <h2 className="h2 rv in" style={{ "--d": ".1s" } as React.CSSProperties}>
          Get in touch, <span className="grad">get there.</span>
        </h2>
        <div className="visitcard rv in" style={{ "--d": ".15s" } as React.CSSProperties}>
          <div className="vinfo">
            <div className="fact">
              <span className="flabel">Address</span>
              <span className="fval">
                {addressParts.map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < addressParts.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </div>

            {phone && (
              <div className="fact">
                <span className="flabel">Telephone</span>
                <span className="fval">
                  <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
                </span>
              </div>
            )}

            {email && (
              <div className="fact">
                <span className="flabel">Email</span>
                <span className="fval">
                  <a href={`mailto:${email}`}>{email}</a>
                </span>
              </div>
            )}

            {website && (
              <div className="fact">
                <span className="flabel">Website</span>
                <span className="fval">
                  <a
                    href={website.startsWith("http") ? website : `https://${website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </a>
                </span>
              </div>
            )}

            {(facebook || twitter || instagram) && (
              <div className="fact">
                <span className="flabel">Follow</span>
                <span className="socials">
                  {facebook && (
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.6 21v-7.6h2.5l.4-3h-2.9V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.3c-.3 0-1.1-.1-2.1-.1-2.2 0-3.6 1.3-3.6 3.8v2.4H8.4v3h2.5V21z" />
                      </svg>
                    </a>
                  )}
                  {twitter && (
                    <a
                      href={twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter / X"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.5 4l6 8.1L4.8 20h2.3l4.5-5.7L15.8 20h4.1l-6.3-8.5L19.5 4h-2.3l-4.2 5.3L9 4z" />
                      </svg>
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                  )}
                </span>
              </div>
            )}

            <a
              className="dirs"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GET DIRECTIONS &#8599;
            </a>
          </div>

          <div className="vmap relative overflow-hidden rounded-lg bg-[#0D1528] flex items-center justify-center min-h-[420px] w-full">
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
              src={`https://maps.google.com/maps?q=${embedQuery}&hl=en&z=15&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
