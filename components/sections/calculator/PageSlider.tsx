import { PAGE_MAX, PAGE_MIN } from "@/lib/data/calculator/services-options";

interface PageSliderProps {
    value: number;
    onChange: (value: number) => void;
}

export function PageSlider({ value, onChange }: PageSliderProps) {
    return (
        <div>
          <div className="flex items-center justify-between">
            <span className="text-ink-soft text-[11px] sm:text-xs tracking-widest uppercase">
              Număr de pagini
            </span>
            <span className="font-display text-xl sm:text-2xl text-ink">
              {value}  
            </span>
          </div>

          <input
            type="range"
            min={PAGE_MIN}
            max={PAGE_MAX}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full accent-accent mt-4 text-accent h-2 rounded-full cursor-pointer"
          />

          <div className="flex justify-between text-ink-soft text-xs tracking-wide uppercase mt-2">
            <span>{PAGE_MIN} pag</span>
            <span>{PAGE_MAX} pag</span>
          </div>
        </div>
    );
}