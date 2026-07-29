import { Service } from "@/lib/data/services/services";

export function ServiceCard({
    service,
    compact = false,
}: {
    service: Service;
    compact?: boolean;
}) {
    const Icon = service.icon;

    return (
      <div className="bg-card border border-ink/25 rounded-md p-5 sm:p-8">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" strokeWidth={1.5} />

        <h3 className="font-display text-xl sm:text-2xl text-ink mt-3 sm:mt-5">
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