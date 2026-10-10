import { getContent } from "@/lib/content";
import { languageAlternates, locales } from "@/lib/i18n";
import WhatsAppForm from "@/components/WhatsAppForm";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const t = getContent(params.locale);
  return {
    title: t.contact.title,
    description: t.contact.lead,
    alternates: {
      canonical: `/${params.locale}/contact`,
      languages: languageAlternates("/contact"),
    },
  };
}

export default function ContactPage({ params }) {
  const t = getContent(params.locale);
  return (
    <section className="container mx-auto max-w-[640px]">
      <p className="t-label text-accent">{t.contact.eyebrow}</p>
      <h1 className="t-title mt-3">{t.contact.title}</h1>
      <p className="t-body mt-3 text-pretty text-ink-2">{t.contact.lead}</p>
      <WhatsAppForm t={t} />
    </section>
  );
}
