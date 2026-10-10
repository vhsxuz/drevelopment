import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { getContent } from "@/lib/content";
import { WHATSAPP_DISPLAY, localePath, locales, waLink } from "@/lib/i18n";
import LocaleSwitch from "./LocaleSwitch";

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/vhsxuz" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vincentius-andreas-alexander/",
  },
];

export default function Footer({ locale }) {
  const t = getContent(locale);
  const year = new Date().getFullYear();

  const links = [
    { key: "home", href: localePath(locale, "/") },
    { key: "work", href: localePath(locale, "/work") },
    { key: "events", href: localePath(locale, "/events") },
    { key: "playground", href: localePath(locale, "/playground") },
    { key: "contact", href: localePath(locale, "/contact") },
  ];

  return (
    <footer className="mt-24 border-t border-line/10 pb-[132px] pt-14 xl:pb-16">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[34ch]">
            <p className="t-subhead">{t.profile.name}</p>
            <p className="t-caption mt-2 text-pretty text-ink-2">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="t-caption text-ink-2 transition-colors hover:text-ink"
                >
                  {t.nav[link.key]}
                </Link>
              ))}
            </nav>

            {/* The CV was on the original portfolio and had no home after the
                rebuild. A plain download link needs no client JS. */}
            <a
              href={t.profile.cv}
              download
              className="t-caption inline-flex items-center gap-2 rounded-full border border-line/12 px-4 py-2 text-ink-2 transition-colors hover:border-accent/40 hover:text-accent"
            >
              <FiDownload className="text-[15px]" />
              {t.footer.cv}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-line/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <a
              href={waLink(t.segments.companies.cta.message)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
              className="flex h-10 items-center gap-2 rounded-full border border-line/12 px-4 text-ink-2 transition-colors hover:border-accent/40 hover:text-accent"
            >
              <FaWhatsapp className="text-[17px]" />
              <span className="t-caption">{WHATSAPP_DISPLAY}</span>
            </a>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line/12 text-ink-2 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <social.icon className="text-[17px]" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LocaleSwitch locale={locale} locales={locales} label={t.footer.language} />
            <p className="t-caption text-ink-3">
              © {year} {t.profile.name}. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
