import { portofolioItems } from "@/lib/portofolio"

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

function PortofolioCard({
    item,
    index,
}: {
    item: (typeof portofolioItems)[number];
    index: number;
}) {
    return (
        <div>
          <div
            className="aspect-[3/4] rounded-lg p-6 flex flex-col "
            style={{
              background:
                "linear-gradient(160deg, #EFE9DA 0%, #F7F2E6 55%, #EDE6D6 100%)"  
            }}
          >
            <div className="border-t border-accent/40 mt-3" />
            <h3 className="font-display text-2xl text-ink text-center pt-70">
              {item.title}
            </h3>
            <div className="pt-80">
              <div className="flex justify-between">
                <span className="text-ink-soft text-xs tracking-widest uppercase">
                  {item.category}  
                </span>
                <span className="text-ink-soft text-xs tracking-widest uppercase">
                  {item.year}  
                </span>
              </div>
              
              <div className="border-t border-accent/40 mt-3" />
            </div>
          </div>
        </div>
    );
}