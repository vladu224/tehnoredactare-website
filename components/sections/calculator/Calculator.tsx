"use client";

import { useCalculator } from "@/hooks/useCalculator";
import { PageSlider } from "./PageSlider";
import { ServiceCheckbox } from "./ServiceCheckbox";
import { UrgentToggle } from "./UrgentToggle";
import { EstimationPanel } from "./EstimationPanel";
import { buildEstimationSummaryText, calculateEstimation } from "@/lib/business/calculator/calculateEstimation";
import { ServiceOptionFinal } from "@/lib/types/calculator/calculator";
import { useEffect, useState } from "react";
import { error } from "console";
import { subitemPricingAdapter } from "@/lib/utils/subitemPricingAdapter";

interface CalculatorProps {
    onRequestOffer: (summary: string) => void;
}

export function Calculator({ onRequestOffer }: CalculatorProps) {
    const [subitemPrices, setSubitemPrices] = useState<ServiceOptionFinal[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const origin = window.location.origin;
        fetch(`${origin}/api/admin/prices`)
            .then((res) => {
                if(!res.ok) throw new Error("Eroare la incarcarea preturilor in sectiunea Calculator");
                return res.json();
            })
            .then((data) => {
                const formattedData = subitemPricingAdapter(data);
                setSubitemPrices(formattedData);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Eroare in Calculator: ", error);
                setLoading(false);
            })

    }, []);
    const { state, estimation, setPageCount, toggleService, setSubOptionValues, setUrgent } = useCalculator(subitemPrices);

    function handleRequestOffer() {
        const summary = buildEstimationSummaryText(state, estimation);
        onRequestOffer(summary);
    }

    return (
        <section id="calculator" className="bg-bg2 mx-auto px-6 sm:px-24 py-8 sm:py-24">
          <div className="max-w-full">
            <span className="text-accent text-xs font-medium tracking-widest uppercase">
              Calculator
            </span>

            <h2 className="font-display text-2xl sm:text-5xl text-ink mt-4 sm:mt-12">
              Află prețul în 30 de secunde.
            </h2>

            <p className="text-ink-soft text-sm sm:text-lg mt-4 max-w-2xl leading-relaxed">
              Bifează serviciile, alege numărul de pagini și primești o estimare instant. Oferta fermă vine după ce vedem manuscrisul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 mt-8 sm:mt-16 -mx-4 sm:mx-0 border border-ink/25 rounded-md overflow-hidden">
            <div className="sm:col-span-3 bg-card p-4 sm:p-12 space-y-10">
              <PageSlider
                value={state.pageCount}
                onChange={setPageCount}
              />  
              <ServiceCheckbox
                selectedIds={state.selectedServiceIds} 
                subOptionValues={state.subOptionValues}
                onToggle={toggleService}
                onSubOptionChange={setSubOptionValues}
              />
              <UrgentToggle
                checked={state.isUrgent}
                onChange={setUrgent}  
              />
            </div>

            <div className="md:col-span-2">
              <EstimationPanel
                estimation={estimation}
                onRequestOffer={handleRequestOffer}
              />  
            </div>
          </div>
        </section>
    )
}