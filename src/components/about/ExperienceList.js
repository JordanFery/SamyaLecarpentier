export default function ExperienceList({ items, presentLabel }) {
  return (
    <ol>
      {items.map((job) => (
        <li key={job.id} className="grid gap-x-6 gap-y-3 border-b border-rule pt-1 pb-8 [&:not(:first-child)]:pt-8 md:grid-cols-[9rem_minmax(0,1fr)]">
          <p className="label pt-1.5 text-ink">
            {job.start} — {job.end ?? presentLabel}
          </p>
          <div>
            <h3 className="display text-h3">
              {job.role}
              <span className="text-graphite">, {job.company}</span>
            </h3>
            <p className="label mt-2">{job.context}</p>
            <ul className="mt-5 flex max-w-[64ch] flex-col gap-2 text-small text-graphite">
              {job.highlights.map((highlight) => (
                <li key={highlight} className="relative pl-5">
                  <span aria-hidden="true" className="absolute left-0 text-rule">
                    —
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
