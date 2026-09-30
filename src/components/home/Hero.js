export default function Hero({ dict }) {
  const { home } = dict;

  return (
    <section aria-labelledby="hero-title" className="container-site pt-10 pb-20 md:pt-16 md:pb-28 lg:pb-36">
      <div className="grid-site gap-y-10 md:gap-y-14">
        <p className="label col-span-full flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-rule pb-4">
          <span>{home.heroLabel}</span>
          <span>
            {home.currently} — <span className="text-ink">{home.currentRole}</span>
          </span>
        </p>

        <h1 id="hero-title" className="display col-span-full text-display lg:col-span-11">
          {home.heroTitle} <em className="italic">{home.heroTitleEmphasis}</em>
        </h1>

        <div className="col-span-full md:col-span-6 md:col-start-3 lg:col-span-5 lg:col-start-7">
          <p className="text-body-lg">{home.heroIntro}</p>
          <a href="#work" className="label link-draw mt-8 inline-flex min-h-11 items-center gap-2 text-ink">
            {home.heroCta}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
