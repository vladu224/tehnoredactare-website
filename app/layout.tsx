import type { Metadata } from "next";
import { Fraunces, Inter, Tinos } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  title: "Book Studio - Tehnoredactare și design de carte",
  description: "Servicii profesionale de corectură, stilistică și tehnoredactare pentru autori și edituri. Află prețul instant cu calculatorul nostru online.",
  keywords: ["book studio", "corectura carte", "tehnoredactare", "editare text", "servicii editoriale", "calculator preturi carti"],
  authors: [{ name: "VA" }],
  creator: "VA",
  metadataBase: new URL("https://bookstudio.vercel.app"),
  openGraph: {
    title: "Book Studio - Tehnoredactare și design de carte",
    description: "Estimează costul tehnoredactării unei cărți în timp",
    /*url: */
    siteName: "Book Studio",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
        alt: "Book Studio - Tehnoredactare și design de carte",
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}
