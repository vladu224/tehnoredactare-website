const stats = [
    { value: "120+", label: "Titluri publicate" },
    { value: "6 ani", label: "Experiență editorială" },
    { value: "4.9/5", label: "Rating clienti" },
];

export function Hero() {
    return (
      <section className="max-w-full mx-auto pt-20 pb-16">
        <span className="text-accent text-xs font-medium tracking-widest uppercase">
          Atelier editorial · Bacău / Online
        </span>

        <h1 className="font-display text-7xl md:text-6xl text-ink leading-[1.1] mt-6 max-w-3xl">
          Cărți tipărite <span className="text-accent">cu grijă</span>,
          <br />
          de la manuscris <em className="italic">la raft</em>.  
        </h1>

        <p className="text-ink-soft text-lg mt-6 max-w-xl leading-relaxed">
          Tehnoredactare, design copertă, redactare și corectură pentru autori independenți și edituri mici. Lucrăm artizanal, cu respect pentru text și pentru cititor.
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-8">
            <a
              href="#preturi"
              className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3.5 rounded-sm transition inline-flex items-center gap-2"
            >
              Vezi prețurile
            </a>
        </div>

        {/* Stats */}
        <div className="max-w-3xl grid grid-cols-2 sm:grid-cols-3 gap-8 text-center border-t mt-20 pt-12">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl text-ink">
                {s.value}
              </p>
              <p className="text-ink-soft text-xs tracking-wide uppercase mt-1">
                {s.label}
              </p>  
            </div>
          ))}
        </div>
      </section>  
    );
}