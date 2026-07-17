import { verifySessionToken } from "@/lib/auth/session";
import { deletePortofolioItem } from "@/lib/business/portofolio/portfolioAdmin";
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