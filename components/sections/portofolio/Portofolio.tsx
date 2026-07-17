import { PortofolioItem } from "@/lib/types/portofolio/portofolio";
import { PortofolioCard } from "./PortofolioCard"
import { getPortofolioItems } from "@/lib/business/portofolio/portofolioClient"
import { useEffect, useState } from "react";

export function Portofolio() {
    const [items, setItems] = useState<PortofolioItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getPortofolioItems();
                setItems(data);
                setLoading(false);
            } catch (error) {
                console.error("Eroare neașteptată la încărcare:", error);
            }
        }

        loadData();
    }, []);

    if (loading) {
        return (
            <div className="max-w-full mx-auto px-6 py-24 text-center text-ink-soft">
              Se încarcă portofoliul...
            </div>
        );
    }

    if (items.length === 0) return null;

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

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-10 sm:gap-12 mt-12 sm:mt-16">
            {items.map((item, index) => (
              <PortofolioCard key={item.id} item={item} index={index} />  
            ))}
          </div>
        </section>
    );
}

