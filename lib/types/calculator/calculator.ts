export interface ServiceSubOption {
    id: string;
    label: string;
    pricePerUnit: number;
    min: number;
    max: number;
    defaultValue: number;
}

export interface ServiceOption {
    id: string;
    label: string;
    pricingType: "per-page" | "flat";
    pricePerPage?: number;
    flatPrice?: number;
    subOptions?: ServiceSubOption[];
}

export interface CurrentFormState {
    pageCount: number;
    selectedServiceIds: string[];
    subOptionValues: Record<string, number>;
    isUrgent: boolean;
}

export interface SelectedServiceCheckoutLine {
    id: string;
    label: string;
    amount: number;
    detail: string;
}

export interface CheckoutPanelData {
    lines: SelectedServiceCheckoutLine[];
    subtotal: number;
    urgentSurcharge: number;
    total: number;
}
