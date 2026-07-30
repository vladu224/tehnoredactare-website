import { verifySessionToken } from "@/lib/auth/session";
import { removePdf, updatePortofolioItemPdf, uploadPdf } from "@/lib/business/portofolio/portofolioAdmin";
import { NextRequest, NextResponse } from "next/server";

const MAX_PDF_SIZE = 10 * 1024 * 1024;

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

    if (file.size > MAX_PDF_SIZE) {
        return NextResponse.json(
            { error: "Fisierul incarcat e prea mare (max 10MB)." },
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

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> } 
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

    try {
        const updated = await removePdf(id);
        return NextResponse.json(updated);
    } catch {
        return NextResponse.json(
            { error: "Eroare la ștergere pdf." },
            { status: 500 }
        );
    }
}