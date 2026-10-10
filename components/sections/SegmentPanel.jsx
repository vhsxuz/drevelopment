import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { localePath, waLink } from "@/lib/i18n";
import Pressable from "@/components/motion/Pressable";

/**
 * One audience's pillars, case studies and CTA. Rendered on the server three
 * times - once per segment - and handed to the switcher as children.
 */
export default function SegmentPanel({ locale, segment, copy, projects, t }) {
  return (
    <div className="flex flex-col gap-12">
      <p className="t-body mx-auto max-w-[60ch] text-balance text-center text-ink-2">
        {copy.subline}
      </p>

      <ul className="grid gap-5 md:grid-cols-3">
        {copy.pillars.map((pillar) => (
          <li key={pillar.title} className="card flex flex-col gap-3 p-7">
            <h3 className="t-heading text-pretty">{pillar.title}</h3>
            <p className="t-body text-pretty text-ink-2">{pillar.body}</p>
            <div className="mt-auto border-t border-line/10 pt-4">
              <p className="t-label text-accent">{t.common.deliverable}</p>
              <p className="t-caption mt-1.5 text-pretty">{pillar.deliverable}</p>
            </div>
          </li>
        ))}
      </ul>

      {projects.length > 0 && (
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
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
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <h3 className="t-subhead transition-colors duration-300 group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="t-caption line-clamp-2 text-pretty text-ink-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </Pressable>
            </li>
          ))}
        </ul>
      )}

      <div className="card flex flex-col gap-5 p-8 text-center sm:p-12">
        <h3 className="t-title text-balance">{copy.cta.heading}</h3>
        <p className="t-body mx-auto max-w-[52ch] text-pretty text-ink-2">{copy.cta.body}</p>
        <div className="mt-2 flex justify-center">
          <Pressable as="div" hitSlop={false} scale={0.97} className="rounded-full">
            {segment === "weddings" ? (
              <a
                href="#live-demo"
                className="group flex h-[52px] items-center gap-2 rounded-full bg-accent px-7 text-[17px] font-semibold text-accent-ink"
              >
                <span>{copy.cta.button}</span>
                <FiArrowUpRight className="text-xl transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <a
                href={waLink(copy.cta.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[52px] items-center gap-2 rounded-full bg-accent px-7 text-[17px] font-semibold text-accent-ink"
              >
                <FaWhatsapp className="text-xl" />
                <span>{copy.cta.button}</span>
              </a>
            )}
          </Pressable>
        </div>
      </div>
    </div>
  );
}
