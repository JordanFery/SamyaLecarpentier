"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { localeNames, otherLocale, paths, translatePath } from "@/i18n/config";

function navItems(lang, pathname, labels) {
  const aboutPath = paths.about(lang);
  const workPrefix = paths.project(lang, "");
  return [
    { href: paths.work(lang), label: labels.work, current: pathname.startsWith(workPrefix) ? "true" : undefined },
    { href: aboutPath, label: labels.about, current: pathname === aboutPath ? "page" : undefined },
    { href: paths.contact(lang), label: labels.contact },
  ];
}

function LanguageSwitch({ lang, pathname, label, className = "" }) {
  const target = otherLocale(lang);
  return (
    <Link
      href={translatePath(pathname, target)}
      hrefLang={target}
      lang={target}
      aria-label={label}
      title={localeNames[target]}
      className={`label inline-flex min-h-11 min-w-11 items-center justify-center text-ink ${className}`}
    >
      <span aria-hidden="true">{target.toUpperCase()}</span>
    </Link>
  );
}

export default function SiteNav({ lang, labels }) {
  const pathname = usePathname();
  const dialogRef = useRef(null);
  const items = navItems(lang, pathname, labels);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  const closeOnLinkClick = (event) => {
    if (event.target.closest("a")) dialogRef.current?.close();
  };

  return (
    <>
      <nav aria-label={labels.mainNav} className="hidden md:block">
        <ul className="flex items-center gap-8">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={item.current}
                className="link-draw text-small"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="border-l border-rule pl-4">
            <LanguageSwitch lang={lang} pathname={pathname} label={labels.switchLanguage} />
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="label -mr-3 inline-flex min-h-11 items-center px-3 text-ink md:hidden"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
      >
        Menu
      </button>

      <dialog
        ref={dialogRef}
        closedby="any"
        aria-label={labels.mainNav}
        className="mobile-menu md:hidden"
      >
        <div className="container-site flex h-full flex-col">
          <div className="flex h-(--header-height) items-center justify-between border-b border-rule">
            <LanguageSwitch lang={lang} pathname={pathname} label={labels.switchLanguage} className="-ml-3" />
            <form method="dialog">
              <button type="submit" className="label -mr-3 inline-flex min-h-11 items-center px-3 text-ink">
                {labels.closeMenu}
              </button>
            </form>
          </div>
          <nav aria-label={labels.mainNav} className="flex-1 pt-10" onClick={closeOnLinkClick}>
            <ul className="flex flex-col gap-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={item.current}
                    className="display block py-2 text-h1 aria-[current]:italic"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </dialog>
    </>
  );
}
