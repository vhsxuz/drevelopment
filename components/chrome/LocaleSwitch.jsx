"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { spring } from "@/lib/motion";

const names = { id: "ID", en: "EN" };

/**
 * Swaps the locale segment in place, so switching language keeps you on the
 * page you were reading instead of dumping you at the home page.
 */
export default function LocaleSwitch({ locale, locales, label }) {
  const pathname = usePathname();

  const swap = (next) => {
    const parts = pathname.split("/");
    parts[1] = next; // ["", "<locale>", ...rest]
    return parts.join("/") || `/${next}`;
  };

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only">{label}</span>
      <div className="flex gap-0.5 rounded-full bg-sunken p-0.5" role="group" aria-label={label}>
        {locales.map((code) => {
          const active = code === locale;
          return (
            <Link
              key={code}
              href={swap(code)}
              hrefLang={code}
              aria-current={active ? "true" : undefined}
              className="relative rounded-full px-3 py-1.5"
              style={{ touchAction: "manipulation" }}
            >
              {active && (
                <motion.span
                  layoutId="locale-indicator"
                  transition={spring.snappy}
                  className="absolute inset-0 rounded-full bg-surface shadow-sm"
                />
              )}
              <span
                className={`relative z-10 text-[12px] font-semibold ${
                  active ? "text-ink" : "text-ink-3"
                }`}
              >
                {names[code]}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
