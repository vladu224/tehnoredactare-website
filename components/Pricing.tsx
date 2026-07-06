import { pricingPlans } from "@/lib/pricingPlans";

export function Pricing() {
    return (
      <section id="preturi" className="max-w-full mx-auto mx-6 px-24 py-24">
        <span className="text-accent text-xs font-medium tracking-widest uppercase">
          Pachete &amp; tarife
        </span>

        <h2 className="font-display text-4xl md:text-5xl text-ink mt-4">
          Prețuri transparente, fără surprize.
        </h2>

        <p className="text-ink-soft text-lg mt-4 max-w-2xl leading-relaxed">
          Trei pachete principale pentru autori și edituri, plus o listă detaliată per serviciu. Toate tarifele sunt în lei, fără TVA (PFA neplătitor).  
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 items-start">
          {pricingPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>  
    );
}

function PlanCard({ plan }: { plan: (typeof pricingPlans)[number] }) {
    const isFeatured = plan.featured;

    return (
      <div
        className={`relative rounded-2xl p-8 flex flex-col h-full ${
          isFeatured
            ? "bg-card border-2 border-accent shadow-lg lg:-my-4 lg:py-12"
            : "bg-card border border-line"
        }`}
      >
        {isFeatured && (
          <span className="absolute -top-3 left-8 bg-accent text-white text-xs font-medium tracking-widest uppercase px-3 py-1 rounded">
            Recomandat
          </span>  
        )}

        <span className="text-ink-soft text-xs tracking-widest uppercase">
          {plan.description}  
        </span>

        <h3 className="font-display text-3xl text-ink mt-3">
          {plan.name}
        </h3>

        <div className="mt-6">
          <p className="font-display text-4xl text-ink">
            {plan.priceLabel}
          </p>
          <p className="text-ink-soft text-sm mt-1">
            {plan.priceUnit}
          </p>  
        </div>

        <ul className="space-y-3 mt-8 border-t border-line pt-6 flex-1">
          {plan.features.map((f) => (
            <li key={f}>
              <span>✓</span>
              <span>{f}</span>  
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`mt-8 text-center font-medium px-6 py-3 rounded-lg transition inline-flex items-center justify-center gap-2 ${
            isFeatured
              ? "bg-accent hover:bg-accent-hover text-white"
              : "border border-line text-ink hover:border-accent hover:text-accent"
          }`}
        >
          {plan.ctaLabel}
          <span aria-hidden>→</span>
        </a>
      </div>  
    )
}