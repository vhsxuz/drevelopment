"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  IoBriefcaseOutline,
  IoCalendarOutline,
  IoGridOutline,
  IoHomeOutline,
  IoSparklesOutline,
} from "react-icons/io5";
import { getContent } from "@/lib/content";
import { localePath } from "@/lib/i18n";
import { spring } from "@/lib/motion";

const icons = {
  home: IoHomeOutline,
  services: IoGridOutline,
  work: IoBriefcaseOutline,
  events: IoCalendarOutline,
  playground: IoSparklesOutline,
};

/**
 * Compact widths get a bottom tab bar rather than a hamburger behind a sheet:
 * every destination is one tap away and permanently visible, which answers
 * "where can I go?" without a detour.
 */
export default function TabBar({ locale }) {
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
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-2 xl:hidden"
    >
      <div className="material-thick material-edge mx-auto flex max-w-[480px] items-stretch justify-between rounded-[26px] p-1.5">
        {links.map((link) => {
          const Icon = icons[link.key];
          const active = isActive(link.href);
          return (
            <Link
              key={link.key}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className="relative flex flex-1 flex-col items-center gap-1 rounded-[20px] py-2"
              style={{ touchAction: "manipulation" }}
            >
              {active && (
                <motion.span
                  layoutId="tab-indicator"
                  transition={spring.snappy}
                  className="absolute inset-0 rounded-[20px] bg-ink/8"
                />
              )}
              <Icon
                className={`relative z-10 text-[20px] transition-colors duration-200 ${
                  active ? "text-accent" : "text-ink-3"
                }`}
              />
              <span
                className={`relative z-10 text-[10px] transition-colors duration-200 ${
                  active ? "font-semibold text-ink" : "text-ink-3"
                }`}
              >
                {t.nav[link.key]}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
