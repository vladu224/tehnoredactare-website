import { priceListFootnote, priceListItems } from "@/lib/pricing/priceList";

export function PriceList() {
    return (
        <section className="max-w-full mx-auto px-24 pb-24">
          <div className="bg-bg2 border border-ink/25 rounded-md overflow-hidden">
            <div className="bg-paper/60 flex items-center justify-between px-8 py-7 border-b border-ink/25">
              <h3 className="font-display text-2xl text-ink">
                Listă detaliată de prețuri
              </h3>

              <span className="text-ink-soft text-xs tracking-widest uppercase shrink-0">
                Actualizat 2026  
              </span>  
            </div>

            <div>
              {priceListItems.map((item, index) => (
                <div
                  key={item.service}
                  className={`flex items-center justify-between gap-6 px-8 py-4 ${
                    index % 2 === 1 ? "bg-paper/60" : ""
                  } ${
                    index !== priceListItems.length - 1 ? "border-b border-ink/25" : ""
                  }`}    
                >
                  <span className="text-ink">
                    {item.service}
                  </span>

                  <div className="flex items-baseline gap-2 shrink-0">
                    <span className="text-accent font-medium">
                      {item.priceRange}  
                    </span>
                    <span className="text-ink-soft text-sm">
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