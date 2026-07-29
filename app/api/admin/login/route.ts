import { rateLimitOk } from "@/lib/auth/rateLimit";
import { createSessionToken } from "@/lib/auth/session";
import { verifyTotpCode } from "@/lib/auth/totp";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";

    if (!rateLimitOk(ip)) {
        return NextResponse.json(
            { error: "Prea multe încercări. Încearcă din nou în 15 minute." },
            { status: 429 }
        );
    }

    const { email, password, totpCode } = await request.json()

    const isValid =
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD;

    if (!isValid) {
        return NextResponse.json(
            { error: "Email sau parolă incorectă." },
            { status: 401 }
        );
    }

    if (!totpCode || !verifyTotpCode(totpCode)) {
        return NextResponse.json(
            { error: "Cod de autentificare incorect." },
            { status: 401 }
        );
    }

    const token = await createSessionToken(email);

    const response = NextResponse.json(
        { success: true }
    );

    response.cookies.set("admin_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 8,
        path: "/"
    })

    return response;
}