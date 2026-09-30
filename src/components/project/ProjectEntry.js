import Link from "next/link";
import { paths } from "@/i18n/config";
import { formatPeriod } from "@/lib/content";
import ProjectPlate from "./ProjectPlate";
import { keepTogether } from "@/lib/typography";

/**
 * One case study in the home index. `layout` controls the composition:
 * "stacked" (cover above text) or "split" (text beside cover on desktop).
 */
export default function ProjectEntry({ project, lang, dict, layout = "stacked", ratio, sizes, priority }) {
  const href = paths.project(lang, project.slug);
  const period = formatPeriod(project.period, dict.about.present);

  const text = (
    <div>
      <p className="label flex flex-wrap gap-x-3">
        <span className="text-ink">{project.number}</span>
        <span>{project.client}</span>
        <span>{period}</span>
      </p>
      <h3 className="display mt-3 text-h3">
        <Link
          href={href}
          className="link-draw stretched-link focus-visible:outline-none"
        >
          {keepTogether(project.title)}
        </Link>
      </h3>
      <p className="mt-3 max-w-[52ch] text-graphite">{project.summary}</p>
      <p className="label mt-4">{project.discipline}</p>
    </div>
  );

  if (layout === "split") {
    return (
      <article className="group relative grid-site gap-y-6 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-8">
        <div className="reveal col-span-full lg:col-span-8 lg:col-start-5 lg:row-start-1">
          <ProjectPlate project={project} ratio={ratio} sizes={sizes} priority={priority} />
        </div>
        <div className="col-span-full lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:self-end">{text}</div>
      </article>
    );
  }

  return (
    <article className="group relative has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-8">
      <div className="reveal">
        <ProjectPlate project={project} ratio={ratio} sizes={sizes} priority={priority} />
      </div>
      <div className="mt-6">{text}</div>
    </article>
  );
}
