import { verifySessionToken } from "@/lib/auth/session";
import { updatePortofolioItemImage, uploadCoverImage } from "@/lib/business/portofolio/portfolioAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }>}
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
    const formData = request.formData();
    const file = (await formData).get("file") as File | null;

    if (!file) {
        return NextResponse.json(
            { error: "Niciun fișier trimis." },
            { status: 400 }
        );
    }

    try {
        const imageUrl = await uploadCoverImage(file, id);
        const updated = await updatePortofolioItemImage(id, imageUrl);
        return NextResponse.json(updated);
    } catch {
        return NextResponse.json(
            { error: "Eroare la upload." },
            { status: 500 }
        );
    }
}