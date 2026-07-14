import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth/session";

export async function proxy(request: NextRequest) {
    const isLoginPage = request.nextUrl.pathname === "/admin/login";
    const token = request.cookies.get("admin_session")?.value;

    const isAuthenticated = token ? await verifySessionToken(token) : false;

    if (!isAuthenticated && !isLoginPage) {
        return NextResponse.redirect(
            new URL("/admin/login", request.url)
        );
    }

    if (isAuthenticated && isLoginPage) {
        return NextResponse.redirect(
            new URL("/admin", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin", "/admin/:path*"],
};