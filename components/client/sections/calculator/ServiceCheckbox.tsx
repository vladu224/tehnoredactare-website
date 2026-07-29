import { serviceOptions } from "@/lib/data/calculator/services-options";
import { SubOptionSlider } from "./SubOptionSlider";

interface ServiceCheckboxProps {
    selectedIds: string[];
    subOptionValues: Record<string, number>;
    onToggle: (id: string) => void;
    onSubOptionChange: (id: string, value: number) => void;
}

export function ServiceCheckbox({ 
    selectedIds,
    subOptionValues,
    onToggle,
    onSubOptionChange,
}: ServiceCheckboxProps) {
    return (
        <div>
          <span className="text-ink-soft text-[11px] tracking-widest uppercase">
            Servicii incluse
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-4">
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

          {serviceOptions
            .filter((s) => selectedIds.includes(s.id) && s.subOptions)
            .map((service) => (
                <div key={service.id} className="border border-ink/25 rounded-lg px-4 py-4 mt-3 bg-paper">
                  <p className="text-ink text-sm font-medium mb-1">
                    {service.label}
                  </p>
                  {service.subOptions!.map((sub) => (
                    <SubOptionSlider
                      key={sub.id}
                      subOption={sub}
                      value={subOptionValues[sub.id] ?? sub.defaultValue}
                      onChange={(value) => onSubOptionChange(sub.id, value)}
                    />
                  ))}
                </div>
            ))}
        </div>
    );
}