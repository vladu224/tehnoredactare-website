import { jwtVerify, SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.SESSION_SECRET);
const SESSION_DURATION = "8h";

export async function createSessionToken(email: string): Promise<string> {
    return new SignJWT({ email })
        .setProtectedHeader({ alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime(SESSION_DURATION)
        .sign(secret);
}

export async function verifySessionToken(token: string): Promise<boolean> {
    try {
        await jwtVerify(token, secret);
        return true;
    } catch {
        return false;
    }
}