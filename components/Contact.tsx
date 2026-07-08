"use client";

import { ContactInfo, ServiceType } from "@/lib/contact";
import { useEffect, useState } from "react";

interface ContactProps {
    prefillMessage?: string;
}

const emptyContact: ContactInfo = {
    name: "",
    email: "",
    service: "tehnoredactare",
    message: "",
}

const services: { value: ServiceType; label: string }[] = [
    { value: "tehnoredactare", label: "Tehnoredactare" },
    { value: "design-coperta", label: "Design copertă" },
    { value: "redactare", label: "Redactare" },
    { value: "corectura", label: "Corectură" },
];

export function Contact() {
    const [contact, setContact] = useState<ContactInfo>(emptyContact);

    function update <K extends keyof ContactInfo>(key: K, val: ContactInfo[K]) {
        setContact({ ...contact, [key]: val });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
    }

    return (
      <section id="contact" className="max-w-full bg-ink border-t border-ink">
        <div className="mx-auto mx-6 px-24 py-6 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 ">
          <div className="flex flex-col flex-start py-8 lg:py-16">
            <span className="text-accent text-xs font-medium tracking-widest uppercase">
              Contact
            </span>

            <h2 className="font-display text-4xl md:text-5xl text-paper leading-tight mt-4">
              Hai să dăm <span className="text-accent">formă</span> cărții tale.
            </h2>

            <p className="text-paper/60 mt-6 max-w-md leading-relaxed">
              Trimite-ne un manuscris, un fragment sau doar o idee. Răspundem în 12 ore lucrătoare cu o estimare onestă.  
            </p>

            <div className="space-y-4 mt-10 text-paper/80 text-sm">
              <p>vlad.andone04@gmail.com</p>
              <p>+40 751 587 092</p>
              <p>Bacău · Strada Apusului 12 (și online)</p>
            </div>
          </div>

          <div className="bg-card rounded-md p-10 my-8 lg:my-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium tracking-wide uppercase text-ink-soft mb-2">
                    Nume
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ana Popescu"
                    value={contact.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="w-full border-b border-line bg-transparent pb-2.5 text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-accent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-wide uppercase text-ink-soft mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ana@email.com"
                    value={contact.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full border-b border-line bg-transparent pb-2.5 text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-accent transition"
                  />
                </div>
              </div>  

              <div>
                <label className="block text-xs font-medium tracking-wide uppercase text-ink-soft mb-2">
                  Serviciu de interes
                </label>
                <select
                  value={contact.service}
                  onChange={(e) => update("service", e.target.value as ServiceType)}
                  className="w-full border-b border-line bg-transparent pb-2.5 text-ink focus:outline-none focus:border-accent transition cursor-pointer"
                >
                {services.map((s) => (
                  <option key={s.value} value={s.value} className="cursor-pointer">
                    {s.label}
                  </option>
                ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wide uppercase text-ink-soft mb-2">
                  Despre proiect
                </label>
                <textarea
                  rows={3}
                  placeholder="Spune-ne câteva cuvinte despre carte, gen, număr de pagini..."
                  value={contact.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full border-b border-line bg-transparent pb-2.5 text-ink placeholder:text-ink-soft/50 resize-none focus:outline-none focus:border-accent transition"
                />
              </div>

              <button
                type="submit"
                className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3.5 rounded-lg transition inline-flex items-center gap-2 cursor-pointer"
              >
                Trimite mesajul
                <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>  
    );
}