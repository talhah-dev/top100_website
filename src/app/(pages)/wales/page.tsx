import React from "react";
import type { Metadata } from "next";
import "@/components/home/home.css";
import "@/components/country/country.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getDynamicCountryData } from "@/lib/country-service";
import {
  COUNTRIES,
  CountryHero,
  CountryAreas,
  CountryPicks,
  CountryFilm,
  CountryQuote,
} from "@/components/country";

export const metadata: Metadata = {
  title: "Wales | Top 100 Attractions",
  description: "Castles that wrote the rulebook, gardens that ignore it, and mountains keeping an eye on both.",
};

export default function WalesPage() {
  const country = getDynamicCountryData("wales") || COUNTRIES["wales"];

  return (
    <>
      <Navbar />
      <CountryHero country={country} />
      <main className="wsec">
        <div className="wrap">
          <CountryAreas country={country} />
          <CountryPicks country={country} />
          {country.film?.videoUrl && <CountryFilm country={country} />}
          <CountryQuote country={country} />
        </div>
      </main>
      <Footer />
    </>
  );
}
