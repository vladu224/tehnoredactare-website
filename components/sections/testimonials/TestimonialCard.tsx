import { TestimonialData } from "@/lib/data/testimonials/testimonials";

export function TestimonialCard({ testimonial }: {testimonial: TestimonialData }) {
    return (
        <div className="bg-card border border-line border-ink/25 rounded-md p-4 sm:p-8 flex flex-col">
          <span className="text-accent text-3xl sm:text-4xl font-display leading-none" aria-hidden>
            "  
          </span>

          <p className="font-display text-base sm:text-lg text-ink-soft mt-1 sm:mt-4 leading-relaxed flex-1">
            {testimonial.quote}
          </p>

          <div className="border-t border-ink/25 mt-6 pt-5">
            <p className="text-ink font-medium text-xs sm:text-sm">
              {testimonial.name}  
            </p>
            <p className="text-ink-soft text-[10px] sm:text-xs tracking-wide uppercase mt-0.5">
              {testimonial.role}  
            </p>
          </div>
        </div>
    )
}