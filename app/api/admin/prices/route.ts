import { verifySessionToken } from "@/lib/auth/session";
import { getAllPrices } from "@/lib/business/pricesAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const prices = await getAllPrices();
        return NextResponse.json(prices);
    } catch (dbError) {
        console.error("Eroare la preluarea prețurilor: ", dbError);
        return NextResponse.json(
            { error: "Nu s-au putut încărca prețurile." },
            { status: 500 }
        );
    }
}