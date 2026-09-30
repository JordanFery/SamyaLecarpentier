export default function GraphicWork({ items, dict }) {
  const { home } = dict;

  return (
    <section aria-labelledby="graphic-title" className="bg-paper-deep">
      <div className="container-site grid-site gap-y-12 py-24 md:py-32">
        <div className="col-span-full lg:col-span-5">
          <p className="label">{home.graphicLabel}</p>
          <h2 id="graphic-title" className="display mt-4 text-h2">
            {home.graphicTitle}
          </h2>
          <p className="mt-6 max-w-[44ch] text-graphite">{home.graphicIntro}</p>
        </div>

        <ul className="col-span-full border-t border-ink lg:col-span-6 lg:col-start-7">
          {items.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1 border-b border-rule py-5"
            >
              <p className="display text-body-lg">{item.title}</p>
              <p className="label self-center text-right">{item.client}</p>
              {item.detail && <p className="text-small text-graphite">{item.detail}</p>}
              <p className="label col-start-2 text-right">{item.years}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
