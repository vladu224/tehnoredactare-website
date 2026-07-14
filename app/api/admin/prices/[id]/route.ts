import { verifySessionToken } from "@/lib/auth/session";
import { updatePrice } from "@/lib/business/pricesAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
    request: NextRequest,
    { params }: {params: Promise<{ id: string }> }
) {
    const token = request.cookies.get("admin_session")?.value;
    const isAuthenticated = token ? await verifySessionToken(token) : false;

    if(!isAuthenticated) {
        return NextResponse.json(
            { error: "Neautorizat." },
            { status: 401 }
        );
    }

    const { id } = await params;
    const body = await request.json();
    
    try {
        const updatedPrice = await updatePrice(id, body);
        return NextResponse.json(
            { success: true, price: updatedPrice }
        );
    } catch {
        return NextResponse.json(
            { error: "Eroare la salvare." }, 
            { status: 500 }
        );
    }
}