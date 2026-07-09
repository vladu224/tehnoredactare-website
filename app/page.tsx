"use client";

import { Hero } from "@/components/sections/hero/Hero";

import { Contact } from "@/components/sections/contact/Contact";
import { Pricing } from "@/components/sections/pricing/Pricing";
import { PriceList } from "@/components/sections/pricing/PriceList";
import { Services } from "@/components/sections/services/Services";
import { Calculator } from "@/components/sections/calculator/Calculator";
import { Process } from "@/components/sections/process/Process";
import { Testimonials } from "@/components/sections/testimonials/Testimonials";
import { Faq } from "@/components/sections/faq/Faq";
import { useState } from "react";
import { Portofolio } from "@/components/sections/portofolio/Portofolio";


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