import { portofolioItems } from "@/lib/data/portofolio/portofolio"
import { PortofolioCard } from "./PortofolioCard"

export function Portofolio() {
    return (
        <section id="portofoliu" className="max-w-full mx-auto mx-6 px-24 py-32">
          <span className="text-accent text-xs font-medium tracking-widest uppercase">
            Lucrări recente
          </span>

          <h2 className="font-display text-4xl md:text-5xl text-ink mt-4">
            Cărți care au trecut prin atelier.
          </h2>

          <p className="text-ink-soft text-lg mt-4 max-w-2xl leading-relaxed">
            Un mic ocean de titluri din zona literară, non-ficțiune, business și poezie.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-16">
            {portofolioItems.map((item, index) => (
              <PortofolioCard key={item.title} item={item} index={index}/>  
            ))}
          </div>
        </section>
    )
}

