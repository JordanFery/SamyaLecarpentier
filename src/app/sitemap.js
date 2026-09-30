import { locales, paths } from "@/i18n/config";
import { getProjectSlugs } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function entry(pathFor) {
  return locales.map((lang) => ({
    url: `${siteUrl}${pathFor(lang)}`,
    alternates: {
      languages: Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}${pathFor(locale)}`])),
    },
  }));
}

export default function sitemap() {
  return [
    ...entry(paths.home),
    ...entry(paths.about),
    ...getProjectSlugs().flatMap((slug) => entry((lang) => paths.project(lang, slug))),
  ];
}
