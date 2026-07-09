import { processSteps } from "@/lib/processSteps";

export function Process() {
    return (
        <section id="proces" className="bg-ink">
          <div className="max-w-full mx-auto mx-6 px-24 py-30">
            <span className="text-accent text-xs font-medium tracking-widest uppercase">
              Cum lucrăm
            </span>

            <h2 className="font-display text-4xl md:text-5xl text-paper mt-4 max-w-2xl leading-tight">
              Cinci pași limpezi, fără bătaie de cap.
            </h2>

            <p className="text-paper/60 text-lg mt-4 max-w-xl leading-relaxed">
              Avem un proces editorial repetat de peste 120 de ori — îl ajustăm la specificul fiecărui manuscris, dar nu sărim peste etape.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-12 mt-24">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`px-6 py-10 sm:pt-10 ${
                    index !== 0 ? "lg:border-l border-paper/10" : ""
                  } ${
                    index === 0 ? "lg:pl-0" : ""}
                  }`}
                >
                  <p className="font-display text-3xl text-accent">
                    {step.number}  
                  </p>

                  <h3 className="font-display text-xl text-paper mt-4">
                    {step.title}
                  </h3>

                  <p className="text-paper/60 text-sm mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>  
        </section>
    );
}