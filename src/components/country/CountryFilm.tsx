"use client";

import React, { useState } from "react";
import { CountryData } from "./country-data";

interface CountryFilmProps {
  country: CountryData;
}

export function CountryFilm({ country }: CountryFilmProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const film = country.film;

  if (!film || !film.videoUrl) {
    return null;
  }

  return (
    <div
      className="imgcard filmcard rv in cursor-pointer"
      id="film"
      role="region"
      aria-label={`Play the ${country.name} film`}
      onClick={() => setIsPlaying(true)}
    >
      {isPlaying ? (
        <iframe
          src={`${film.videoUrl}${film.videoUrl.includes("?") ? "&" : "?"}autoplay=1`}
          title={`${country.name} video player`}
          className="w-full h-full absolute inset-0 border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <img
            loading="lazy"
            src={film.img}
            alt={film.alt}
          />
          <div className="veil" />
          <span className="play" />
          <div className="meta">
            <span className="vchip">{film.badge}</span>
            <h3>{film.title}</h3>
            <p>{film.subtitle}</p>
          </div>
        </>
      )}
    </div>
  );
}
