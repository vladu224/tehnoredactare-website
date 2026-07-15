const stats = [
    { value: "120+", label: "Titluri publicate" },
    { value: `${new Date().getFullYear() - 2011} ani`, label: "Experiență editorială" },
    { value: "4.9/5", label: "Rating clienți" },
];

export function Hero() {
    return (
      <section className="max-w-full mx-auto px-6 sm:px-24 py-10 sm:py-20">
        <span className="text-accent text-xs font-medium tracking-widest uppercase">
          Atelier editorial · Bacău / Online
        </span>

        <h1 className="font-display text-3xl sm:text-7xl text-ink leading-[1.15] sm:leading-[1.1] mt-8 sm:mt-14 max-w-3xl">
          Cărți tipărite <span className="text-accent">cu grijă</span>,
          <br />
          de la manuscris <em className="italic">la raft</em>.  
        </h1>

        <p className="text-ink-soft text-sm md:text-xl mt-6 max-w-xl leading-relaxed">
          Tehnoredactare, design copertă, redactare și corectură pentru autori independenți și edituri mici. Lucrăm artizanal, cu respect pentru text și pentru cititor.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-6 mt-10 sm:mt-16 mb-10">
            <a
              href="#preturi"
              className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3.5 rounded-sm transition inline-flex items-center justify-center gap-2"
            >
              Vezi prețurile
              <span aria-hidden>→</span>
            </a>
            <a
              href="#servicii"
              className="text-ink font-medium inline-flex px-6 py-3.5 items-center justify-center gap-2 hover:text-accent hover:border-b hover:border-accent transition-colors"
            >
              Explorează serviciile
              <span aria-hidden>↗</span>
            </a>
        </div>

        {/* Stats */}
        <div className="max-w-3xl grid grid-cols-3 gap-3 sm:gap-8 text-center border-t mt-12 sm:mt-24 pt-6 sm:pt-12">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-xl sm:text-3xl text-ink">
                {s.value}
              </p>
              <p className="text-ink-soft text-[10px] sm:text-xs tracking-wide uppercase mt-1">
                {s.label}
              </p>  
            </div>
          ))}
        </div>
      </section>  
    );
}