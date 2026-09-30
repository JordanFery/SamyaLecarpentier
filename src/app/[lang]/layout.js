import { notFound } from "next/navigation";
import "../globals.css";
import { newsreader, schibsted } from "../fonts";
import { alternatesFor, isLocale, locales, openGraphLocales, otherLocale, paths } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { profile } from "@/content/profile";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

// TODO: set NEXT_PUBLIC_SITE_URL once the domain is chosen.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport = {
  themeColor: "#f3f0e8",
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: { default: meta.title, template: `%s — ${meta.siteName}` },
    description: meta.description,
    authors: [{ name: profile.name }],
    alternates: alternatesFor(lang, paths.home),
    openGraph: {
      type: "website",
      siteName: meta.siteName,
      locale: openGraphLocales[lang],
      alternateLocale: openGraphLocales[otherLocale(lang)],
    },
    twitter: { card: "summary_large_image" },
  };
}

function personJsonLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: lang === "fr" ? "Designer UX/UI" : "UX/UI Designer",
    worksFor: { "@type": "Organization", name: "Nutcache" },
    address: { "@type": "PostalAddress", addressLocality: profile.city, addressRegion: profile.region, addressCountry: "CA" },
    email: `mailto:${profile.email}`,
    url: new URL(paths.home(lang), siteUrl).href,
    sameAs: [profile.linkedin],
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${schibsted.variable}`}
    >
      <body>
        <a
          href="#content"
          className="label sr-only z-50 bg-signal px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {dict.a11y.skipToContent}
        </a>
        <SiteHeader lang={lang} dict={dict} name={profile.name} />
        <main id="content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter dict={dict} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(lang)) }}
        />
      </body>
    </html>
  );
}
