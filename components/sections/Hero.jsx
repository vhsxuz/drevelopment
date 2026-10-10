import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { localePath, waLink } from "@/lib/i18n";
import Pressable from "@/components/motion/Pressable";

/**
 * The landing hero.
 *
 * MinimalistHero renders no header here on purpose: the site already has a
 * floating NavBar fixed over the page, and a second nav row would collide
 * with it. Its footer row is used, since the chrome has nothing there.
 */
export default function Hero({ locale, t }) {
  // Rendered elements, not component references: this is a Server Component,
  // and functions cannot cross into a Client Component.
  const socialLinks = [
    {
      icon: <FaGithub className="h-5 w-5" />,
      href: "https://github.com/vhsxuz",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/vincentius-andreas-alexander/",
      label: "LinkedIn",
    },
    {
      icon: <FaWhatsapp className="h-5 w-5" />,
      href: waLink(t.segments.companies.cta.message),
      label: "WhatsApp",
    },
  ];

  return (
    <section className="container mx-auto">
      <MinimalistHero
        mainText={t.hero.lead}
        readMoreLink={`${localePath(locale, "/work")}`}
        readMoreLabel={t.hero.readMore}
        imageSrc={t.profile.photo}
        imageAlt={`${t.profile.name}, ${t.profile.role}`}
        overlayText={t.hero.overlay}
        socialLinks={socialLinks}
        locationText={t.hero.location}
        // The brand blue rather than the reference's yellow. Swap this one
        // class for `bg-yellow-400/90` to get the original look back.
        discClassName="bg-accent"
        className="min-h-[calc(100dvh-180px)] justify-center gap-10 md:min-h-[calc(100dvh-160px)]"
      />

      <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
        <Pressable as="div" hitSlop={false} scale={0.97} className="w-full rounded-full sm:w-auto">
          <Link
            href={localePath(locale, "/work")}
            className="flex h-[52px] items-center justify-center gap-2 rounded-full bg-accent px-7 text-[17px] font-semibold text-accent-ink"
          >
            {t.hero.primary}
          </Link>
        </Pressable>
        <Pressable as="div" hitSlop={false} scale={0.97} className="w-full rounded-full sm:w-auto">
          <a
            href="#audience-heading"
            className="flex h-[52px] items-center justify-center gap-2 rounded-full border border-line/20 px-7 text-[17px] font-semibold text-ink transition-colors hover:bg-ink/5"
          >
            {t.hero.secondary}
          </a>
        </Pressable>
      </div>
    </section>
  );
}
