/**
 * Locale and segment constants.
 *
 * `id` is the default because the two segments that convert - MSMEs and
 * wedding couples - search in Indonesian. Both locales are prerendered; there
 * is no middleware, because a middleware hop costs TTFB on every request and
 * buys nothing a static redirect cannot do.
 */
export const locales = ["id", "en"];
export const defaultLocale = "id";

export const segments = ["companies", "msme", "weddings"];
export const defaultSegment = "companies";

export function isLocale(value) {
  return locales.includes(value);
}

export function isSegment(value) {
  return segments.includes(value);
}

/** Prefixes a path with the locale. `/work` -> `/id/work` */
export function localePath(locale, path = "/") {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/** The hreflang map Next.js wants in `alternates.languages`. */
export function languageAlternates(path = "/") {
  return {
    "id-ID": localePath("id", path),
    "en-US": localePath("en", path),
  };
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://drevelopment.vercel.app";

export const WHATSAPP_NUMBER = "6287878197989";
export const WHATSAPP_DISPLAY = "+62 878 7819 7989";

/**
 * A wa.me deep link with the message already written. The prefill removes the
 * blank-box hesitation that kills contact forms, and it says which page the
 * person came from before they type a word.
 */
export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
