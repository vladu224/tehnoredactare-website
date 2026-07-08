import { useEstimate } from "@/hooks/useEstimate";
import { ContactInfo } from "@/lib/types";
import { useState } from "react";
import { EstimateForm } from "./EstimateForm";
import { PriceBreakdown } from "./PriceBreakdown";
import { buildEstimateSummaryText } from "@/lib/pricing";

interface CalculatorProps {
  onRequestOffer: (summary: string) => void;
}

export function Calculator({ onRequestOffer }: CalculatorProps) {
  const { details, setDetails, estimate } = useEstimate();
  const [isModelOpen, setModelOpen] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState<string | undefined>();

  function handleContactSubmit(contact: ContactInfo) {
    console.log("Cerere oferta: ", { contact, details, estimate });
    setModelOpen(false);
  }

  function handleRequestOffer() {
    const summary = buildEstimateSummaryText(details, estimate);
    onRequestOffer(summary);
  }

  function openContactModel() {
    setModelOpen(true);
  }

  function closeContactModel() {
    setModelOpen(false);
  }

  return (
    <section id="calculator" className="max-w-full bg-bg2 mx-auto mx-6 px-24 py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        <div>
          <span className="text-accent text-xs font-medium tracking-widest uppercase">
            Calculator
          </span>

          <h2 className="font-display text-4xl md:text-5xl text-ink mt-4">
            Află prețul în 30 de secunde.
          </h2>

          <p className="text-ink-soft text-lg mt-4 max-w-2xl leading-relaxed">
            Bifează serviciile, alege numărul de pagini și primești o estimare instant. Oferta fermă vine după ce vedem manuscrisul.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <EstimateForm value={details} onChange={setDetails} />
        </div>

        <div className="md:cols-span-1">
          <PriceBreakdown
            estimate={estimate}
            onRequestOffer={handleRequestOffer}
          />
        </div>
      </div>
    </section>
  );
}
