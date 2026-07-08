import { FinalPrice } from "@/lib/types";

interface PriceBreakdownProps {
    estimate: FinalPrice,
    onRequestOffer: () => void;
};

export function PriceBreakdown({ estimate, onRequestOffer }: PriceBreakdownProps) {
    return (
      <div className="sticky top-8 bg-card rounded-2x1 border border-line shadow-sm p-8">
        <h2 className="font-display text-2x1 text-ink mb-6">
          Estimare preț
        </h2>

        <div className="space-y-2 text-sm">
          <Row label="Pret de baza" value={estimate.basePrice}/>
          {estimate.lines.map((line) => (
            <Row key={line.label} label={line.label} value={line.amount}/>
          ))}              
        </div>

        <div className="border-t border-line mt-6 pt-6">
          <span className="text-ink text-sm">Total estimat</span>
          <p className="font-display text-3x1 text-accent mt-1">
            {estimate.total.toLocaleString("ro-RO")} RON
          </p>
        </div>

        <button
          onClick={onRequestOffer}
          className="w-full bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition mt-6 inline-flex items-center justify-center gap-2 cursor-pointer"
        >
          Trimite cererea cu aceasta estimare
          <span aria-hidden>→</span>
        </button>
      </div>
    );
}

function Row({ label, value }: {label: string, value: number }) {
  return (
    <div className="flex justify-between text-ink-soft">
      <span>{label}</span>
      <span>
        {value} RON
      </span>
    </div>
  )
}