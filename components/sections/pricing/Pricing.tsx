import { pricingPlans } from "@/lib/data/pricing/pricingPlans";
import { PlanCard } from "./PlanCard";

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