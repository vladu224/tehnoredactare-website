import { testimonials, TestimonialData } from "@/lib/testimonials";

export function Testimonials() {
    return (
        <section className="bg-bg2">
          <div className="max-w-full mx-auto mx-6 px-24 py-40">
            <span className="text-accent text-xs font-medium tracking-widest uppercase">
              Recenzii autori  
            </span>

            <h2 className="font-display text-4xl md:text-5xl text-ink mt-4">
              Ce spun cei cu care am lucrat.  
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} testimonial={t} />
              ))}  
            </div>
          </div>
        </section>
    );
}
function TestimonialCard({ testimonial }: {testimonial: TestimonialData }) {
    return (
        <div className="bg-card border border-line border-ink/25 rounded-2xl p-8 flex flex-col">
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
