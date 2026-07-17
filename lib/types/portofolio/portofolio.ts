export interface PortofolioItem {
    id: string;
    title: string;
    category: string;
    year: number;
    image_url: string | null;
    sort_order: number;
    created_at: string;
}