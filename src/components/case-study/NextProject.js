import Link from "next/link";
import { paths } from "@/i18n/config";
import { keepTogether } from "@/lib/typography";

export default function NextProject({ project, lang, dict }) {
  return (
    <aside aria-labelledby="next-project-label" className="container-site mt-28 pb-24 md:mt-40 md:pb-32">
      <div className="group relative grid-site gap-y-4 border-t border-ink pt-4 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-8">
        <p id="next-project-label" className="label col-span-full text-ink lg:col-span-3">
          {dict.project.next}
        </p>
        <div className="col-span-full lg:col-span-9 lg:col-start-5">
          <p className="label flex gap-x-3">
            <span>{project.number}</span>
            <span>{project.client}</span>
          </p>
          <Link
            href={paths.project(lang, project.slug)}
            className="display stretched-link mt-3 inline-block text-h1 focus-visible:outline-none"
          >
            <span className="link-draw">{keepTogether(project.title)}</span>
            <span aria-hidden="true" className="ml-3 inline-block transition-transform duration-(--duration-base) ease-(--ease-standard) group-hover:translate-x-2 motion-reduce:transition-none">
              →
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
