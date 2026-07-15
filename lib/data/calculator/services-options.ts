import { ServiceOption } from "../../types/calculator/calculator";

export const serviceOptions: ServiceOption[] = [
    {
        id: "calc-tehnoredactare",
        label: "Tehnoredactare interior",
        pricingType: "per-page",
    },
    {
        id: "calc-tehnoredactare-complexa",
        label: "Tehnoredactare complexă (tabele, formule)",
        pricingType: "per-page",
        subOptions: [
            {
                id: "calc-numar-tabele",
                label: "Număr tabele",
                pricePerUnit: 15,
                min: 0,
                max: 50,
                defaultValue: 0,
            },
            {
                id: "calc-numar-formule",
                label: "Număr formule",
                pricePerUnit: 8,
                min: 0,
                max: 100,
                defaultValue: 0,
            },
        ],
    },
    {
        id: "calc-corectura-ortografica",
        label: "Corectură ortografică",
        pricingType: "per-page",
    },
    {
        id: "calc-corectura-stilistica",
        label: "Corectură stilistică aprofundată",
        pricingType: "per-page",
    },
    {
        id: "calc-redactare",
        label: "Redactare / editare de fond",
        pricingType: "per-page",
    },
    {
        id: "calc-design-coperta",
        label: "Design copertă (3 concepte)",
        pricingType: "flat",
    },
    {
        id: "calc-conversie-ebook",
        label: "Conversie eBook (EPUB + MOBI)",
        pricingType: "flat",
    },
    {
        id: "calc-consultanta-isbn",
        label: "Consultanță ISBN + CIP",
        pricingType: "flat",
    },
    {
        id: "calc-verificare-bat",
        label: "Verificare BAT (Bun de Tipar)",
        pricingType: "flat",
    },
    { 
        id: "calc-ilustratii",
        label: "Ilustrații originale",
        pricingType: "per-page",
        subOptions: [
            {
                id: "calc-numar-ilustratii",
                label: "Număr ilustrații",
                pricePerUnit: 70,
                min: 0,
                max: 50,
                defaultValue: 0,
            },
        ],
    },
];

export const PAGE_MIN = 50;
export const PAGE_MAX = 600;
export const URGENT_SURCHARGE = 0.3;