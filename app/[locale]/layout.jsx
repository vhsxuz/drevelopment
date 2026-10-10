import { notFound } from "next/navigation";
import NavBar from "@/components/chrome/NavBar";
import TabBar from "@/components/chrome/TabBar";
import Footer from "@/components/chrome/Footer";
import PageTransition from "@/components/PageTransition";
import StructuredData from "@/components/StructuredData";
import { getContent } from "@/lib/content";
import { isLocale, languageAlternates, locales } from "@/lib/i18n";

/** Both locales are prerendered at build time. No middleware, no runtime work. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  if (!isLocale(params.locale)) return {};
  const t = getContent(params.locale);
  return {
    description: t.footer.tagline,
    alternates: {
      canonical: `/${params.locale}`,
      languages: languageAlternates("/"),
    },
    openGraph: {
      type: "website",
      locale: params.locale === "id" ? "id_ID" : "en_US",
      alternateLocale: params.locale === "id" ? ["en_US"] : ["id_ID"],
    },
  };
}

export default function LocaleLayout({ children, params }) {
  // An unknown locale is a 404, not a silent fallback - otherwise /foo would
  // render the whole site and get indexed.
  if (!isLocale(params.locale)) notFound();

  const t = getContent(params.locale);

  return (
    <div lang={params.locale} dir={t.dir}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-accent-ink"
      >
        {t.common.skipToContent}
      </a>

      <StructuredData locale={params.locale} t={t} />

      {/* A fade where content meets the floating bar, not a hard divider. */}
      <div className="scroll-edge-top" aria-hidden />
      <NavBar locale={params.locale} />
      <PageTransition>
        <div id="main">{children}</div>
      </PageTransition>
      <Footer locale={params.locale} />
      <TabBar locale={params.locale} />
    </div>
  );
}
