import { verifySessionToken } from "@/lib/auth/session";
import { deletePortofolioItem, updatePortofolioItemDetails } from "@/lib/business/portofolio/portofolioAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const token = request.cookies.get("admin_session")?.value;
    const isAuthenticated = token ? await verifySessionToken(token) : false;

    if (!isAuthenticated) {
        return NextResponse.json(
            { error: "Neautorizat." },
            { status: 401 }
        );
    }

    const { id } = await params;

    try {
        await deletePortofolioItem(id);
        return NextResponse.json(
            { success: true },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: "Eroare la ștergere." },
            { status: 500 }
        )
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }>}
) {
    const token = request.cookies.get("admin_session")?.value;
    const isAuthenticated = token ? verifySessionToken(token) : false;

    if (!isAuthenticated) {
        return NextResponse.json(
            { error: "Neautorizat." },
            { status: 401 }
        );
    }

    const { id } = await params;
    const body = await request.json();

    try {
        const updated = await updatePortofolioItemDetails(id, body);
        return NextResponse.json(updated);
    } catch {
        return NextResponse.json(
            { error: "Eroare la actualizare detalii" },
            { status: 500 }
        );
    }
}