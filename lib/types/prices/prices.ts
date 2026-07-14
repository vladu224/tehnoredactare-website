export interface PriceItem {
    id: string;
    category: "pricelist" | "plan" | "service";
    label: string;
    price_min: number;
    price_max: number | null;
    unit: string;
    updated_at: string;
}