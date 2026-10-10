import { notFound } from "next/navigation";
import { getContent, eventShowcase } from "@/lib/content";
import LiveDemo from "@/components/demo/LiveDemo";

/**
 * The one dynamically rendered route: a real invite reads live RSVP state.
 * It is also noindex - a client's guest list has no business in search results.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const event = eventShowcase.find((e) => e.slug === params.slug);
  if (!event) return {};
  return {
    title: event[params.locale]?.names ?? event.slug,
    robots: { index: false, follow: false },
  };
}

export default function EventMicrosite({ params }) {
  const { locale, slug } = params;
  const event = eventShowcase.find((e) => e.slug === slug);
  if (!event) notFound();

  const t = getContent(locale);

  return (
    <div className="flex flex-col gap-12">
      <LiveDemo t={t} />
    </div>
  );
}
