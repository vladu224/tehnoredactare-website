import { verifySessionToken } from "@/lib/auth/session";
import { createPortofolioItem, getAllPortofolioItems } from "@/lib/business/portofolio/portfolioAdmin";
import { NextRequest, NextResponse } from "next/server";

async function requireAuth(request: NextRequest) {
    const token = request.cookies.get("admin_session")?.value;
    return token ? await verifySessionToken(token) : false;
}

export async function GET(request: NextRequest) {
    if (!(await requireAuth(request))) {
        return NextResponse.json(
            { error: "Neautorizat." },
            { status: 401 }
        );
    }
    const items = await getAllPortofolioItems();
    return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
    if (!(await requireAuth(request))) {
        return NextResponse.json(
            { error: "Neautorizat." },
            { status: 401 }
        );
    }
    const body = await request.json();
    try {
        const item = await createPortofolioItem(body);
        return NextResponse.json(item);
    } catch {
        return NextResponse.json(
            { error: "Eroare la creare." },
            { status: 500 }
        );
    }
}