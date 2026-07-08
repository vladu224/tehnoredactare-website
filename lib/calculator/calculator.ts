import { serviceOptions, URGENT_SURCHARGE } from "./services-pricing";
import { CheckoutPanelData, CurrentFormState, SelectedServiceCheckoutLine } from "./types";


export function calculateEstimation(
    state: CurrentFormState
): CheckoutPanelData {
    const lines: SelectedServiceCheckoutLine[] = state.selectedServiceIds
        .map((id) => serviceOptions.find((s) => s.id === id))
        .filter((s): s is NonNullable<typeof s> => s !== undefined)
        .flatMap((service) => {
            const baseAmount = service.pricingType === "per-page"
                ? state.pageCount * (service.pricePerPage ?? 0)
                : service.flatPrice ?? 0;

            const baseLine: SelectedServiceCheckoutLine = {
                id: service.id,
                label: service.label,
                amount: Math.round(baseAmount),
                detail:
                    service.pricingType === "per-page"
                        ? `${state.pageCount} pag × ${service.pricePerPage} lei`
                        : `${service.flatPrice} lei / proiect`, 
            };

            const subLines: SelectedServiceCheckoutLine[] = (service.subOptions ?? [])
                .map((sub) => {
                    const quantity = state.subOptionValues[sub.id] ?? sub.defaultValue;
                    const amount = quantity * sub.pricePerUnit;
                    return {
                        id: sub.id,
                        label:sub.label,
                        amount: Math.round(amount),
                        detail: `${quantity} × ${sub.pricePerUnit} lei`,
                    };
                });

            return [baseLine, ...subLines];
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
        `ESTIMARE TOTALĂ: ${estimation.total.toLocaleString("ro-RO")} lei.`
    ].join("\n");
}