export interface ServiceOption {
    id: string;
    label: string;
    pricingType: "per-page" | "flat";
    pricePerPage?: number;
    flatPrice?: number;
}

export interface CurrentFormState {
    pageCount: number;
    selectedServiceIds: string[];
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
