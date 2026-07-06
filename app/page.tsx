"use client";

import { Hero } from "@/components/Hero";
import { useEstimate } from "@/hooks/useEstimate";
import { EstimateForm } from "@/components/EstimateForm";
import { PriceBreakdown } from "@/components/PriceBreakdown";
import { useState } from "react";
import { ContactInfo } from "@/lib/types";
import { ContactModel } from "@/components/ContactModel";
import { Contact } from "@/components/Contact";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { Calculator } from "@/components/Calculator";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";

export default function Home() {
    return (
      <main id="" className="min-h-screen bg-paper ">
        <Hero />
        <Services />
        <Pricing />
        <Process />
        <Testimonials />
        <Faq /> 
        <Contact />
      </main>
    );
}