"use client";

import React from "react";
import { CountryData } from "./country-data";

interface CountryFilmProps {
  country: CountryData;
}

export function CountryFilm({ country }: CountryFilmProps) {
  return (
    <div
      className="imgcard filmcard rv in"
      id="film"
      role="region"
      aria-label={`Play the ${country.name} film`}
    >
      <img
        loading="lazy"
        src={country.film.img}
        alt={country.film.alt}
      />
      <div className="veil" />
      <span className="play" />
      <div className="meta">
        <span className="vchip">{country.film.badge}</span>
        <h3>{country.film.title}</h3>
        <p>{country.film.subtitle}</p>
      </div>
    </div>
  );
}
