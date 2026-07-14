export interface PricingPlanConfig {
  id: string;
  description: string;
  name: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
}

export const pricingPlans: PricingPlanConfig[] = [
  {
    id: "plan-esential",
    description: "Pentru autori la debut",
    name: "Esențial",
    features: [
      "Tehnoredactare A5 până la 200 pagini",
      "Copertă simplă (1 variantă)",
      "Corectură ortografică",
      "PDF print-ready",
      "1 rundă de revizii",
    ],
    ctaLabel: "Cere ofertă",
  },
  {
    id: "plan-atelier",
    description: "Cel mai ales pachet",
    name: "Atelier",
    features: [
      "Tehnoredactare premium până la 350 pagini",
      "Copertă cu 3 concepte + mockup 3D",
      "Corectură DOOM3 (2 pase)",
      "Editare stilistică ușoară",
      "Conversie EPUB inclusă",
      "3 runde de revizii",
    ],
    ctaLabel: "Începem azi",
    featured: true,
  },
  {
    id: "plan-manuscris",
    description: "Pentru edituri & proiecte ample",
    name: "Manuscris",
    features: [
      "Volume peste 350 pagini sau serii",
      "Design copertă cu ilustrație originală",
      "Editare de fond + corectură integrală",
      "Conversie EPUB + MOBI + audio-ready",
      "Consultanță ISBN, CIP, depozit legal",
      "Revizii nelimitate până la BAT",
    ],
    ctaLabel: "Discutăm proiectul",
  },
]