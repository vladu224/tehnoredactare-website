"use client";

import { useEffect, useState } from "react";
import { PlanCard } from "./PlanCard";
import { pricingPlansAdapter } from "@/lib/utils/pricingPlansAdapter";
import { pricingPlanFinal } from "@/lib/types/prices/pricingPlan";
import { PriceList } from "./PriceList";
import { PricingPlans } from "./PricingPlans";

export function Pricing() {
    return (
        <section id="preturi" className="max-w-full mx-auto px-6 sm:px-24 py-8 sm:py-24">
          <span className="text-accent text-xs font-medium tracking-widest uppercase">
            Pachete &amp; tarife
          </span>

          <h2 className="font-display text-2xl sm:text-5xl text-ink mt-4 sm:mt-12">
            Prețuri transparente, fără surprize.
          </h2>

          <p className="text-ink-soft text-sm sm:text-lg mt-4 max-w-2xl leading-relaxed">
            Trei pachete principale pentru autori și edituri, plus o listă detaliată per serviciu. Toate tarifele sunt în lei, fără TVA (PFA neplătitor).  
          </p>

          <PricingPlans />

          <PriceList />
        </section>
    );
}