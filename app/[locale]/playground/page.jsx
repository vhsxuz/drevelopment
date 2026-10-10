import { getContent } from "@/lib/content";
import { languageAlternates, locales } from "@/lib/i18n";
import SceneLoader from "@/components/playground/SceneLoader";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const t = getContent(params.locale);
  return {
    title: t.playground.title,
    description: t.playground.lead,
    alternates: {
      canonical: `/${params.locale}/playground`,
      languages: languageAlternates("/playground"),
    },
  };
}

export default function PlaygroundPage({ params }) {
  const t = getContent(params.locale);
  return (
    <section className="container mx-auto max-w-[960px]">
      <p className="t-label text-accent">{t.playground.eyebrow}</p>
      <h1 className="t-title mt-3 text-balance">{t.playground.title}</h1>
      <p className="t-body mt-3 max-w-[56ch] text-pretty text-ink-2">{t.playground.lead}</p>
      <div className="mt-10">
        <SceneLoader t={t} />
      </div>
    </section>
  );
}
