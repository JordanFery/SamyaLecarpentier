/** Placeholder for content Samya still has to provide. Never rendered in production. */
export default function DraftNote({ note, dict }) {
  return (
    <div className="border border-dashed border-graphite p-5 md:p-6">
      <p className="flex flex-wrap items-center gap-3">
        <span className="label bg-signal px-2 py-1 text-night">{dict.project.draftBadge}</span>
        <span className="text-caption text-graphite">{dict.project.draftHint}</span>
      </p>
      <p className="mt-4 max-w-[62ch] text-graphite">{note}</p>
    </div>
  );
}
