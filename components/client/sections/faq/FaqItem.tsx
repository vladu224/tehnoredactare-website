import { faqs } from "@/lib/data/faqs/faqs";

export function FaqItem({
    faq,
    isOpen,
    onToggle,
}: {
    faq: (typeof faqs)[number];
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border-b border-ink/25">
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-between gap-6 py-5 sm:py-7 text-left group cursor-pointer"
          >
            <span
              className={`font-display text-lg sm:text-xl transition ${
                isOpen ? "text-accent" : "text-ink group-hover:text-accent"
              }`}
            >
              {faq.question} 
            </span>
            <span
              className={`shrink-0 text-accent text-xl transition-transform duration-200 ${
                isOpen ? "rotate-45" : ""
              }`}
              aria-hidden
            >
              +
            </span>
          </button>

          <div
            className={`grid transition-all duration-200 ease-out ${
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-ink-soft text-sm sm:text-base leading-relaxed pb-7 max-w-2xl">
                {faq.answer}  
              </p>  
            </div>
          </div>
        </div>
    )
}