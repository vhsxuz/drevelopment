import { notFound } from "next/navigation";
import { getContent, getProjects } from "@/lib/content";
import { isSegment, languageAlternates, locales, segments } from "@/lib/i18n";
import SegmentPanel from "@/components/sections/SegmentPanel";
import Process from "@/components/sections/Process";

/** Every locale x segment pair is prerendered. */
export function generateStaticParams() {
  return locales.flatMap((locale) => segments.map((segment) => ({ locale, segment })));
}

export async function generateMetadata({ params }) {
  if (!isSegment(params.segment)) return {};
  const t = getContent(params.locale);
  const copy = t.segments[params.segment];
  const path = `/services/${params.segment}`;
  return {
    title: t.switcher.tabs[params.segment],
    description: copy.subline,
    alternates: {
      canonical: `/${params.locale}${path}`,
      languages: languageAlternates(path),
    },
  };
}

export default function ServiceSegmentPage({ params }) {
  const { locale, segment } = params;
  if (!isSegment(segment)) notFound();

  const t = getContent(locale);
  const copy = t.segments[segment];
  const projects = getProjects(locale).filter((p) => p.segment === segment);

  return (
    <div className="flex flex-col gap-24">
      <div className="container mx-auto text-center">
        <p className="t-label text-accent">{t.switcher.tabs[segment]}</p>
        <h1 className="t-display mx-auto mt-3 max-w-[18ch] text-balance">
          {copy.cta.heading}
        </h1>
      </div>
      <SegmentPanel locale={locale} segment={segment} copy={copy} t={t} projects={projects} />
      <Process t={t} />
    </div>
  );
}
