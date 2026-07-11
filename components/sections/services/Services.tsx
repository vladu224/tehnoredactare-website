import { extraServices, mainServices, type Service } from "@/lib/data/services/services";
import { ServiceCard } from "./ServiceCard";

export function Services() {
    return (
      <section id="servicii" className="max-w-full bg-bg2 mx-auto px-6 sm:px-24 py-8 sm:py-24">
        <span className="text-accent text-xs font-medium tracking-widest uppercase">
          Servicii editoriale  
        </span>

        <h2 className="font-display text-2xl md:text-5xl text-ink mt-4 sm:mt-12">
          Tot ce ține o carte împreună.
        </h2>

        <p className="text-ink-soft text-sm sm:text-lg mt-4 max-w-2xl leading-relaxed">
        De la primul cuvânt al manuscrisului până la coperta lipită pe raft,
        ne ocupăm de fiecare strat al cărții tale.
      </p>

      {/* Servicii principale — grid 2x2, cu listă de features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-10 sm:mt-16">
        {mainServices.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      {/* Servicii adiționale — rând de 3, fără listă */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
        {extraServices.map((service) => (
          <ServiceCard key={service.title} service={service} compact />
        ))}
      </div>
      </section>
    );
}