import en from "./en";
import id from "./id";
import { defaultLocale, isLocale } from "@/lib/i18n";

const dictionaries = { en, id };

/** Copy for one locale. Falls back to the default rather than throwing. */
export function getContent(locale) {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}

export { getProjects, getProject, projects, eventShowcase } from "./projects";
