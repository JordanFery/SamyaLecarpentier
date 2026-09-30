import Link from "next/link";
import { lang as rootLang } from "next/root-params";
import { defaultLocale, isLocale, paths } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function NotFound() {
  const value = await rootLang();
  const lang = isLocale(value) ? value : defaultLocale;
  const { notFound } = getDictionary(lang);

  return (
    <div className="container-site grid-site gap-y-8 pt-16 pb-32 md:pt-24">
      <p className="label col-span-full border-b border-rule pb-4">404</p>
      <h1 className="display col-span-full text-h1 lg:col-span-8">{notFound.title}</h1>
      <div className="col-span-full md:col-span-6 lg:col-span-5 lg:col-start-7">
        <p className="text-body-lg">{notFound.body}</p>
        <Link href={paths.home(lang)} className="label link-draw mt-8 inline-flex min-h-11 items-center gap-2 text-ink">
          <span aria-hidden="true">←</span>
          {notFound.back}
        </Link>
      </div>
    </div>
  );
}
