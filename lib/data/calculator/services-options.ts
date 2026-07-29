import { ServiceOption } from "../../types/calculator/calculator";

export const serviceOptions: ServiceOption[] = [
    {
        id: "calc-tehnoredactare",
        pricingType: "per-page",
    },
    {
        id: "calc-tehnoredactare-complexa",
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
        pricingType: "per-page",
    },
    {
        id: "calc-corectura-stilistica",
        pricingType: "per-page",
    },
    {
        id: "calc-redactare",
        pricingType: "per-page",
    },
    {
        id: "calc-design-coperta",
        pricingType: "flat",
    },
    {
        id: "calc-conversie-ebook",
        pricingType: "flat",
    },
    {
        id: "calc-consultanta-isbn",
        pricingType: "flat",
    },
    {
        id: "calc-verificare-bat",
        pricingType: "flat",
    },
    { 
        id: "calc-ilustratii",
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