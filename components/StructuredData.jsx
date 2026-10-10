import { SITE_URL, WHATSAPP_NUMBER } from "@/lib/i18n";

/**
 * JSON-LD as a plain script tag in a server component - no library needed.
 * Rendered once per page with only the types that page actually warrants.
 */
export default function StructuredData({ locale, t }) {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: t.profile.name,
      jobTitle: t.profile.role,
      url: `${SITE_URL}/${locale}`,
      telephone: `+${WHATSAPP_NUMBER}`,
      sameAs: [
        "https://github.com/vhsxuz",
        "https://www.linkedin.com/in/vincentius-andreas-alexander/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: t.switcher.tabs.msme,
      provider: { "@type": "Person", name: t.profile.name },
      areaServed: "ID",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 300000,
          priceCurrency: "IDR",
        },
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
