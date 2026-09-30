import { NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

/** Picks the first supported language from the Accept-Language header. */
function preferredLocale(request) {
  const header = request.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, quality] = part.trim().split(";q=");
      return { lang: tag.slice(0, 2).toLowerCase(), q: quality ? Number(quality) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  return ranked.find(({ lang }) => locales.includes(lang))?.lang ?? defaultLocale;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const [, first] = pathname.split("/");
  if (isLocale(first)) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and any file with an extension (icons, robots, sitemap, images).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
