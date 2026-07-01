import { calculateEstimate } from "@/lib/pricing";
import { BookDetails } from "@/lib/types";
import { useMemo, useState } from "react";

const initialDetails: BookDetails = {
    pageCount: 120,
    format: "A4",
    hasImages: false,
    hasTables: false,
    hasFootnotes: false,
    deadline: "standard",
};

export function useEstimate() {
    const [details, setDetails] = useState<BookDetails>(initialDetails);

    const estimate = useMemo(() => calculateEstimate(details), [details]);

    return { details, setDetails, estimate };
}