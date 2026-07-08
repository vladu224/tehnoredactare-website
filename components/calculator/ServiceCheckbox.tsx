import { serviceOptions } from "@/lib/calculator/services-pricing";

interface ServiceCheckboxProps {
    selectedIds: string[];
    onToggle: (id: string) => void;
}

export function ServiceCheckbox({ selectedIds, onToggle }: ServiceCheckboxProps) {
    return (
        <div>
          <span className="text-ink-soft text-xs tracking-widest uppercase">
            Servicii incluse
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {serviceOptions.map((service) => {
                const isSelected = selectedIds.includes(service.id);
                return (
                    <label
                      key={service.id}
                      className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition ${
                        isSelected
                          ? "border-accent accent-accent bg-accent/5"
                          : "border-ink/25 bg-paper hover:border-ink"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => onToggle(service.id)}
                        className="w-4 h-4 rounded border-line text-accent focus-ring-accent/40"
                      />
                      <span className="text-sm text-ink">
                        {service.label}
                      </span>
                    </label>
                );
            })}
          </div>
        </div>
    )
}