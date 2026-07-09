"use client";

import { Hero } from "@/components/Hero";

import { Contact } from "@/components/Contact";
import { Pricing } from "@/components/pricing/Pricing";
import { PriceList } from "@/components/pricing/PriceList";
import { Services } from "@/components/Services";
import { Calculator } from "@/components/calculator/Calculator";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { useState } from "react";
import { Portofolio } from "@/components/Portofolio";


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
        <PriceList />
        <Calculator onRequestOffer={handleRequestOffer}/>
        <Process />
        <Portofolio />
        <Testimonials />
        <Faq /> 
        <Contact prefillMessage={prefillMessage}/>
      </main>
    );
}