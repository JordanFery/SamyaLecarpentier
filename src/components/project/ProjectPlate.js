import Image from "next/image";
import { ViewTransition } from "react";
import { keepTogether } from "@/lib/typography";

const accents = {
  forest: "bg-forest",
  ultramarine: "bg-ultramarine",
  brick: "bg-brick",
  ink: "bg-night",
};

const ratios = {
  wide: "aspect-[4/3] md:aspect-[16/9]",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
  classic: "aspect-[3/2]",
  hero: "aspect-[4/3] md:aspect-[21/9]",
};

/**
 * Project cover. Shows the real cover image when one exists
 * (`{ src, width, height, alt, fit?, background? }`); until then, a
 * typographic plate in the project's colour — set like a report cover.
 * Shares a view-transition name with the case study hero so it morphs.
 */
export default function ProjectPlate({ project, ratio = "landscape", sizes = "100vw", priority = false }) {
  const { cover } = project;
  // A cover shown whole ("contain") sits on its own background colour.
  const background = cover?.background ? "bg-(--plate-bg)" : accents[project.accent];

  return (
    <ViewTransition name={`plate-${project.slug}`} share="morph" default="none">
      <div
        className={`@container relative overflow-hidden ${ratios[ratio]} ${background}`}
        style={cover?.background ? { "--plate-bg": cover.background } : undefined}
      >
        <div className="absolute inset-0 transition-transform duration-700 ease-(--ease-standard) group-hover:scale-[1.015] motion-reduce:transition-none">
          {cover ? (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes={sizes}
              priority={priority}
              className={cover.fit === "contain" ? "object-contain" : "object-cover"}
            />
          ) : (
            <div aria-hidden="true" className="flex h-full flex-col justify-between p-[max(1rem,5cqi)] text-daylight">
              <div className="label flex justify-between text-daylight/70">
                <span>{project.client}</span>
                <span>{project.number}</span>
              </div>
              <p className="display max-w-[16ch] text-[clamp(1.625rem,8cqi,6.5rem)] leading-[0.98] tracking-[-0.02em]">
                {keepTogether(project.title)}
              </p>
            </div>
          )}
        </div>
      </div>
    </ViewTransition>
  );
}
