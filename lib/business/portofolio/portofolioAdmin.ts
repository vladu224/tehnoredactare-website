import { PortofolioItem } from "@/lib/types/portofolio/portofolio";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function getAllPortofolioItems(): Promise<PortofolioItem[]> {
    const { data, error } = await supabaseAdmin
        .from("portofolio_items")
        .select("*")
        .order("sort_order")
        .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return data;
}

export async function createPortofolioItem(input: {
    title: string;
    category: string;
    year: number;
}): Promise<PortofolioItem> {
    const { data, error } = await supabaseAdmin
        .from("portofolio_items")
        .insert(input)
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
}


export async function uploadCoverImage(
    file: File,
    itemId: string
): Promise<string> {
    const path = `${itemId}.jpg`;

    const { error } = await supabaseAdmin.storage
        .from("portofolio_covers")
        .upload(path, file, {
            upsert: true,
            contentType: 'image/jpeg'
        });

    if (error) throw new Error(error.message);

    const { data } = supabaseAdmin.storage
        .from("portofolio_covers")
        .getPublicUrl(path);

    return `${data.publicUrl}?t=${Date.now()}`;
}

export async function updatePortofolioItemImage(
    id: string,
    imageUrl: string
): Promise<PortofolioItem> {
    const { data, error } = await supabaseAdmin
        .from("portofolio_items")
        .update({ image_url: imageUrl })
        .eq("id", id)
        .select()
        .single()

    if (error) throw new Error(error.message);
    return data;
}

export async function deletePortofolioItem(id: string): Promise<void> {
    const { error } = await supabaseAdmin
        .from("portofolio_items")
        .delete()
        .eq("id", id)

    if (error) throw new Error(error.message);
}


export async function uploadPdf(
    file: File,
    itemId: string
): Promise<string> {
    const path = `${itemId}.pdf`;

    const { error } = await supabaseAdmin.storage
        .from("portofolio_pdfs")
        .upload(path, file, { upsert: true });
    
    if (error) throw new Error(error.message);

    const { data } = supabaseAdmin.storage
        .from("portofolio_pdfs")
        .getPublicUrl(path);

    return `${data.publicUrl}?t=${Date.now()}`;
}

export async function updatePortofolioItemPdf(
    id: string,
    pdfUrl: string,
): Promise<PortofolioItem> {
    const { data, error } = await supabaseAdmin
        .from("portofolio_items")
        .update({ pdf_url: pdfUrl})
        .eq("id", id)
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
}

