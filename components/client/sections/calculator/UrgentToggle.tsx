interface UrgentToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function UrgentToggle({ checked, onChange }: UrgentToggleProps) {
    return (
        <label className="flex items-center justify-between border border-ink/25 rounded-lg px-5 py-5 cursor-pointer bg-paper">
          <div>
            <p className="text-sm sm:text-base">Regim de urgență</p>
            <p className="text-sm sm:text-base">Livrare sub 14 zile · supliment +30%</p>
          </div>

          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="w-5 h-5 rounded border-line text-accent accent-accent focus:ring-accent/40 cursor-pointer"  
          />
        </label>
    )
}