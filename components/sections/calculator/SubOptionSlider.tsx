import { ServiceSubOption } from "@/lib/types/calculator/calculator";

interface SubOptionSliderProps {
    subOption: ServiceSubOption;
    value: number;
    onChange: (value: number) => void;
}

export function SubOptionSlider({ subOption, value, onChange }: SubOptionSliderProps) {
    return (
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-ink-soft text-xs tracking-widest uppercase">
              {subOption.label}
            </span>
            <span className="font-display text-xl text-ink">
              {value}
            </span>
          </div>

          <input
            type="range"
            min={subOption.min}
            max={subOption.max}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full mt-2 accent-accent h-1.5 rounded-full cursor-pointer"
          />
        </div>
    );
}