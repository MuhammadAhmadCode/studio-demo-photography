import {
  WhatsappLogo,
  InstagramLogo,
  FacebookLogo,
  Phone,
  Envelope,
} from "@phosphor-icons/react/dist/ssr";
import { SITE, WHATSAPP_LINK, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-inset ring-ink/20">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="12" cy="12" r="2.6" fill="currentColor" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-medium tracking-wide">
                  {SITE.name}
                </span>
                <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.3em] text-accent">
                  {SITE.tagline}
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { href: SITE.instagram, label: "Instagram", Icon: InstagramLogo },
                { href: SITE.facebook, label: "Facebook", Icon: FacebookLogo },
                { href: WHATSAPP_LINK, label: "WhatsApp", Icon: WhatsappLogo },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <Icon size={18} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Explore
            </p>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="w-fit text-sm text-ink-dim transition-colors duration-300 hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Contact
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex w-fit items-center gap-2 text-sm text-ink-dim transition-colors duration-300 hover:text-accent"
            >
              <Phone size={15} className="text-accent" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex w-fit items-center gap-2 text-sm text-ink-dim transition-colors duration-300 hover:text-accent"
            >
              <Envelope size={15} className="text-accent" />
              {SITE.email}
            </a>
            <p className="text-sm text-ink-dim">{SITE.city}</p>
            <p className="mt-2 rounded-xl bg-paper px-4 py-3 text-xs leading-relaxed text-muted">
              {SITE.phonePlaceholderNote}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Demo template — rebranded per client via src/lib/site.ts.</p>
        </div>
      </div>
    </footer>
  );
}
