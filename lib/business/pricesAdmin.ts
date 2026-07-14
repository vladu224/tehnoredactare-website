import { supabaseAdmin } from "../supabase/admin";
import { PriceItem } from "../types/prices/prices";

export async function updatePrice(
    id: string,
    updates: Partial<Pick<PriceItem, "label" | "price_min" | "price_max" | "unit">>
) {
    const { data, error } = await supabaseAdmin
        .from("prices")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
}

export async function getAllPrices(): Promise<PriceItem[]> {
    const { data, error } = await supabaseAdmin
        .from("prices")
        .select("*")
        .order("category")
        .order("id");

    if (error) throw new Error(error.message);
    return data;
}