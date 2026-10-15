"use client";

import React from "react";
import { CountryData } from "./country-data";

interface CountryQuoteProps {
  country: CountryData;
}

export function CountryQuote({ country }: CountryQuoteProps) {
  return (
    <div className="equote rv in">
      <blockquote>
        {country.quote}
        <span className="who">{country.quoteAuthor}</span>
      </blockquote>
    </div>
  );
}
