import { getContent, getProjects } from "@/lib/content";
import { defaultSegment, languageAlternates, segments } from "@/lib/i18n";
import AudienceSwitcher from "@/components/AudienceSwitcher";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import SegmentPanel from "@/components/sections/SegmentPanel";
import Capability from "@/components/sections/Capability";
import Process from "@/components/sections/Process";
import LiveDemo from "@/components/demo/LiveDemo";

export async function generateMetadata({ params }) {
  const t = getContent(params.locale);
  return {
    title: `${t.profile.name} — ${t.profile.role}`,
    description: t.hero.lead,
    alternates: {
      canonical: `/${params.locale}`,
      languages: languageAlternates("/"),
    },
  };
}

export default function LandingPage({ params }) {
  const { locale } = params;
  const t = getContent(locale);
  const projects = getProjects(locale);

  return (
    <div className="flex flex-col gap-24 xl:gap-32">
      <Hero locale={locale} t={t} />
      <TrustStrip t={t} />

      <AudienceSwitcher
        defaultSegment={defaultSegment}
        labels={t.switcher.tabs}
        heading={t.switcher.label}
        hint={t.switcher.hint}
      >
        {segments.map((segment) => (
          <SegmentPanel
            key={segment}
            locale={locale}
            segment={segment}
            copy={t.segments[segment]}
            t={t}
            projects={projects.filter((p) => p.segment === segment).slice(0, 3)}
          />
        ))}
      </AudienceSwitcher>

      <LiveDemo t={t} />
      <Capability t={t} />
      <Process t={t} />
    </div>
  );
}
