"use client";

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
            <div className="max-w-5xl mx-auto px-6 py-12">
              <p className="text-ink-soft">
                Se incarcă...
              </p>  
            </div>
        )
    }

    const categories: PriceItem["category"][] = ["pricelist", "plan", "service"];

    return (
        <div className="max-w-full mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-10"> 
            <div>
              <h1 className="font-display text-2xl text-ink">
                Administrare prețuri
              </h1>
              <p className="text-ink-soft text-sm mt-1">
                Atelier Tipar
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="text-sm border border-line rounded-md px-4 py-2 hover:border-accent cursor-pointer"
            >
              Ieși din cont
            </button>
          </div>

          {categories.map((category) => {
            const items = prices.filter((p) => p.category === category);
            if (items.length === 0) return null;

            return (
                <div key={category} className="mb-10">
                  <h2 className="font-display text-lg text-ink mb-3">
                    {categoryLabels[category]}  
                  </h2>

                  <div className="border border-line rounded-2xl overflow-hidden bg-card">
                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-2 px-4 py-2">
                      <span>Serviciu</span>
                      <span>Min</span>
                      <span>Max</span>
                      <span>Unitate</span>  
                    </div>

                    {items.map((item) => (
                      <PriceRow key={item.id} price={item} />  
                    ))}
                  </div>
                </div>
            );
            
          })}
        </div>
    )
}