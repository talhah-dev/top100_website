import React from "react";
import type { Metadata } from "next";
import "@/components/home/home.css";
import "@/components/contact/contact.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ContactHero,
  ContactForm,
  ContactRoutes,
  ContactSocialBand,
} from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us | Top 100 Attractions",
  description: "Questions, corrections, and places we should see next. Talk to the Stevenson's Top 100 guide.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <section className="contact">
          <div className="wrap">
            <div className="csplit">
              <ContactForm />
              <ContactRoutes />
            </div>
          </div>
        </section>
        <ContactSocialBand />
      </main>
      <Footer />
    </>
  );
}
