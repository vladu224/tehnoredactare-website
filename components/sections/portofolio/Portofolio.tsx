import { portofolioItems } from "@/lib/data/portofolio/portofolio"
import { PortofolioCard } from "./PortofolioCard"

export function Portofolio() {
    return (
        <section id="portofoliu" className="max-w-full mx-auto px-6 sm:px-24 py-8 sm:py-24">
          <span className="text-accent text-xs font-medium tracking-widest uppercase">
            Lucrări recente
          </span>

          <h2 className="font-display text-2xl sm:text-5xl text-ink mt-4 sm:mt-12">
            Cărți care au trecut prin atelier.
          </h2>

          <p className="text-ink-soft text-sm sm:text-lg mt-4 max-w-2xl leading-relaxed">
            Un mic ocean de titluri din zona literară, non-ficțiune, business și poezie.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 mt-12 sm:mt-16">
            {portofolioItems.map((item, index) => (
              <PortofolioCard key={item.title} item={item} index={index}/>  
            ))}
          </div>
        </section>
    )
}

