import { verifySessionToken } from "@/lib/auth/session";
import { updatePortofolioItemPdf, uploadPdf } from "@/lib/business/portofolio/portofolioAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
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
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
        return NextResponse.json(
            { error: "Niciun fișier trimis" },
            { status: 400 }
        );
    }

    if (file.type !== "application/pdf") {
        return NextResponse.json(
            { error: "Fișierul trebuie să fie PDF." },
            { status: 400 }
        );
    }

    try {
        const pdfUrl = await uploadPdf(file, id);
        const updated = await updatePortofolioItemPdf(id, pdfUrl);
        return NextResponse.json(updated);
    } catch {
        return NextResponse.json(
            { error: "Eroare la upload." },
            { status: 500 }
        );
    }
}