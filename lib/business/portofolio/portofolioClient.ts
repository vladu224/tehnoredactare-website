import { PortofolioItem } from "@/lib/types/portofolio/portofolio";
import { supabaseClient } from "@/lib/supabase/client";

export async function getPortofolioItems(): Promise<PortofolioItem[]> {
    const { data, error } = await supabaseClient
        .from("portofolio_items")
        .select("*")
        .order("sort_order")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Eroare la citirea portofoliului din DB: ", error);
        return [];
    }

    return data;
}