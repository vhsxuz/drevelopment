import Link from "next/link";
import Image from "next/image";
import { getContent, getProjects } from "@/lib/content";
import { languageAlternates, locales, localePath } from "@/lib/i18n";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import Pressable from "@/components/motion/Pressable";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const t = getContent(params.locale);
  return {
    title: t.work.title,
    description: t.work.lead,
    alternates: {
      canonical: `/${params.locale}/work`,
      languages: languageAlternates("/work"),
    },
  };
}

export default function WorkIndex({ params }) {
  const { locale } = params;
  const t = getContent(locale);
  const projects = getProjects(locale);

  return (
    <section className="container mx-auto">
      <RevealGroup>
        <RevealItem>
          <p className="t-label text-accent">{t.work.eyebrow}</p>
          <h1 className="t-title mt-3">{t.work.title}</h1>
          <p className="t-body mt-3 max-w-[56ch] text-pretty text-ink-2">{t.work.lead}</p>
        </RevealItem>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <RevealItem as="li" key={project.slug}>
              <Pressable as="div" hitSlop={false} scale={0.985} className="h-full rounded-lg">
                <Link
                  href={localePath(locale, `/work/${project.slug}`)}
                  className="card group flex h-full flex-col overflow-hidden p-0 transition-colors duration-300 hover:border-accent/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-sunken">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(min-width: 1200px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="t-heading transition-colors duration-300 group-hover:text-accent">
                        {project.title}
                      </h2>
                      <span className="t-mono text-[13px] font-semibold text-ink-3">
                        {project.num}
                      </span>
                    </div>
                    <p className="t-caption line-clamp-2 text-pretty text-ink-2">
                      {project.description}
                    </p>
                    <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full bg-accent/10 px-2.5 py-1 text-[12px] font-medium text-accent"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Pressable>
            </RevealItem>
          ))}
        </ul>
      </RevealGroup>
    </section>
  );
}
