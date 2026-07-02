import Link from "next/link";

const links = [
    { label: "Prețuri", href: "#preturi" },
    { label: "Calculator", href: "#calculator" },
    { label: "Proces", href: "#proces" },
    { label: "Portofoliu", href: "#portofoliu" },
    { label: "Întrebari", href: "#intrebari" },
    { label: "Contact", href: "#contact" },
];

export function Header() {
    return (
      <header className="border-b border-ink">
        <div className="max-w-full mx-auto px-24 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-2 text-xl">
            <span>Atelier Tipar</span>  
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ink hover:text-accent transition"
              >
                {l.label}
              </Link>
            ))}  
          </nav>  

          <a 
            href="#calculator"
            className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2.5 rounded-lg transition inline-flex items-center gap-1.5"
          >
            Cere oferta
          </a>
        </div>
      </header>  
    );
}