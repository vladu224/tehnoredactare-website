"use client";

import { Hero } from "@/components/client/sections/hero/Hero";

import { Contact } from "@/components/client/sections/contact/Contact";
import { Pricing } from "@/components/client/sections/pricing/Pricing";
import { PriceList } from "@/components/client/sections/pricing/PriceList";
import { Services } from "@/components/client/sections/services/Services";
import { Calculator } from "@/components/client/sections/calculator/Calculator";
import { Process } from "@/components/client/sections/process/Process";
import { Testimonials } from "@/components/client/sections/testimonials/Testimonials";
import { Faq } from "@/components/client/sections/faq/Faq";
import { useState } from "react";
import { Portofolio } from "@/components/client/sections/portofolio/Portofolio";


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
        <Portofolio />
        <Testimonials />
        <Faq /> 
        <Contact prefillMessage={prefillMessage}/>
      </main>
    );
}