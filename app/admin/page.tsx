"use client";

import { Portofolio } from "@/components/admin/portofolio/Portofolio";
import { PriceRow } from "@/components/admin/PriceRow";
import { PriceItem } from "@/lib/types/prices/prices";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const categoryLabels: Record<PriceItem["category"], string> = {
    pricelist: "Listă detaliată de prețuri",
    plan: "Pachete",
    service: "Servicii",
}

export default function AdminPage() {
    const router = useRouter();
    const [prices, setPrices] = useState<PriceItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/admin/prices")
            .then((res) => res.json())
            .then((data) => {
                console.log("Prețuri primite din DB:", data);
                setPrices(data);
                setLoading(false);
            });
    }, []);

    async function handleLogout() {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    }

    if (loading) {
        return (
          <div className="max-w-full mx-auto px-6 sm:px-24 py-12 animate-pulse">
            <div className="flex justify-between items-center mb-12">
              <div>
                <div className="h-8 w-48 bg-ink/10 rounded-lg"></div>
                <div className="h-4 w-24 bg-ink/5 rounded-md mt-2"></div>
              </div>
              <div className="h-10 w-28 bg-ink/10 rounded-lg"></div>
            </div>
            <div className="space-y-4">
              <div className="h-6 w-32 bg-ink/10 rounded-md"></div>
              <div className="h-32 bg-ink/5 rounded-2xl"></div>
            </div>
          </div>
        );
    }

    const categories: PriceItem["category"][] = ["pricelist", "plan", "service"];

    return (
        <div className="max-w-full mx-auto px-6 sm:px-24 py-12 min-h-screen bg-bg">
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 mb-10 border-b border-line"> 
            <div>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-ink">
                Administrare prețuri
              </h1>
              <p className="text-ink-soft text-sm mt-1 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Panou de control — Atelier Tipar
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="self-start sm:self-center text-sm font-medium border border-line rounded-md px-4 py-2.5 text-ink-soft hover:text-ink hover:border-accent hover:bg-card transition-all duration-200 cursor-pointer shadow-md"
            >
              Ieși din cont
            </button>
          </header>

          <div className="space-y-12">
            {categories.map((category) => {
              const items = prices.filter((p) => p.category === category);
              if (items.length === 0) return null;

              return (
                <section key={category} className="fade-in">
                  <h2 className="font-display text-xl font-medium text-ink mb-4 pl-1">
                    {categoryLabels[category]}  
                  </h2>

                  <div className="border border-line rounded-2xl overflow-hidden bg-card shadow-sm transition-shadow hover:shadow-md duration-300">
                                
                    <div className="grid grid-cols-3 sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 sm:gap-4 px-6 py-3.5 bg-ink/[0.02] border-b border-line text-xs font-semibold tracking-wider text-ink-soft uppercase">
                      <span>Serviciu</span>
                      <span>Preț Min</span>
                      <span>Preț Max</span>
                      <span>Unitate</span>  
                      <span className="sm:text-right">Acțiuni</span>
                    </div>

                    <div className="divide-y divide-line">
                      {items.map((item) => (
                        <div key={item.id} className="transition-colors hover:bg-ink/[0.01]">
                          <PriceRow price={item} />  
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-10 mb-10">
            <Portofolio />
          </div>
        </div>
    );
}