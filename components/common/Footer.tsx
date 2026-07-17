import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-paper/90 border-t border-paper/10">
      <div className="max-w-full mx-auto px-10 sm:px-24 py-8 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:justify-between text-center sm:text-left gap-10">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl text-paper">
              Atelier Tipar
            </span>
            <p className="text-paper/60 text-sm mt-4 max-w-sm leading-relaxed">
              Atelier editorial independent dedicat autorilor și editurilor
              mici. Tehnoredactare, design copertă, redactare, corectură.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-right">
            <span className="text-accent text-xs font-medium tracking-widest uppercase">
              Contact
            </span>
            <div className="flex flex-col gap-2 mt-4 text-sm items-center sm:items-end text-paper/70">
              <a
                href="mailto:vlad.andone04@gmail.com"
                className="text-center gap-4 hover:text-accent transition-colors w-fit cursor-pointer"
                title="Trimite-ne un email"
              >
                <p>vlad.andone04@gmail.com</p>
              </a>

              <a
                href="tel:+40 751 587 092"
                className="flex items-center gap-2 hover:text-accent transition-colors w-fit cursor-pointer"
                title="Sună-ne"
              >
                <p>+40 751 587 092</p>
              </a>
                           
              <p>L-V · 09:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-paper/10 mt-12 pt-6 flex flex-col sm:flex-row items-center sm:justify-between gap-2 text-xs sm:text-sm text-paper/50">
          <span>&copy; {new Date().getFullYear()} Atelier Tipar. Toate drepturile rezervate.</span>
          <div className="flex flex-center justify-center items-center gap-2">
            <span>Designed &amp; crafted by</span>
            <img 
              src="/va.png"
              alt="Vlad Andone icon" 
              className="h-8 w-8 object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}