import { CheckoutPanelData } from "@/lib/types/calculator/calculator";

interface EstimationPanelProps {
    estimation: CheckoutPanelData;
    onRequestOffer: () => void;
}

export function EstimationPanel({ estimation, onRequestOffer}: EstimationPanelProps) {
    return (
        <div className="bg-ink p-12 gap-2 h-full flex flex-col">
          <span className="text-accent text-xs font-medium tracking-widest uppercase">
            Estimare
          </span>
          
          <div className="border-b border-paper/40 flex items-baseline gap-2 mt-3 pb-6">
            <span className="font-display text-5xl text-paper">
              {estimation.total.toLocaleString("ro-RO")}  
            </span>
            <span className="font-display text-xl text-paper/60">lei</span>
          </div>

          {estimation.lines.length < 1 && (
            <p className="text-paper/40 text-sm mt-4 leading-relaxed">
              Bifează cel putin un serviciu pentru estimare.
            </p>
          )}

          {estimation.lines.length > 0 && (
            <div className="space-y-5 mt-4 mb-2 flex-1 max-h-[30vh] overflow-y-auto">
              {estimation.lines.map((line) => (
                <div key={line.id} className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-paper text-sm">{line.label}</p>
                    <p className="text-paper/50 text-xs mt-0.5">{line.detail}</p>  
                  </div>

                  <span className="text-paper text-sm pr-1">
                    {line.amount.toLocaleString("ro-RO")} lei
                  </span>
                </div>
              ))}

              {estimation.urgentSurcharge > 0 && (
                <div className="flex justify-between items-start gap-4 border-t border-paper/10 pt-5">
                  <p className="text-accent text-sm">Supliment urgență (+30%)</p>  
                  <span className="text-accent text-sm shrink-0">
                    {estimation.urgentSurcharge.toLocaleString("ro-RO")} lei
                  </span>
                </div>
              )}
            </div>
          )}
          
          <button
            onClick={onRequestOffer}
            className="w-full bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3.5 rounded-lg mt-auto cursor-pointer"
          >
            Trimite cererea cu această estimare
            <span aria-hidden>→</span>
          </button>

          <p className="text-paper/40 text-xs mt-4 leading-relaxed">
            * Estimarea este orientativă. Oferta fermă vine după ce analizăm manuscrisul (gratuit, 48h).
          </p>
        </div>
    )
}