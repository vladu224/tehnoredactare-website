import { Header } from "@/components/client/common/Header";
import { Footer } from "@/components/client/common/Footer";
import { Cookie } from "@/components/client/common/Cookie";
import { StructuredData } from "@/components/client/common/StructuredData";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData />
      <Header />
      {children}
      <Footer />
      <Cookie />
    </>
  );
}
