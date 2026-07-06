export interface TestimonialData {
    quote: string;
    name: string;
    role: string;
}

export const testimonials: TestimonialData[] = [
    {
        quote:
            "Am lucrat cu mulți tehnoredactori și prima dată simt că manuscrisul meu a fost tratat cu respect editorial. Coperta a depășit orice așteptare.",
        name: "Andreea M.",
        role: "Autoare, roman de debut",
    },
    {
        quote:
            "Editura noastră a externalizat 12 titluri în ultimul an. Termenele sunt respectate la zi, iar comunicarea e impecabilă.",
        name: "Editura Frunza",
        role: "Editor coordonator",
    },
    {
        quote:
            "Cea mai bună corectură primită în 20 de ani de scris. Atenție la detaliu, observații argumentate, fără ego.",
        name: "Mihai P.",
        role: "Eseist",
    },
]