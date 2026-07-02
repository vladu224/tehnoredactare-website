// src/components/Footer.tsx

export function Footer() {
  return (
    <footer className="bg-ink text-paper/90">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between text-left">
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
          <div className="text-right">
            <span className="text-accent text-xs font-medium tracking-widest uppercase">
              Contact
            </span>
            <div className="mt-4 space-y-2 text-sm text-paper/70">
              <p>salut@ateliertipar.ro</p>
              <p>+40 723 456 789</p>
              <p>L-V · 09:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-paper/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-sm text-paper/50">
          <span>© 2026 Atelier Tipar. Toate drepturile rezervate.</span>
          <span>Designed &amp; crafted in România.</span>
        </div>
      </div>
    </footer>
  );
}