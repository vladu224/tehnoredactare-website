import { Header } from "@/components/client/common/Header";
import { Footer } from "@/components/client/common/Footer";
import { Cookie } from "@/components/client/common/Cookie";

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
      <Cookie />
    </>
  );
}
