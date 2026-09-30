import Link from "next/link";
import { paths } from "@/i18n/config";
import SiteNav from "./SiteNav";

export default function SiteHeader({ lang, dict, name }) {
  return (
    <header className="site-header sticky top-0 z-40 bg-paper">
      <div className="h-1 bg-signal" aria-hidden="true" />
      <div className="container-site flex h-(--header-height) items-center justify-between gap-6 border-b border-rule">
        <Link
          href={paths.home(lang)}
          className="display -my-2 py-2 text-[1.25rem] leading-none tracking-[-0.01em]"
        >
          {name}
        </Link>
        <SiteNav lang={lang} labels={{ ...dict.nav, ...dict.a11y }} />
      </div>
    </header>
  );
}
