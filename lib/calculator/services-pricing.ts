import { ServiceOption } from "./types";

export const serviceOptions: ServiceOption[] = [
    { id: "tehnoredactare", label: "Tehnoredactare interior", pricingType: "per-page", pricePerPage: 7 },
    { id: "tehnoredactare-complexa", label: "Tehnoredactare complexă (tabele, formule)", pricingType: "per-page", pricePerPage: 9.5 },
    { id: "corectura-ortografica", label: "Corectură ortografică", pricingType: "per-page", pricePerPage: 4.75 },
    { id: "corectura-stilistica", label: "Corectură stilistică aprofundată", pricingType: "per-page", pricePerPage: 6.5 },
    { id: "redactare", label: "Redactare / editare de fond", pricingType: "per-page", pricePerPage: 8 },
    { id: "design-coperta", label: "Design copertă (3 concepte)", pricingType: "flat", flatPrice: 1000 },
    { id: "conversie-ebook", label: "Conversie eBook (EPUB + MOBI)", pricingType: "flat", flatPrice: 350 },
    { id: "consultanta-isbn", label: "Consultanță ISBN + CIP", pricingType: "flat", flatPrice: 250 },
    { id: "verificare-bat", label: "Verificare BAT (Bun de Tipar)", pricingType: "flat", flatPrice: 200 },
    { id: "ilustratii", label: "Ilustrații originale", pricingType: "flat", flatPrice: 1500 },
];

export const PAGE_MIN = 50;
export const PAGE_MAX = 600;
export const URGENT_SURCHARGE = 0.3;