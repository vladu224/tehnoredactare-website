export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export const processSteps: ProcessStep[] = [
    {
        number: "01",
        title: "Brief & estimare",
        description:
            "Ne trimiți manuscrisul, discutăm viziunea și genul. Primești o ofertă fermă în 48 de ore.",
    },
    {
        number: "02",
        title: "Acord & avans",
        description:
            "Semnăm un contract scurt, plătești 40% avans și intrăm în lucru cu termene exacte.",
    },
    {
        number: "03",
        title: "Lucru iterativ",
        description:
            "Corectură, machetare și design în paralel, cu update-uri la fiecare etapă majoră.",
    },
    {
        number: "04",
        title: "Revizii & BAT",
        description:
            "Verifici, ne dai feedback structurat, validăm Bunul de Tipar împreună.",
    },
    {
        number: "05",
        title: "Livrare & arhivă",
        description:
            "Primești toate fișierele sursă, PDF-uri print-ready și backup arhivat 5 ani.",
    },    
];