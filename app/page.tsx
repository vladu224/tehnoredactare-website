"use client";

import { Hero } from "@/components/Hero";

import { Contact } from "@/components/Contact";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { Calculator } from "@/components/calculator/Calculator";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { useState } from "react";

export default function Home() {
  const [prefillMessage, setPrefillMessage] = useState<string | undefined>();

  function handleRequestOffer(summary: string) {
    setPrefillMessage(summary);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }
    return (
      <main id="" className="min-h-screen bg-paper ">
        <Hero />
        <Services />
        <Pricing />
        <Calculator onRequestOffer={handleRequestOffer}/>
        <Process />
        <Testimonials />
        <Faq /> 
        <Contact />
      </main>
    );
}