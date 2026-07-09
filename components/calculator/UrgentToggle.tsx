interface UrgentToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function UrgentToggle({ checked, onChange }: UrgentToggleProps) {
    return (
        <label className="flex items-center justify-between border border-ink/25 rounded-lg px-6 py-5 cursor-pointer bg-paper">
          <div>
            <p>Regim de urgență</p>
            <p>Livrare sub 14 zile · supliment +30%</p>
          </div>

          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="w-5 h-5 rounded border-line text-accent accent-accentfocus:ring-accent/40 cursor-pointer"  
          />
        </label>
    )
}