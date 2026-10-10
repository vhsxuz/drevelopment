import { projects } from "@/lib/content";
import { SITE_URL, locales, segments } from "@/lib/i18n";

/**
 * Generated from the same source as the routes, so a new case study appears
 * here without a second edit. `changeFrequency` is honest: a portfolio that
 * claims daily updates and changes twice a year gets its sitemap discounted.
 */
export default function sitemap() {
  const now = new Date();
  const entries = [];

  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    });

    for (const page of ["work", "events", "playground", "contact"]) {
      entries.push({
        url: `${SITE_URL}/${locale}/${page}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    for (const segment of segments) {
      entries.push({
        url: `${SITE_URL}/${locale}/services/${segment}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }

    for (const project of projects) {
      entries.push({
        url: `${SITE_URL}/${locale}/work/${project.slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
