/** Project fact sheet — role, period, context… as a definition list. */
export default function MetaList({ items, className = "" }) {
  return (
    <dl className={`border-t border-ink ${className}`}>
      {items.map(({ label, value }) => (
        <div key={label} className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-4 border-b border-rule py-3">
          <dt className="label pt-0.5">{label}</dt>
          <dd className="text-small">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
