import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Atelier Tipar - Tehnoredactare și design de carte",
  description: "Servicii profesionale de corectură, stilistică și tehnoredactare pentru autori și edituri. Află prețul instant cu calculatorul nostru online.",
  keywords: ["corectura carte", "tehnoredactare", "editare text", "servicii editoriale", "calculator preturi carti"],
  authors: [{ name: "VA" }],
  creator: "VA",
  metadataBase: new URL("https://ateliertipar.ro"),
  openGraph: {
    title: "Atelier Tipar - Tehnoredactare și design de carte",
    description: "Estimează costul tehnoredactării unei cărți în timp",
    /*url: */
    siteName: "Atelier Tipar",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Atelier Tipar - Tehnoredactare și design de carte",
      },
    ],
  } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col sm:scroll-smooth">
        {children}
      </body>
    </html>
  );
}
