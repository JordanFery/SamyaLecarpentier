import { projects } from "@/content/projects";
import { about, education, experience, skills } from "@/content/profile";
import { graphicWork } from "@/content/graphic-work";
import { withTypography } from "@/lib/typography";

/**
 * Draft blocks mark content Samya still has to provide. They are shown in
 * development (or with NEXT_PUBLIC_SHOW_DRAFTS=true on a preview) and never
 * rendered in a production build.
 */
export const showDrafts =
  process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_SHOW_DRAFTS === "true";

const isVisibleBlock = (block) => block.type !== "draft" || showDrafts;

/**
 * A section is either a list of `blocks`, or a single block written inline
 * (shorthand: `{ id, heading, type, ... }`). Draft blocks are dropped outside
 * development; sections left empty disappear. Only titled sections are
 * numbered and listed in the table of contents; a section without a heading
 * reads as a closing paragraph.
 */
function normaliseSections(sections) {
  let count = 0;
  return sections
    .map(({ id, heading, blocks, ...block }) => ({
      id,
      heading,
      blocks: (blocks ?? [block]).filter(isVisibleBlock),
    }))
    .filter((section) => section.blocks.length > 0)
    .map((section) => ({
      ...section,
      number: section.heading ? String(++count).padStart(2, "0") : null,
    }));
}

function localise(project, lang, index) {
  const { fr, en, ...shared } = project;
  const copy = withTypography(lang === "fr" ? fr : en, lang);
  return {
    ...shared,
    ...copy,
    number: String(index + 1).padStart(2, "0"),
    sections: normaliseSections(copy.sections),
  };
}

export function getProjects(lang) {
  return projects.map((project, index) => localise(project, lang, index));
}

export function getProject(lang, slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return null;

  const nextIndex = (index + 1) % projects.length;
  return {
    ...localise(projects[index], lang, index),
    next: localise(projects[nextIndex], lang, nextIndex),
  };
}

export function getProjectSlugs() {
  return projects.map(({ slug }) => slug);
}

export function getAbout(lang) {
  const copy = withTypography(about[lang], lang);
  return { ...copy, draft: showDrafts ? copy.draft : null };
}

export function getExperience(lang) {
  return experience.map(({ fr, en, ...shared }) => ({ ...shared, ...withTypography(lang === "fr" ? fr : en, lang) }));
}

export function getEducation(lang) {
  return { year: education.year, ...withTypography(education[lang], lang) };
}

export function getSkills(lang) {
  return withTypography(skills[lang], lang);
}

export function getGraphicWork(lang) {
  return graphicWork.map(({ fr, en, ...shared }) => ({ ...shared, ...withTypography(lang === "fr" ? fr : en, lang) }));
}

export function formatPeriod({ start, end }, presentLabel) {
  return `${start} — ${end ?? presentLabel}`;
}
