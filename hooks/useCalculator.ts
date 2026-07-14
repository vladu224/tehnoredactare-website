import { calculateEstimation } from "@/lib/business/calculator/calculateEstimation";
import { CurrentFormState } from "@/lib/types/calculator/calculator";
import { useMemo, useState } from "react";

const initialState: CurrentFormState = {
    pageCount: 220,
    selectedServiceIds: ["tehnoredactare", "corectura-ortografica", "design-coperta"],
    subOptionValues: {},
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

    function setSubOptionValues(id: string, value: number) {
        setState((current) => ({
            ...current,
            subOptionValues: { ...current.subOptionValues, [id]: value },
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
        setSubOptionValues,
        setUrgent,
    }
}
