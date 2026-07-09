import {
  BookOpen,
  Palette,
  PenLine,
  CheckCheck,
  Sparkles,
  FileText,
  Star,
  type LucideIcon,
} from "lucide-react";

export interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    features?: string[]
}

export const mainServices: Service[] = [
    {
        icon: BookOpen,
        title: "Tehnoredactare interior",
        description: "Așezare în pagină profesională pentru carte tipărită — paginație, oglindă text, ierarhie tipografică, fonturi cu licență comercială. Lucrăm în InDesign și livrăm PDF print-ready pentru orice tipografie.",
        features: ["Format A5/B5/A4 sau custom", "Cuprins automat și index", "Fișiere print-ready (CMYK)"],
    },
    {
        icon: Palette,
        title: "Design copertă",
        description:
        "Coperți front-back-cotor adaptate genului și publicului. Concept original, mockup 3D, fișier final pentru tipar.",
        features: ["3 variante de concept", "Mockup 3D realist", "Versiune ebook + tipar"],
    },
    {
        icon: PenLine,
        title: "Redactare & editare",
        description:
        "Editare de structură și stil, fluență a discursului, coerență internă, sugestii de revizie pentru autor.",
        features: ["Editare de fond", "Stil și ton", "Track changes Word"],
    },
    {
        icon: CheckCheck,
        title: "Corectură",
        description:
        "Corectură ortografică, gramaticală, de punctuație și stilistică conform normelor DOOM3. Două pase și verificare BAT înainte de tipar.",
        features: ["DOOM3 actualizat", "Punctuație și acord", "Verificare BAT (Bun de Tipar)"],
    },    
];

export const extraServices: Service[] = [
    {
    icon: Sparkles,
    title: "Conversie eBook",
    description: "Format EPUB3 și MOBI validat pentru Kindle, Google Play Books și Storytel.",
    },
    {
        icon: FileText,
        title: "Consultanță ISBN & depozit legal",
        description: "Obținere ISBN prin Biblioteca Națională, CIP și depunere depozit legal.",
    },
    {
        icon: Star,
        title: "Ilustrații originale",
        description: "Ilustrații interior, vignete și hărți tematice — desenate manual sau digital.",
    },
]