"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";

function Lens() {
  return (
    <a
      href="#top"
      className="flex items-center gap-3"
      aria-label={`${SITE.name} home`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-inset ring-current/25">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="2.6" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-medium tracking-wide">
          {SITE.name}
        </span>
        <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.3em] text-accent">
          Photography
        </span>
      </span>
    </a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const pill = scrolled
    ? "border-line bg-surface/90 text-ink shadow-[0_18px_50px_-20px_rgba(25,27,30,0.35)] backdrop-blur-xl"
    : "border-white/15 bg-ink/25 text-paper backdrop-blur-md";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
          <nav
            className={`flex items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 ${pill}`}
          >
            <Lens />

            <div className="hidden items-center gap-0.5 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium opacity-85 transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#booking"
                className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-all duration-300 hover:bg-accent active:translate-y-px sm:inline-flex"
              >
                Book a Date
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-current/15 lg:hidden"
              >
                <span className="relative block h-3.5 w-5">
                  <span
                    className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-all duration-300 ${
                      open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 bg-current transition-all duration-300 ${
                      open ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] w-5 bg-current transition-all duration-300 ${
                      open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-paper/95 backdrop-blur-2xl transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col justify-between px-8 pb-12 pt-32">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl font-medium leading-tight text-ink transition-all duration-500 hover:text-accent"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(24px)",
                  transitionDelay: open ? `${0.08 + i * 0.07}s` : "0s",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-4">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-4 text-center text-base font-semibold text-paper"
            >
              Book a Date
            </a>
            <p className="text-center text-sm text-muted">
              {SITE.phoneDisplay} &middot; {SITE.city}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
