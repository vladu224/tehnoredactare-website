import { BookDetails, PriceBreakdownLine, FinalPrice } from "./types";

const PRICE_PER_PAGE = 6;
const FORMAT_MULTIPLIER: Record<string, number> = {
    A4: 1,
    A5: 1.15
};
const DEADLINE_CHARGE: Record<string, number> = {
    standard: 0,
    urgent: 0.15
}

export function calculateEstimate(input: BookDetails): FinalPrice {
    const basePrice = input.pageCount * PRICE_PER_PAGE * FORMAT_MULTIPLIER[input.format];

    const lines: PriceBreakdownLine[] = [];
    let subtotal = basePrice;

    if (input.hasImages) {
        const amount = input.pageCount * 0.8;
        lines.push({label: "Imagini", amount});
        subtotal += amount;
    }
    if (input.hasTables) {
        const amount = input.pageCount * 0.5;
        lines.push({label: "Tabele", amount});
        subtotal += amount;
    }
    if (input.hasFootnotes) {
        const amount = input.pageCount * 0.4;
        lines.push({label: "Note de subsol", amount});
        subtotal += amount;
    }

    const chargeRate = DEADLINE_CHARGE[input.deadline];
    if (chargeRate > 0) {
        const amount = subtotal * chargeRate;
        lines.push({label: "Termen redus", amount});
        subtotal += amount;
    }

    return {
        basePrice: Math.round(basePrice),
        lines: lines.map((l) => ({ ...l, amount: Math.round(l.amount) })),
        total: Math.round(subtotal),
    };
}

const FORMAT_LABEL: Record<string, string> = {
    A4: "A4",
    A5: "A5",
};

export const DEADLINE_LABEL: Record<string, string> = {
    standard: "Standard (14 zile)",
    urgent: "Urgent (7 zile)",
};

export function buildEstimateSummaryText(
    details: BookDetails,
    estimate: FinalPrice
): string {
    const contentParts: string[] = [];
    if (details.hasImages) contentParts.push("imagini");
    if (details.hasTables) contentParts.push("tabele");
    if (details.hasFootnotes) contentParts.push("note de subsol");

    const contentLine = 
        contentParts.length > 0
            ? `Conține: ${contentParts.join(", ")}.`
            : "Fără elemente suplimentare.";

    return [
        `Detalii lucrare:`,
        `- ${details.pageCount} pagini, format ${FORMAT_LABEL[details.format]}`,
        `- ${contentLine}`,
        `- Termen: ${DEADLINE_LABEL[details.deadline]}`,
        ``,
        `ESTIMARE CALCULATOR: ${estimate.total.toLocaleString("ro-RO")} RON.`,,
        `As dori sa discutam proiectul.`
    ].join("\n");
}