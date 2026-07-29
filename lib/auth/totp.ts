import { Secret, TOTP } from "otpauth";

function getTotp() {
    return new TOTP({
        issuer: "Book Studio",
        label: "Admin",
        algorithm: "SHA1",
        digits: 6,
        period: 30,
        secret: Secret.fromBase32(process.env.TOTP_SECRET!),
    });
}

export function verifyTotpCode(code: string): boolean {
    const totp = getTotp();
    const delta = totp.validate({ token: code, window: 1 });

    return delta !== null;
}