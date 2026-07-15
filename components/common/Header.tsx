"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
    { label: "Servicii", href: "#servicii" },
    { label: "Prețuri", href: "#preturi" },
    { label: "Calculator", href: "#calculator" },
    { label: "Proces", href: "#proces" },
    { label: "Portofoliu", href: "#portofoliu" },
    { label: "Recenzii", href: "#recenzii" },
    { label: "Întrebări", href: "#intrebari" },
    { label: "Contact", href: "#contact" },
];

export function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleScroll = (e: React.FormEvent, targetId: string) => {
      e.preventDefault(); 
      
      if (targetId === "top") {
        const isMobile = window.innerWidth < 768;

        window.scrollTo({ 
          top: 0,
          behavior: isMobile ? "auto" : "smooth" });

        window.history.pushState(null, "", window.location.pathname);
        closeMenu();
        return;
      }
    };

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
      <header className="sticky top-0 z-50 w-full bg-white/40 backdrop-blur-sm border-b border-ink/25">
        <div className="max-w-full mx-auto px-8 lg:px-24 py-5 flex items-center justify-between">
          <div className="flex items-baseline text-lg lg:text:xl">
            <a
              href="#"
              onClick={(e) => handleScroll(e, "top")}
            >
              Atelier Tipar  
            </a> 
          </div>

          <nav className="hidden lg:flex items-center gap-10">
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

          <div>
            <a 
              href="#contact"
              className="hidden lg:inline-flex bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2.5 rounded-md items-center gap-1.5"
            >
              Cere oferta
            </a>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="lg:hidden pt-1 text-ink cursor-pointer"
              aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden border-t border-ink/25 bg-white/40 backdrop-blur-sm px-6 sm:px-12 py-4">
            <div className="grid grid-cols-2">
              {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="text-ink text-base py-3.5 border-b border-ink/10 last:border-b-0 hover:text-accent transition flex items-center min-h-[44px]"
              >
                {l.label}
              </Link>
            ))}
            </div>
            
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex justify-center bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-3.5 rounded-md transition mt-4 min-h-[44px]"
            >
              Cere oferta
            </a>
          </nav>
        )}
      </header>  
    );
}