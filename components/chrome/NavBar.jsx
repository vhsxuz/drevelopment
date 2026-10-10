"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { getContent } from "@/lib/content";
import { localePath, waLink } from "@/lib/i18n";
import { spring } from "@/lib/motion";
import Pressable from "@/components/motion/Pressable";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * A floating translucent bar, not an opaque strip. Content scrolls underneath,
 * which is what makes the layer read as chrome hovering over the page rather
 * than a region carved out of it.
 *
 * The active indicator is one shared element (layoutId): moving between links
 * is a single object travelling, and because layout animations are springs,
 * catching it mid-travel re-targets from where it actually is.
 */
export default function NavBar({ locale }) {
  const pathname = usePathname();
  const t = getContent(locale);

  const links = [
    { key: "home", href: localePath(locale, "/") },
    { key: "services", href: localePath(locale, "/services/companies") },
    { key: "work", href: localePath(locale, "/work") },
    { key: "events", href: localePath(locale, "/events") },
    { key: "playground", href: localePath(locale, "/playground") },
  ];

  const isActive = (href) =>
    href === localePath(locale, "/")
      ? pathname === href
      : pathname.startsWith(href.split("/").slice(0, 3).join("/"));

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-5 pt-[var(--bar-inset)]">
      <div className="container mx-auto flex items-center justify-between gap-4 px-0">
        <Pressable as="div" hitSlop={false} scale={0.96} className="pointer-events-auto rounded-full">
          <Link
            href={localePath(locale, "/")}
            className="material material-edge flex h-[var(--bar-h)] items-center gap-0.5 rounded-full px-5 shadow-md"
          >
            <span className="vibrant text-[17px] font-semibold tracking-[-0.02em]">Andreas</span>
            <span className="text-[22px] leading-none text-accent">.</span>
          </Link>
        </Pressable>

        <nav
          aria-label="Primary"
          className="material material-edge pointer-events-auto hidden h-[var(--bar-h)] items-center rounded-full px-1.5 shadow-md xl:flex"
        >
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.key}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className="relative flex h-9 items-center rounded-full px-4"
              >
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    transition={spring.snappy}
                    className="absolute inset-0 rounded-full bg-ink/8"
                  />
                )}
                <span
                  className={`relative z-10 text-[15px] transition-colors duration-200 ${
                    active ? "vibrant text-ink" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {t.nav[link.key]}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="material material-edge pointer-events-auto flex h-[var(--bar-h)] items-center gap-1.5 rounded-full px-2 shadow-md">
          <ThemeToggle label={t.common.toggleTheme} />
          <Pressable as="div" hitSlop={false} scale={0.96} className="rounded-full">
            <a
              href={waLink(t.segments.companies.cta.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 items-center rounded-full bg-accent px-4 text-[15px] font-semibold text-accent-ink"
            >
              {t.nav.contact}
            </a>
          </Pressable>
        </div>
      </div>
    </header>
  );
}
