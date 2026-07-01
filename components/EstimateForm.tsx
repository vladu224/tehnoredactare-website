// src/components/EstimateForm.tsx
"use client";

import { BookDetails, Format, Deadline } from "@/lib/types";

interface EstimateFormProps {
  value: BookDetails;
  onChange: (value: BookDetails) => void;
}

export function EstimateForm({ value, onChange }: EstimateFormProps) {
  function update<K extends keyof BookDetails>(key: K, val: BookDetails[K]) {
    onChange({ ...value, [key]: val });
  }

  return (
    <div className="bg-card rounded-2xl border border-line shadow-sm p-8">
      <h2 className="font-display text-2xl text-ink">Detalii lucrare</h2>
      <p className="text-ink-soft text-sm mt-1">
        Completează rubrica pentru a obține o estimare instantă.
      </p>

      <div className="mt-8 space-y-6">
        {/* Număr pagini */}
        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Număr pagini
          </label>
          <input
            type="number"
            min={1}
            value={value.pageCount}
            onChange={(e) => update("pageCount", Number(e.target.value))}
            className="w-full rounded-lg border border-line bg-paper px-4 py-2.5
                       text-ink focus:outline-none focus:ring-2 focus:ring-accent/40
                       focus:border-accent transition"
          />
        </div>

        {/* Format */}
        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Format
          </label>
          <select
            value={value.format}
            onChange={(e) => update("format", e.target.value as Format)}
            className="w-full rounded-lg border border-line bg-paper px-4 py-2.5
                       text-ink focus:outline-none focus:ring-2 focus:ring-accent/40
                       focus:border-accent transition"
          >
            <option value="A4">A4</option>
            <option value="A5">A5</option>
          </select>
        </div>

        {/* Conținut */}
        <div>
          <span className="block text-sm font-medium text-ink mb-3">
            Conținut
          </span>
          <div className="space-y-2.5">
            <Checkbox
              label="Conține imagini"
              checked={value.hasImages}
              onChange={(v) => update("hasImages", v)}
            />
            <Checkbox
              label="Conține tabele"
              checked={value.hasTables}
              onChange={(v) => update("hasTables", v)}
            />
            <Checkbox
              label="Note de subsol"
              checked={value.hasFootnotes}
              onChange={(v) => update("hasFootnotes", v)}
            />
          </div>
        </div>

        {/* Termen livrare */}
        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Termen livrare
          </label>
          <select
            value={value.deadline}
            onChange={(e) => update("deadline", e.target.value as Deadline)}
            className="w-full rounded-lg border border-line bg-paper px-4 py-2.5
                       text-ink focus:outline-none focus:ring-2 focus:ring-accent/40
                       focus:border-accent transition"
          >
            <option value="standard">Standard — 14 zile</option>
            <option value="urgent">Urgent — 7 zile</option>
          </select>
        </div>
      </div>

      <p className="text-ink-soft text-xs mt-8">
        Prețul se recalculează automat la fiecare modificare.
      </p>
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer text-ink text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 rounded border-line text-accent focus:ring-accent/40"
      />
      {label}
    </label>
  );
}