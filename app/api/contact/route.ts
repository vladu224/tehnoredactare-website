import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, service, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Trebuie completate toate campurile." },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Atelier Tipar <onboarding@resend.dev>",
            to: CONTACT_EMAIL!,
            replyTo: email,
            subject: `Cerere oferta noua - ${name}`,
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