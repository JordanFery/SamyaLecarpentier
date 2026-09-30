export const locales = ["fr", "en"];
export const defaultLocale = "fr";

export const localeNames = {
  fr: "Français",
  en: "English",
};

export const openGraphLocales = {
  fr: "fr_CA",
  en: "en_CA",
};

export function isLocale(value) {
  return locales.includes(value);
}

export function otherLocale(lang) {
  return lang === "fr" ? "en" : "fr";
}

/**
 * Public URL segments per locale. The route folders use the English name;
 * French segments are rewritten in next.config.mjs.
 */
const segments = {
  work: { fr: "projets", en: "work" },
  about: { fr: "a-propos", en: "about" },
};

export const paths = {
  home: (lang) => `/${lang}`,
  work: (lang) => `/${lang}#work`,
  contact: (lang) => `/${lang}#contact`,
  about: (lang) => `/${lang}/${segments.about[lang]}`,
  project: (lang, slug) => `/${lang}/${segments.work[lang]}/${slug}`,
};

/** Maps any pathname of the site to its equivalent in the target locale. */
export function translatePath(pathname, target) {
  const [, , section, ...rest] = pathname.split("/");
  if (!section) return paths.home(target);

  const key = Object.keys(segments).find((name) =>
    Object.values(segments[name]).includes(section),
  );
  if (!key) return paths.home(target);

  return ["", target, segments[key][target], ...rest].join("/");
}

/** Canonical + hreflang alternates for the Metadata API. */
export function alternatesFor(lang, pathFor) {
  return {
    canonical: pathFor(lang),
    languages: {
      ...Object.fromEntries(locales.map((locale) => [locale, pathFor(locale)])),
      "x-default": pathFor(defaultLocale),
    },
  };
}
