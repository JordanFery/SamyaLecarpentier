/** Sticky contents list for long case studies (desktop only). */
export default function CaseStudyToc({ sections, label, className = "" }) {
  return (
    <nav aria-label={label} className={className}>
      <ol className="sticky top-[calc(var(--header-height)+2.5rem)] border-t border-ink">
        {sections.filter((section) => section.heading).map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="group flex min-h-11 items-baseline gap-3 border-b border-rule py-2.5 text-small"
            >
              <span className="label" aria-hidden="true">
                {section.number}
              </span>
              <span className="link-draw">{section.heading}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
