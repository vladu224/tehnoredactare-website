import { testimonials, TestimonialData } from "@/lib/data/testimonials/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
    return (
        <section id="recenzii" className="bg-bg2">
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
