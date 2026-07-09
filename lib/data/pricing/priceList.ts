export interface PriceListItem {
    service: string;
    priceRange: string;
    unit: string;
}

export const priceListItems: PriceListItem[] = [
    {
        service: "Tehnoredactare interior carte (A5/B5)",
        priceRange: "5 - 9 lei",
        unit: "/ pagină",
    },
    {
        service: "Tehnoredactare cu elemente complexe (tabele, formule)",
        priceRange: "9 - 14 lei",
        unit: "/ pagină",
    },
    {
        service: "Design copertă carte (3 concepte)",
        priceRange: "650 - 1.400 lei",
        unit: "/ proiect"
    },
    {
        service: "Refresh copertă existentă",
        priceRange: "250 - 450 lei",
        unit: "/ proiect"
    },
    {
        service: "Corectură ortografică & gramaticală",
        priceRange: "3,5 - 6 lei",
        unit: "/ pagină"
    },
    {
        service: "Corectură stilistică aprofundată",
        priceRange: "6 - 10 lei",
        unit: "/ pagină"
    },
    {
        service: "Redactare / editare de fond",
        priceRange: "8 - 15 lei",
        unit: "/ pagină"
    },
    {
        service: "Conversie EPUB / MOBI",
        priceRange: "350 - 600 lei",
        unit: "/ titlu"
    },
    {
        service: "Ilustrație originală interior",
        priceRange: "180 - 450 lei",
        unit: "/ ilustrație"
    },
    {
        service: "Consultanță ISBN + CIP + depozit legal",
        priceRange: "220 lei",
        unit: "/ titlu"
    },
    {
        service: "Verificare BAT (Bun de Tipar)",
        priceRange: "150 lei",
        unit: "/ titlu"
    },
    {
        service: "Urgență (livrare sub 7 zile)",
        priceRange: "+30%",
        unit: "din tariful de bază"
    },
]

export const priceListFootnote = 
    "* O pagină standard = 1.800 semne cu spații. Tarifele includ consultanță inițială și 1 rundă de revizii. Reducere 10% pentru cărți noi de autor la debut.";