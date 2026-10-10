import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { getContent, getProject, projects } from "@/lib/content";
import { languageAlternates, locales, localePath } from "@/lib/i18n";
import Pressable from "@/components/motion/Pressable";

/** Built at compile time, not on request. */
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug }))
  );
}

export async function generateMetadata({ params }) {
  const project = getProject(params.locale, params.slug);
  if (!project) return {};
  const path = `/work/${project.slug}`;
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/${params.locale}${path}`,
      languages: languageAlternates(path),
    },
    openGraph: { images: [project.image], title: project.title },
  };
}

export default function CaseStudy({ params }) {
  const { locale, slug } = params;
  const project = getProject(locale, slug);
  if (!project) notFound();

  const t = getContent(locale);

  return (
    <article className="container mx-auto max-w-[840px]">
      <Link
        href={localePath(locale, "/work")}
        className="t-caption inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-ink"
      >
        <FiArrowLeft /> {t.work.title}
      </Link>

      <p className="t-label mt-8 text-accent">{project.category}</p>
      <h1 className="t-display mt-3 text-balance">{project.title}</h1>
      <p className="t-body mt-5 max-w-[60ch] text-pretty text-ink-2">{project.description}</p>

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-xl bg-sunken">
        <Image
          src={project.image}
          alt=""
          fill
          priority
          sizes="(min-width: 840px) 840px, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="mt-10 flex flex-col gap-6 border-t border-line/10 pt-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="t-label text-ink-3">{t.work.stack}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-accent/10 px-3 py-1.5 text-[13px] font-medium text-accent"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {project.github ? (
          <Pressable as="div" hitSlop={false} scale={0.97} className="rounded-full">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-accent-ink"
            >
              <BsGithub className="text-lg" />
              <span>{t.work.viewSource}</span>
              <FiArrowUpRight className="text-lg transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Pressable>
        ) : (
          <p className="t-caption max-w-[28ch] text-ink-3">{t.work.noSource}</p>
        )}
      </div>
    </article>
  );
}
