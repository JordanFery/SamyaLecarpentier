import { profile } from "@/content/profile";

export default function SiteFooter({ dict }) {
  const { contact, a11y } = dict;
  const year = new Date().getFullYear();
  // Let the address break before "@" on narrow screens.
  const [emailUser, emailDomain] = profile.email.split("@");

  return (
    <footer id="contact" className="mt-auto bg-footer text-daylight">
      <div className="container-site grid-site gap-y-12 pt-20 pb-10 md:pt-28">
        <h2 className="label col-span-full text-daylight/70 lg:col-span-3">{contact.label}</h2>

        <div className="col-span-full lg:col-span-8 lg:col-start-5">
          <p className="display text-h2 text-daylight/70">{contact.title}</p>
          <a
            href={`mailto:${profile.email}`}
            className="display link-draw mt-2 inline-block text-[clamp(1.5rem,0.6rem+4.6vw,5rem)] leading-[1.05] tracking-[-0.02em]"
          >
            {emailUser}
            <wbr />@{emailDomain}
          </a>

          <div className="mt-12 flex flex-col gap-6 border-t border-daylight/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-small text-daylight/70">{contact.location}</p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw text-small inline-flex min-h-11 items-center self-start sm:self-auto"
            >
              {contact.linkedin}
              <span aria-hidden="true">&nbsp;↗</span>
              <span className="sr-only"> {a11y.newTab}</span>
            </a>
          </div>
        </div>

        <p className="label col-span-full text-daylight/60">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
