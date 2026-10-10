import { SITE_URL } from "@/lib/i18n";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Client microsites carry guest lists. They never belong in an index.
      disallow: ["/id/events/", "/en/events/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
