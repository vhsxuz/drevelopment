import Link from "next/link";
import { getContent, eventShowcase } from "@/lib/content";
import { languageAlternates, locales, localePath } from "@/lib/i18n";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const t = getContent(params.locale);
  return {
    title: t.events.title,
    description: t.events.lead,
    alternates: {
      canonical: `/${params.locale}/events`,
      languages: languageAlternates("/events"),
    },
  };
}

export default function EventsShowcase({ params }) {
  const { locale } = params;
  const t = getContent(locale);

  return (
    <section className="container mx-auto">
      <RevealGroup>
        <RevealItem>
          <p className="t-label text-accent">{t.events.eyebrow}</p>
          <h1 className="t-title mt-3">{t.events.title}</h1>
          <p className="t-body mt-3 max-w-[56ch] text-pretty text-ink-2">{t.events.lead}</p>
        </RevealItem>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {eventShowcase.map((event) => {
            const copy = event[locale];
            return (
              <RevealItem as="li" key={event.slug}>
                <Link
                  href={localePath(locale, `/events/${event.slug}`)}
                  className="card group flex h-full flex-col gap-2 p-7 transition-colors hover:border-accent/30"
                >
                  <p className="t-label text-accent">{copy.date}</p>
                  <h2 className="t-heading transition-colors group-hover:text-accent">
                    {copy.names}
                  </h2>
                  <p className="t-caption text-pretty text-ink-2">{copy.blurb}</p>
                  <span className="t-caption mt-auto pt-4 text-accent">{t.events.viewDemo} →</span>
                </Link>
              </RevealItem>
            );
          })}
        </ul>
      </RevealGroup>
    </section>
  );
}
