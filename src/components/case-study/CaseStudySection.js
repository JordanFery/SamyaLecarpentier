import Image from "next/image";
import DraftNote from "@/components/ui/DraftNote";

function ListItem({ item }) {
  if (typeof item === "string") return item;
  return (
    <>
      <span className="block font-medium">{item.title}</span>
      <span className="mt-1 block text-body text-graphite">{item.body}</span>
    </>
  );
}

/** Content column is ~60vw on desktop; halves for side-by-side comparisons. */
const imageSizes = {
  full: "(min-width: 64rem) 60vw, (min-width: 48rem) 85vw, 100vw",
  half: "(min-width: 64rem) 30vw, (min-width: 40rem) 45vw, 100vw",
  phone: "(min-width: 40rem) 18rem, 45vw",
  third: "(min-width: 64rem) 20vw, 45vw",
};

function Shot({ image, sizes, label }) {
  return (
    <div>
      {label && <p className="label mb-3 text-ink">{label}</p>}
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        className="w-full border border-rule bg-paper-deep"
      />
    </div>
  );
}

/**
 * Compare layouts: "stack" for landscape screens, "side" for tall desktop
 * pages (stacked on small screens), "phone" for mobile screens (always paired).
 */
const compareLayouts = {
  stack: { grid: "grid gap-8", sizes: imageSizes.full },
  side: { grid: "grid gap-6 sm:grid-cols-2 sm:items-start", sizes: imageSizes.half },
  phone: { grid: "grid max-w-xl grid-cols-2 items-start gap-4 sm:gap-6", sizes: imageSizes.phone },
};

function Block({ block, dict }) {
  switch (block.type) {
    case "text":
      return (
        <div className={`flex flex-col gap-4 ${block.heading ? "[&:not(:first-child)]:mt-8" : ""}`}>
          {block.heading && <h3 className="display text-h3">{block.heading}</h3>}
          {block.body.map((paragraph) => (
            <p key={paragraph} className="max-w-[62ch] text-body-lg">
              {paragraph}
            </p>
          ))}
        </div>
      );

    case "statement":
      return <p className="display max-w-[28ch] text-h2 italic">{block.text}</p>;

    case "facts":
      return (
        <ul className="grid gap-x-(--gutter) gap-y-6 sm:grid-cols-3">
          {block.items.map((fact) => (
            <li key={fact.label} className="border-t border-ink pt-3">
              <span className="display block text-h1 tabular-nums">{fact.value}</span>
              <span className="mt-2 block text-small text-graphite">{fact.label}</span>
            </li>
          ))}
        </ul>
      );

    case "list":
      return (
        <ul className="border-t border-rule">
          {block.items.map((item) => (
            <li key={typeof item === "string" ? item : item.title} className="border-b border-rule py-4 text-body-lg">
              <ListItem item={item} />
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="border-t border-rule">
          {block.items.map((item, index) => (
            <li key={item} className="grid grid-cols-[3rem_minmax(0,1fr)] border-b border-rule py-4">
              <span className="label pt-1.5 text-ink" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-body-lg">{item}</span>
            </li>
          ))}
        </ol>
      );

    case "image":
      return (
        <figure>
          <Shot image={block} sizes={imageSizes.full} />
          {block.caption && <figcaption className="mt-3 text-caption text-graphite">{block.caption}</figcaption>}
        </figure>
      );

    case "compare": {
      const layout = compareLayouts[block.layout ?? "side"];
      return (
        <figure>
          <div className={layout.grid}>
            <Shot image={block.current} sizes={layout.sizes} label={dict.project.current} />
            <Shot image={block.proposed} sizes={layout.sizes} label={dict.project.proposed} />
          </div>
          {block.caption && <figcaption className="mt-3 text-caption text-graphite">{block.caption}</figcaption>}
        </figure>
      );
    }

    case "gallery":
      return (
        <figure>
          <ul
            className={`grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:gap-x-6 ${
              block.items.length === 2 ? (block.wide ? "" : "max-w-xl") : "lg:grid-cols-3"
            }`}
          >
            {block.items.map((item) => (
              <li key={item.src}>
                <Shot image={item} sizes={block.wide ? imageSizes.half : imageSizes.third} />
                <p className="mt-3 text-caption text-graphite">{item.caption}</p>
              </li>
            ))}
          </ul>
          {block.caption && <figcaption className="mt-6 text-caption text-graphite">{block.caption}</figcaption>}
        </figure>
      );

    case "draft":
      return <DraftNote note={block.note} dict={dict} />;

    default:
      return null;
  }
}

export default function CaseStudySection({ section, dict }) {
  const headingId = `${section.id}-title`;
  const blocks = section.blocks.map((block, index) => <Block key={index} block={block} dict={dict} />);

  // Untitled section: a closing paragraph, set apart by a rule.
  if (!section.heading) {
    return (
      <div id={section.id} className="flex flex-col gap-8 border-t border-ink pt-8">
        {blocks}
      </div>
    );
  }

  return (
    <section id={section.id} aria-labelledby={headingId} className="scroll-mt-(--header-height)">
      <p className="label" aria-hidden="true">
        {section.number}
      </p>
      <h2 id={headingId} className="display mt-2 mb-8 text-h2">
        {section.heading}
      </h2>
      <div className="flex flex-col gap-8">
        {blocks}
      </div>
    </section>
  );
}
