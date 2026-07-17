"use client";

import { PriceItem } from "@/lib/types/prices/prices";
import { useState } from "react";

interface PriceRowProps {
    price: PriceItem;
}

export function PriceRow({ price }: PriceRowProps) {
    const [label, setLabel] = useState(price.label);
    const [priceMin, setPriceMin] = useState(String(price.price_min));
    const [priceMax, setPriceMax] = useState(
        price.price_max !== null ? String(price.price_max) : ""
    );
    const [unit, setUnit] = useState(price.unit);
    const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

    async function handleSave() {
        setStatus("saving");

        try {
            const response = await fetch(`/api/admin/prices/${price.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    label,
                    price_min: Number(priceMin),
                    price_max: priceMax === "" ? null : Number(priceMax),
                    unit,
                }),
            });

            if(!response.ok) throw new Error();

            setStatus("saved");
            setTimeout(() => setStatus("idle"), 1500);
        } catch {
            setStatus("error");
        }
    }

    return (
        <div 
          className={`grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-2 px-4 py-2 border-t border-line items-center transition-colors ${
            status === "saved" ? "bg-green-50" : ""
          }`}
        >
          <input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="text-sm border border-line rounded px-2 py-1.5 bg-paper"
          />
          <input 
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            className="text-sm border border-line rounded px-2 py-1.5 bg-paper"
          />
          <input 
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            className="text-sm border border-line rounded px-2 py-1.5 bg-paper"
          />
          <input 
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="text-sm border border-line rounded px-2 py-1.5 bg-paper"
          />
          <button
            onClick={handleSave}
            disabled={status === "saving"}
            className={`text-xs px-3 py-1.5 rounded text-white disabled:opacity-60 whitespace-nowrap cursor-pointer ${
                status === "saving" 
                    ? "bg-yellow-600"
                    : status === "saved"
                        ? "bg-green-600"
                        : status === "error"
                            ? "bg-red-500"
                            : "bg-accent hover:bg-accent-hover" 

            }`}
          >
            {status === "saving" ? "..." : status === "saved" ? "Good" : status === "error" ? "Eroare" : "Salvează"}
          </button>
        </div>
    );
}