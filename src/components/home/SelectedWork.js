import ProjectEntry from "@/components/project/ProjectEntry";

/**
 * Editorial rhythm for the index: a lead project, a split row, then an
 * offset pair. Projects beyond four reuse the sequence.
 */
const compositions = [
  {
    item: "col-span-full",
    layout: "stacked",
    ratio: "wide",
    sizes: "(min-width: 96rem) 88rem, 100vw",
  },
  {
    item: "col-span-full",
    layout: "split",
    ratio: "classic",
    sizes: "(min-width: 64rem) 64vw, 100vw",
  },
  {
    item: "col-span-full md:col-span-4 lg:col-span-7",
    layout: "stacked",
    ratio: "landscape",
    sizes: "(min-width: 64rem) 55vw, (min-width: 48rem) 50vw, 100vw",
  },
  {
    item: "col-span-full md:col-span-4 lg:col-span-4 lg:col-start-9 lg:mt-40",
    layout: "stacked",
    ratio: "portrait",
    sizes: "(min-width: 64rem) 32vw, (min-width: 48rem) 50vw, 100vw",
  },
];

export default function SelectedWork({ projects, lang, dict }) {
  const { home } = dict;

  return (
    <section id="work" aria-labelledby="work-title" className="container-site pb-24 md:pb-36">
      <div className="mb-10 flex items-baseline justify-between gap-6 border-t border-ink pt-4 md:mb-16">
        <h2 id="work-title" className="label text-ink">
          {home.workLabel}
        </h2>
        <p className="label">
          {String(projects.length).padStart(2, "0")} {home.workCount}
        </p>
      </div>

      <ul className="grid-site gap-y-20 md:gap-y-28">
        {projects.map((project, index) => {
          const composition = compositions[index % compositions.length];
          return (
            <li key={project.slug} className={composition.item}>
              <ProjectEntry
                project={project}
                lang={lang}
                dict={dict}
                layout={composition.layout}
                ratio={composition.ratio}
                sizes={composition.sizes}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
