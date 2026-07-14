import { getPricesByCategory } from "@/lib/business/pricesClient";
import { PriceItem } from "@/lib/types/prices/prices";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const category = request.nextUrl.searchParams.get("category") as
        | PriceItem["category"]
        | null;

    if(!category) {
        return NextResponse.json(
            { error: "Categorie lipsă."},
            { status: 400 }
        );
    }

    const prices = await getPricesByCategory(category);
    
    return NextResponse.json(prices);
}