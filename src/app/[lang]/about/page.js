import { alternatesFor, paths } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getAbout, getEducation, getExperience, getSkills } from "@/lib/content";
import PageTransition from "@/components/ui/PageTransition";
import AboutSection from "@/components/about/AboutSection";
import ExperienceList from "@/components/about/ExperienceList";
import DraftNote from "@/components/ui/DraftNote";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const about = getAbout(lang);

  return {
    title: dict.about.title,
    description: about.teaser,
    alternates: alternatesFor(lang, paths.about),
  };
}

export default async function AboutPage({ params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const about = getAbout(lang);
  const education = getEducation(lang);

  return (
    <PageTransition>
      <div className="container-site flex flex-col gap-24 pt-10 pb-24 md:gap-32 md:pt-16 md:pb-36">
        <header className="grid-site gap-y-10">
          <p className="label col-span-full border-b border-rule pb-4">{dict.about.title}</p>
          <h1 className="display col-span-full text-h1 lg:col-span-9">{about.title}</h1>
          <div className="col-span-full flex flex-col gap-6 md:col-span-6 md:col-start-3 lg:col-span-6 lg:col-start-7">
            {about.intro.map((paragraph) => (
              <p key={paragraph} className="text-body-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </header>

        <AboutSection id="brings-title" title={dict.about.brings}>
          <ol className="grid gap-x-(--gutter) gap-y-10 md:grid-cols-2">
            {about.brings.map((item, index) => (
              <li key={item.title}>
                <p className="label text-ink" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="display mt-3 text-h3">{item.title}</h3>
                <p className="mt-3 text-graphite">{item.body}</p>
              </li>
            ))}
          </ol>
        </AboutSection>

        {about.draft && (
          <AboutSection id="approach-title" title={about.draft.heading}>
            <DraftNote note={about.draft.note} dict={dict} />
          </AboutSection>
        )}

        <AboutSection id="experience-title" title={dict.about.experience}>
          <ExperienceList items={getExperience(lang)} presentLabel={dict.about.present} />
        </AboutSection>

        <AboutSection id="education-title" title={dict.about.education}>
          <div className="grid gap-x-6 gap-y-2 pt-1 md:grid-cols-[9rem_minmax(0,1fr)]">
            <p className="label pt-1.5 text-ink">{education.year}</p>
            <div>
              <h3 className="display text-h3">{education.degree}</h3>
              <p className="mt-2 text-small text-graphite">{education.school}</p>
            </div>
          </div>
        </AboutSection>

        <AboutSection id="skills-title" title={dict.about.skills}>
          <div className="grid gap-x-(--gutter) gap-y-10 pt-1 sm:grid-cols-2">
            {getSkills(lang).map((group) => (
              <div key={group.heading}>
                <h3 className="label text-ink">{group.heading}</h3>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AboutSection>
      </div>
    </PageTransition>
  );
}
