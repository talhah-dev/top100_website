import React from "react";
import { notFound } from "next/navigation";
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

export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(COUNTRIES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = getDynamicCountryData(slug);
  if (!country) {
    return {
      title: "Country Not Found | Top 100 Attractions",
    };
  }

  return {
    title: `${country.name} | Top 100 Attractions`,
    description: country.subheadline,
  };
}

export default async function CountryPage({ params }: PageProps) {
  const { slug } = await params;
  const country = getDynamicCountryData(slug);

  if (!country) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <CountryHero country={country} />
      <main className="wsec">
        <div className="wrap">
          <CountryAreas country={country} />
          <CountryPicks country={country} />
          <CountryFilm country={country} />
          <CountryQuote country={country} />
        </div>
      </main>
      <Footer />
    </>
  );
}
