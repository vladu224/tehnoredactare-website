import { rateLimitOk } from "@/lib/auth/rateLimit";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    if (!rateLimitOk(`contact-${ip}`)) {
        return NextResponse.json(
            { error: "Prea multe incercari. Incearca din nou mai tarziu." },
            { status: 429 }
        );
    }

    try {
        const { name, email, service, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Trebuie completate toate campurile." },
                { status: 400 }
            );
        }

        if (!name || typeof(name) !== "string" || name.length > 100) {
            return NextResponse.json(
                { error: "Nume invalid." },
                { status: 400 }
            );
        }

        if (!email || typeof(email) !== "string" || email.length > 100) {
            return NextResponse.json(
                { error: "Email invalid." },
                { status: 400 }
            );
        }

        if (message && (typeof(message) !== "string" || message.length > 2000)) {
            return NextResponse.json(
                { error: "Mesaj prea lung." },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Book Studio <onboarding@resend.dev>",
            to: CONTACT_EMAIL!,
            replyTo: email,
            subject: `Cerere ofertă nouă - ${name}`,
            text: [
                `Nume: ${name}`,
                `Email: ${email}`,
                `Serviciu de interes: ${service}`,
                `Mesaj:`,
                ``,
                message,
            ].join("\n"),
        });

        return NextResponse.json(
            { succes: true }
        );
    } catch (error) {
        console.error("Eroare trimitere email: ", error);
        return NextResponse.json(
            { error: "A apărut o eroare. Încearcă din nou." },
            { status: 500 }
        );
    }
}