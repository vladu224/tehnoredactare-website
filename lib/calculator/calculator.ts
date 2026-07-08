import { serviceOptions, URGENT_SURCHARGE } from "./services-pricing";
import { CheckoutPanelData, CurrentFormState, SelectedServiceCheckoutLine } from "./types";


export function calculateEstimation(
    state: CurrentFormState
): CheckoutPanelData {
    const lines: SelectedServiceCheckoutLine[] = state.selectedServiceIds
        .map((id) => serviceOptions.find((s) => s.id === id))
        .filter((s): s is NonNullable<typeof s> => s !== undefined)
        .map((service) => {
            if(service.pricingType === "per-page") {
                const amount = state.pageCount * (service.pricePerPage ?? 0);
                return {
                    id: service.id,
                    label: service.label,
                    amount: Math.round(amount),
                    detail: `${state.pageCount} pag × ${service.pricePerPage} lei`,
                };
            }
            return {
                id: service.id,
                label: service.label,
                amount: service.flatPrice ?? 0,
                detail: `${service.flatPrice} lei / proiect`,
            };
        });
    
    const subtotal = lines.reduce((sum, line) => sum + line.amount, 0);
    const urgentSurcharge = state.isUrgent
        ? Math.round(subtotal * URGENT_SURCHARGE)
        : 0;

    return {
        lines,
        subtotal,
        urgentSurcharge,
        total: subtotal + urgentSurcharge,
    };
}

export function buildEstimationSummaryText (
    state: CurrentFormState,
    estimation: CheckoutPanelData
): string {
    const serviceLines = estimation.lines
        .map((l) => `- ${l.label} (${l.detail}) -> ${l.amount} lei`)
        .join("\n");

    return [
        `Detalii lucrare: ${state.pageCount} pagini ${state.isUrgent ? ", regim de urgență" : ""}`,
        ``,
        `Servicii selectate:`,
        serviceLines,
        ``,
        `ESTIMARE TOTALA: ${estimation.total.toLocaleString("ro-RO")} lei.`
    ].join("\n");
}