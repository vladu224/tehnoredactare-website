import { Header } from "@/components/client/common/Header";
import { Footer } from "@/components/client/common/Footer";
import { CookieConsent } from "@/components/client/common/CookieConsent";

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
