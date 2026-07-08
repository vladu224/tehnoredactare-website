"use client";

import { faqs } from "@/lib/faqs";
import { useState } from "react";

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number| null>(null);

    function toggle(index: number) {
        setOpenIndex((current) => current === index ? null : index);
    }

    return (
        <section id="intrebari" className="max-w-full mx-auto mx-6 px-24 py-40">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <span className="text-accent text-xs font`-medium tracking-widest uppercase">
                Întrebări frecvente
              </span>
              
              <h2 className="font-display text-4xl text-ink mt-4">
                Răspunsuri pe scurt.
              </h2>

              <p className="text-ink-soft mt-4 leading-relaxed">
                Nu ai găsit ce căutai? Scrie-ne și răspundem în maxim 12 ore lucrătoare.
              </p>
            </div>

            <div className="lg:col-span-2 border-t border-ink/25">
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={faq.question}
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => toggle(index)}
                />
              ))}
            </div>
          </div>`  
        </section>
    );
}

function FaqItem({
    faq,
    isOpen,
    onToggle,
}: {
    faq: (typeof faqs)[number];
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border-b border-ink/25">
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-between gap-6 py-7 text-left group cursor-pointer"
          >
            <span
              className={`font-display text-xl transition ${
                isOpen ? "text-accent" : "text-ink group-hover:text-accent"
              }`}
            >
              {faq.question} 
            </span>
            <span
              className={`shrink-0 text-accent text-xl transition-transform duration-200 ${
                isOpen ? "rotate-45" : ""
              }`}
              aria-hidden
            >
              +
            </span>
          </button>

          <div
            className={`grid transition-all duration-200 ease-out ${
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-ink-soft leading-relaxed pb-7 max-w-2xl">
                {faq.answer}  
              </p>  
            </div>
          </div>
        </div>
    )
}