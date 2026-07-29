"use client";

import { priceListFootnote, PriceListItem, priceListItems } from "@/lib/data/pricing/priceListItem";
import { priceListAdapter } from "@/lib/utils/priceListAdapter";
import { useEffect, useState } from "react";

export function PriceList() {
    const [priceListItems, setPriceListItems] = useState<PriceListItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const origin = window.location.origin;
        fetch(`${origin}/api/admin/prices`)
            .then((res) => {
                if(!res.ok) throw new Error("Eroare la încărcarea prețurilor");
                return res.json();
            })
            .then((data) => {
                const formattedData = priceListAdapter(data);
                setPriceListItems(formattedData)
                setLoading(false);
            })
            .catch((err) => {
                console.error("Eroare in PriceList: ", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="max-w-full mx-auto sm:px-24 py-8 sm:py-24 text-center text-ink-soft">
              Se încarcă lista de prețuri...
            </section>
        )
    }

    return (
        <section className="max-w-full py-8 sm:py-24 mt-20">
          <div className="bg-bg2 border border-ink/25 rounded-md overflow-hidden">
            <div className="bg-paper/60 flex items-center justify-between px-4 sm:px-8 py-7 border-b border-ink/25">
              <h3 className="font-display text-lg sm:text-2xl text-ink">
                Listă detaliată de prețuri
              </h3>

              <span className="text-ink-soft text-[10px] tracking-widest uppercase shrink-0">
                Actualizat 2026  
              </span>  
            </div>

            <div>
              {priceListItems.map((item, index) => (
                <div
                  key={item.service}
                  className={`flex items-center justify-between gap-20 px-4 sm:px-8 py-4 ${
                    index % 2 === 1 ? "bg-paper/60" : ""
                  } ${
                    index !== priceListItems.length - 1 ? "border-b border-ink/25" : ""
                  }`}    
                >
                  <span className="text-sm sm:text-[16px] text-ink">
                    {item.service}
                  </span>

                  <div className="flex flex-col sm:flex-row items-center items-baseline gap-1 sm:gap-2 shrink-0">
                    <span className="text-accent font-medium">
                      {item.priceRange} 
                    </span>
                    <span className="text-ink-soft text-xs">
                      {item.unit}  
                    </span>
                  </div>
                </div>
              ))}  
            </div>

            <div className="px-8 py-6 border-t border-ink/25">
              <p className="text-ink-soft text-sm">
                {priceListFootnote}
              </p>  
            </div>
          </div>  
        </section>
    )
}