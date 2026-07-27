"use client";

import { PriceItem } from "@/lib/types/prices/prices";
import { useState } from "react";
import { Check, Loader2, AlertCircle, Save } from "lucide-react";

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

    const isDirty =
        label !== price.label ||
        priceMin !== String(price.price_min) ||
        priceMax !== (price.price_max !== null ? String(price.price_max) : "") ||
        unit !== price.unit;

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

            if (!response.ok) throw new Error();

            setStatus("saved");
            setTimeout(() => setStatus("idle"), 1500);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 2000);
        }
    }

    return (
      <div className="px-4 sm:px-6 py-4 transition-colors hover:bg-ink/[0.015]">
        <div className="grid grid-cols-2 sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 sm:gap-4 sm:items-end">
          <Field label="" className="col-span-2 sm:col-span-1">
            <input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="w-full text-sm border border-line rounded-lg px-3 py-2 bg-paper focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
            />
          </Field>

          <Field label="">
            <input
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              className="w-full text-sm border border-line rounded-lg px-3 py-2 bg-paper focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
            />
          </Field>

          <Field label="">
            <input
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              placeholder="—"
              className="w-full text-sm border border-line rounded-lg px-3 py-2 bg-paper focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
            />
          </Field>

          <Field label="">
            <input
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full text-sm border border-line rounded-lg px-3 py-2 bg-paper focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
            />
          </Field>

          <button
            onClick={handleSave}
            disabled={status === "saving" || (!isDirty && status === "idle")}
            className={`h-[38px] px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5
            disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer ${
              status === "saved"
                ? "bg-green-600 text-white"
                : status === "error"
                  ? "bg-red-600 text-white"
                  : "bg-accent hover:bg-accent-hover text-white"
            }`}
          >
            {status === "saving" && <Loader2 className="w-4 h-4 animate-spin" />}
            {status === "saved" && <Check className="w-4 h-4" />}
            {status === "error" && <AlertCircle className="w-4 h-4" />}
            {status === "idle" && <Save className="w-4 h-4" />}
            <span className="hidden sm:inline">
              {status === "saving" ? "Se salvează" : status === "saved" ? "Salvat" : status === "error" ? "Eroare" : "Salvează"}
            </span>
          </button>
        </div>
      </div>
    );
}

function Field({
    label,
    children,
    className = "",
}: {
    label: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
      <div className={className}>
        <label className="block text-[11px] font-medium tracking-wide uppercase text-ink-soft mb-1.5">
          {label}
        </label>
        {children}
      </div>
    );
}