import { extraServices, mainServices, type Service } from "@/lib/services";

export function Services() {
    return (
      <section id="servicii" className="max-w-full bg-bg2 mx-auto mx-6 px-24 py-24">
        <span className="text-accent text-xs font-medium tracking-widest uppercase">
          Servicii editoriale  
        </span>

        <h2 className="font-display text-4xl md:text-5xl text-ink mt-4">
          Tot ce ține o carte împreună.
        </h2>

        <p className="text-ink-soft text-lg mt-4 max-w-2xl leading-relaxed">
        De la primul cuvânt al manuscrisului până la coperta lipită pe raft,
        ne ocupăm de fiecare strat al cărții tale.
      </p>

      {/* Servicii principale — grid 2x2, cu listă de features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {mainServices.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      {/* Servicii adiționale — rând de 3, fără listă */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {extraServices.map((service) => (
          <ServiceCard key={service.title} service={service} compact />
        ))}
      </div>
      </section>
    );
}

function ServiceCard({
    service,
    compact = false,
}: {
    service: Service;
    compact?: boolean;
}) {
    const Icon = service.icon;

    return (
      <div className="bg-card border border-line border-ink/25 rounded-md p-8">
        <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />

        <h3 className="font-display text-2xl text-ink mt-5">
          {service.title}
        </h3>

        <p className="text-ink-soft text-sm mt-3 leading-relaxed">
          {service.description}
        </p>

        {!compact && service.features && (
          <ul className="space-y-2.5 mt-6">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                <span className="text-accent mt-0.5" aria-hidden>
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>  
    );
}