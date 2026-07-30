import { verifySessionToken } from "@/lib/auth/session";
import { removeCoverImage, updatePortofolioItemImage, uploadCoverImage } from "@/lib/business/portofolio/portofolioAdmin";
import { NextRequest, NextResponse } from "next/server";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
];

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

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        return NextResponse.json(
            { error: "Format neacceptat. Foloseste JPG, PNG sau WEBP." },
            { status: 400 }
        );
    }

    if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
            { error: "Fisierul e prea mare (max 5MB)." },
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

export async function DELETE(
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

    try {
        const updated = await removeCoverImage(id);
        return NextResponse.json(updated);
    } catch {
        return NextResponse.json(
            { error: "Eroare la ștergere coperta." },
            { status: 500 }
        );
    }
}