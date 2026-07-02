"use client";

import { Hero } from "@/components/Hero";
import { useEstimate } from "@/hooks/useEstimate";
import { EstimateForm } from "@/components/EstimateForm";
import { PriceBreakdown } from "@/components/PriceBreakdown";
import { useState } from "react";
import { ContactInfo } from "@/lib/types";
import { ContactModel } from "@/components/ContactModel";

export default function Home() {
    const { details, setDetails, estimate } = useEstimate();
    const [isModelOpen, setModelOpen] = useState(false);

    function handleContactSubmit(contact: ContactInfo) {
        console.log("Cerere oferta: ", { contact, details, estimate});
        setModelOpen(false);
    }

    function openContactModel() {
        setModelOpen(true);
    }

    function closeContactModel() {
        setModelOpen(false);
    }

    return (
      <main className="min-h-screen bg-paper mx-6 px-18 py-12">
        <Hero />

        <section className="max-w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="font-display text-center md:text-left text-4xl text-ink">
                Calculator cost tehnoredactare
              </h1>

              <div className="w-full h-px bg-accent mt-4 mb-4" />
              
              <p className="text-ink-soft max-w-xl">
                Estimează rapid costul tehnoredactării unei cărți: introdu numărul de pagini, formatul și conținutului. Vezi prețul în timp real.
              </p>
            </div>

            <button
              type="button"
              onClick={openContactModel}
              className="shrink-0 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition cursor-pointer touch-manipulation active:scale-[0.98]">
              Cere oferta
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <EstimateForm value={details} onChange={setDetails} />
            </div>

            <div className="md:cols-span-1">
              <PriceBreakdown estimate={estimate}/>
            </div>
          </div>
        </section>

        { isModelOpen && (
          <ContactModel
            estimate={estimate}
            onClose={closeContactModel}
            onSubmit={handleContactSubmit}
          />
        )}
      </main>
    )
}