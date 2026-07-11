import { processSteps } from "@/lib/data/process/processSteps";

export function Process() {
    return (
        <section id="proces" className="bg-ink">
          <div className="max-w-full mx-auto px-6 sm:px-24 py-8 sm:py-24">
            <span className="text-accent text-xs font-medium tracking-widest uppercase">
              Cum lucrăm
            </span>

            <h2 className="font-display text-2xl md:text-5xl text-paper mt-4 sm:mt-12 max-w-2xl leading-tight">
              Cinci pași limpezi, fără bătaie de cap.
            </h2>

            <p className="text-paper/60 text-sm sm:text-lg mt-4 max-w-xl leading-relaxed">
              Avem un proces editorial repetat de peste 120 de ori — îl ajustăm la specificul fiecărui manuscris, dar nu sărim peste etape.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 sm:px-12 mt-10 sm:mt-24">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`sm:px-6 py-5 sm:py-10 sm:pt-10 ${
                    index !== 0 ? "lg:border-l border-paper/10" : ""
                  } ${
                    index === 0 ? "lg:pl-0" : ""}
                  }`}
                >
                  <p className="font-display text-2xl sm:text-3xl text-accent">
                    {step.number}  
                  </p>

                  <h3 className="font-display text-lg sm:text-xl text-paper mt-3 sm:mt-4">
                    {step.title}
                  </h3>

                  <p className="text-paper/60 text-sm mt-2 sm:mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>  
        </section>
    );
}