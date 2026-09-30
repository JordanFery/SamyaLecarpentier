/** Two-column editorial row: label heading on the left, content on the right. */
export default function AboutSection({ id, title, children }) {
  return (
    <section aria-labelledby={id} className="grid-site gap-y-8 border-t border-ink pt-4">
      <h2 id={id} className="label col-span-full text-ink lg:col-span-3">
        {title}
      </h2>
      <div className="col-span-full lg:col-span-8 lg:col-start-5">{children}</div>
    </section>
  );
}
