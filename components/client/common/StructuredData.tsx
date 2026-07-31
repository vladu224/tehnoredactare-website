// src/components/common/StructuredData.tsx
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Book Studio",
    description:
      "Tehnoredactare, design copertă, redactare și corectură pentru autori independenți și edituri mici.",
    url: "https://ateliertipar.vercel.app",
    telephone: "+40751587092",
    email: "vlad.andone04@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bacău",
      addressCountry: "RO",
    },
    priceRange: "1450-2850 RON",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}