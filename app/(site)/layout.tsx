import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { CookieConsent } from "@/components/common/CookieConsent";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <CookieConsent />
    </>
  );
}
