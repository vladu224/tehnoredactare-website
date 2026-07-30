import { Portofolio } from "@/components/admin/pages/portofolio/Portofolio";

export default function PortofolioAdmin() {
    return (
        <div>
          <h1 className="font-display text-2xl texxt-ink mb-1">
            Lucrări recente
          </h1>  
          <p className="text-ink-soft text-sm mb-8">
            Titlurile afișate în secțiunea de portofoliu a site-ului.
          </p>
          <Portofolio />
        </div>
    )
}