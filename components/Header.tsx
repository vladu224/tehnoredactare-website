"use client";

import Link from "next/link";

const links = [
    { label: "Servicii", href: "#servicii" },
    { label: "Prețuri", href: "#preturi" },
    { label: "Calculator", href: "#calculator" },
    { label: "Proces", href: "#proces" },
    { label: "Portofoliu", href: "#portofoliu" },
    { label: "Recenzii", href: "#recenzii" },
    { label: "Întrebari", href: "#intrebari" },
    { label: "Contact", href: "#contact" },
];

export function Header() {
    const handleScroll = (e: React.FormEvent, targetId: string) => {
      e.preventDefault(); 
      
      if (targetId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Opțional: curăță hash-ul din URL fără a reîncărca pagina
        window.history.pushState(null, "", window.location.pathname);
        return;
      }
    };

    return (
      <header className="sticky top-0 z-50 w-full bg-white/40 backdrop-blur-sm border-b border-ink/25">
        <div className="max-w-full mx-auto px-24 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-2 text-xl">
            <a
              href="#"
              onClick={(e) => handleScroll(e, "top")}
            >
              Atelier Tipar  
            </a> 
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ink hover:text-accent hover:border-b transition"
              >
                {l.label}
              </Link>
            ))}  
          </nav>  

          <a 
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2.5 rounded-lg transition inline-flex items-center gap-1.5"
          >
            Cere oferta
          </a>
        </div>
      </header>  
    );
}