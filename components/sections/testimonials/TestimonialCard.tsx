import { TestimonialData } from "@/lib/testimonials";

export function TestimonialCard({ testimonial }: {testimonial: TestimonialData }) {
    return (
        <div className="bg-card border border-line border-ink/25 rounded-md p-8 flex flex-col">
          <span className="text-accent text-4xl font-display leading-none" aria-hidden>
            "  
          </span>

          <p className="font-display text-lg text-ink-soft mt-4 leading-relaxed flex-1">
            {testimonial.quote}
          </p>

          <div className="border-t boredr-line mt-6 pt-5">
            <p className="text-ink font-medium text-sm">
              {testimonial.name}  
            </p>
            <p className="text-ink-soft text-xs tracking-wide uppercase mt-0.5">
              {testimonial.role}  
            </p>
          </div>
        </div>
    )
}