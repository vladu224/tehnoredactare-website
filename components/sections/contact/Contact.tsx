"use client";

import { ContactInfo, ServiceType } from "@/lib/types/contact/contact";
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin } from 'lucide-react';

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

export function Contact({ prefillMessage }: ContactProps) {
    const [contact, setContact] = useState<ContactInfo>(emptyContact);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle"); 

    useEffect(() => {
        if (prefillMessage) {
            setContact((current) => ({ ...current, message: prefillMessage }));
        }
    }, [prefillMessage]);

    function update <K extends keyof ContactInfo>(key: K, val: ContactInfo[K]) {
        setContact({ ...contact, [key]: val });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application.json" },
                body: JSON.stringify(contact)
            });

            if (!response.ok) throw new Error("Eroare la trimitere");

            setStatus("success");
            setContact(emptyContact);
        } catch {
            setStatus("error");
        }
    }

    return (
      <section id="contact" className="max-w-full bg-ink border-t border-ink">
        <div className="mx-auto px-6 sm:px-24 py-8 sm:py-24 grid grid-cols-1 lg:grid-cols-5 lg:gap-20 ">
          <div className="flex flex-col col-span-2 flex-start lg:py-16">
            <span className="text-accent text-xs font-medium tracking-widest uppercase">
              Contact
            </span>

            <h2 className="font-display text-2xl md:text-5xl text-paper leading-tight mt-4 sm:mt-12">
              Hai să dăm <span className="text-accent">formă</span> cărții tale.
            </h2>

            <p className="text-paper/60 text-sm sm:text-lg mt-6 max-w-lg leading-relaxed">
              Trimite-ne un manuscris, un fragment sau doar o idee. Răspundem în 12 ore lucrătoare cu o estimare onestă.  
            </p>

            <div className="flex flex-col space-y-4 mt-10 text-paper/80 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Mail />
                <p>vlad.andone04@gmail.com</p>
              </div>

              <div className="flex items-center gap-2">
                <Phone />
                <p>+40 751 587 092</p>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin/>
                <p>Bacău · Strada Apusului 12 (și online)</p>
              </div>
            </div>
          </div>

          <div className="bg-card sm:col-span-3 rounded-md p-4 sm:p-10 -mx-4 my-8 lg:my-16">
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
                    placeholder="ana.popescu@gmail.com"
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
                  rows={5}
                  placeholder="Spune-ne câteva cuvinte despre carte, gen, număr de pagini..."
                  value={contact.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full border-b border-line bg-transparent pb-2.5 text-ink placeholder:text-ink-soft/50 resize-none focus:outline-none focus:border-accent transition"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-accent hover:bg-accent-hover w-full text-white font-medium px-6 py-3.5 rounded-md transition gap-2 cursor-pointer"
              >
                {status === "loading" ? "Se trimite..." : "Trimite mesajul"}
                
                <span aria-hidden>→</span>
              </button>
              <p className="text-ink-soft text-xs mt-3">
                  * Prin trimiterea formularului, ești de acord cu prelucrarea datelor pentru a-ți răspunde la cerere.
                </p>

              {status === "success" && (
                <p className="text-accent text-sm mt-3">
                  Mesajul a fost trimis! Revenim în maxim 12h lucrătoare.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm mt-3 text-red-700">
                  Ceva nu a mers bine. Încearcă din nou sau scrie-ne direct pe email.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>  
    );
}