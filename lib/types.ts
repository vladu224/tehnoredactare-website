export type Format = "A4" | "A5";
export type Deadline = "standard" | "urgent";

export interface BookDetails {
    pageCount: number;
    format: Format;
    hasImages: boolean;
    hasTables: boolean;
    hasFootnotes: boolean;
    deadline: Deadline;
}

export interface PriceBreakdownLine {
    label: string;
    amount: number;
}

export interface FinalPrice {
    basePrice: number;
    lines: PriceBreakdownLine[];
    total: number;
}

export type ServiceType =
    | "tehnoredactare"
    | "design-coperta"
    | "redactare"
    | "corectura"

export interface ContactInfo {
    name: string;
    email: string;
    service: ServiceType;
    message: string;
}