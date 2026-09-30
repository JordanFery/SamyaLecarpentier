import Link from "next/link";
import { paths } from "@/i18n/config";

export default function AboutTeaser({ teaser, lang, dict }) {
  const { home } = dict;

  return (
    <section aria-labelledby="about-teaser-title" className="container-site py-24 md:py-36">
      <div className="grid-site gap-y-6 border-t border-ink pt-4">
        <h2 id="about-teaser-title" className="label col-span-full text-ink lg:col-span-3">
          {home.aboutLabel}
        </h2>
        <div className="col-span-full md:col-span-7 lg:col-span-8 lg:col-start-5">
          <p className="display text-h3 leading-[1.3]">{teaser}</p>
          <Link
            href={paths.about(lang)}
            className="label link-draw mt-8 inline-flex min-h-11 items-center gap-2 text-ink"
          >
            {home.aboutLink}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
