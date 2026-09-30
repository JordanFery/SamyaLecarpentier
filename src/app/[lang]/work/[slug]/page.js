import Link from "next/link";
import { notFound } from "next/navigation";
import { alternatesFor, paths } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { formatPeriod, getProject, getProjectSlugs } from "@/lib/content";
import { keepTogether } from "@/lib/typography";
import PageTransition from "@/components/ui/PageTransition";
import ProjectPlate from "@/components/project/ProjectPlate";
import MetaList from "@/components/case-study/MetaList";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import CaseStudyToc from "@/components/case-study/CaseStudyToc";
import NextProject from "@/components/case-study/NextProject";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const project = getProject(lang, slug);
  if (!project) return {};

  return {
    title: `${project.title} · ${project.client}`,
    description: project.summary,
    alternates: alternatesFor(lang, (locale) => paths.project(locale, slug)),
    openGraph: { type: "article", title: `${project.title} · ${project.client}`, description: project.summary },
  };
}

function factSheet(project, dict) {
  const { meta } = project;
  return [
    { label: dict.project.role, value: meta.role },
    { label: dict.project.period, value: formatPeriod(project.period, dict.about.present) },
    { label: dict.project.context, value: `${project.client} — ${meta.context}` },
    meta.team && { label: dict.project.team, value: meta.team },
    meta.tools && { label: dict.project.tools, value: meta.tools },
    { label: dict.project.location, value: meta.location },
  ].filter(Boolean);
}

export default async function CaseStudyPage({ params }) {
  const { lang, slug } = await params;
  const project = getProject(lang, slug);
  if (!project) notFound();
  const dict = getDictionary(lang);

  return (
    <PageTransition>
      <div aria-hidden="true" className="reading-progress fixed inset-x-0 top-0 z-50 h-1 bg-ink" />

      <article>
        <header className="container-site pt-6 md:pt-10">
          <Link href={paths.work(lang)} className="label link-draw inline-flex min-h-11 items-center gap-2 text-ink">
            <span aria-hidden="true">←</span>
            {dict.project.back}
          </Link>

          <div className="grid-site mt-8 gap-y-8 md:mt-14">
            <p className="label col-span-full flex flex-wrap gap-x-3">
              <span className="text-ink">{project.number}</span>
              <span>{project.client}</span>
              <span>{project.discipline}</span>
            </p>
            <h1 className="display col-span-full text-h1 lg:col-span-10">{keepTogether(project.title)}</h1>
            <p className="col-span-full text-body-lg lg:col-span-6">{project.summary}</p>
            <MetaList
              items={factSheet(project, dict)}
              className="col-span-full md:col-span-6 lg:col-span-5 lg:col-start-8"
            />
          </div>
        </header>

        <div className="container-site mt-12 md:mt-20">
          <ProjectPlate project={project} ratio="hero" sizes="(min-width: 96rem) 88rem, 100vw" priority />
        </div>

        <div className="container-site grid-site mt-20 gap-y-20 md:mt-28">
          <CaseStudyToc
            sections={project.sections}
            label={dict.a11y.tableOfContents}
            className="hidden lg:col-span-3 lg:block"
          />
          <div className="col-span-full flex flex-col gap-20 md:col-span-7 lg:col-span-8 lg:col-start-5 md:gap-28">
            {project.sections.map((section) => (
              <CaseStudySection key={section.id} section={section} dict={dict} />
            ))}
          </div>
        </div>

        <NextProject project={project.next} lang={lang} dict={dict} />
      </article>
    </PageTransition>
  );
}
