import { PriceItem } from "@/lib/types/prices/prices";
import { useEffect, useState } from "react";
import { PriceRow } from "../../ui/PriceRow";

export default function Prices() {
    const [prices, setPrices] = useState<PriceItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/admin/prices")
            .then((res) => res.json())
            .then((data) => {
                setPrices(data.filter((p: PriceItem) => p.category === "pricelist"));
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (
            <div className="h-32 bg-ink/5 rounded-2xl animate-pulse" />
        );
    }

    return (
        <div>
          <h1 className="font-display text-2xl text-ink mb-1">
            Listă detaliată de prețuri
          </h1>  
          <p className="text-ink-soft text-sm mb-8">
            Prețurile afișate în tabelul public de tarife.
          </p>

          <div className="border border-line rounded-2xl bg-card">
            <div className="grid grid-cols-3 sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 sm:gap-4 px-6 py-3.5 bg-ink/[0.02] border-b border-line text-xs font-semibold tracking-wider text-ink-soft uppercase">
              <span>Serviciu</span>
              <span>Preț Min</span>
              <span>Preț Max</span>
              <span>Unitate</span>
              <span className="sm:text-right">Acțiuni</span>
            </div>

            <div className="divide-y divide-line">
              {prices.map((item) => (
                <PriceRow key={item.id} price={item} />
              ))}  
            </div>
          </div>
        </div>
    )
}