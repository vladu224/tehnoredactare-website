import { supabaseClient } from "../../supabase/client";
import { PriceItem } from "../../types/prices/prices";

export async function getPricesByCategory(
    category: PriceItem["category"]
): Promise<PriceItem[]> {
    const { data, error } = await supabaseClient
        .from("prices")
        .select("*")
        .eq("category", category)
        .order("id");

    if (error) {
        console.error("Eroare la citirea prețurilor: ", error);
        return [];
    }

    return data;
}