import React from "react";
import type { Metadata } from "next";
import "@/components/home/home.css";
import "@/components/book/book.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BookHero,
  BookInside,
  BookReaderQuotes,
  BookAppCloser,
} from "@/components/book";

export const metadata: Metadata = {
  title: "The Book | Top 100 Attractions",
  description: "The books that started it all. The best-selling Top 100 guides, available from all main book stores, online and direct.",
};

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main>
        <BookHero />
        <BookInside />
        <BookReaderQuotes />
        <BookAppCloser />
      </main>
      <Footer />
    </>
  );
}
