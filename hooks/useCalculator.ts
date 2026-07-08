import { calculateEstimation } from "@/lib/calculator/calculator";
import { CurrentFormState } from "@/lib/calculator/types";
import { useMemo, useState } from "react";

const initialState: CurrentFormState = {
    pageCount: 220,
    selectedServiceIds: ["tehnoredactare", "corectura-ortografica", "design-coperta"],
    isUrgent: false,
};

export function useCalculator() {
    const [state, setState] = useState<CurrentFormState>(initialState);

    const estimation = useMemo(() => 
        calculateEstimation(state)
    , [state]);

    function setPageCount(pageCount: number) {
        setState((current) => ({ ...current, pageCount }));
    }

    function toggleService(id: string) {
        setState((current) => ({
            ...current,
            selectedServiceIds: current.selectedServiceIds.includes(id)
                                    ? current.selectedServiceIds.filter((s) => s !== id)
                                    : [...current.selectedServiceIds, id]
        }));
    }

    function setUrgent(isUrgent: boolean) {
        setState((current) => ({ ...current, isUrgent }));
    }

    return {
        state,
        estimation,
        setPageCount,
        toggleService,
        setUrgent,
    }
}
