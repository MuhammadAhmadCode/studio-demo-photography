import { Check } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";
import { PACKAGES } from "@/lib/site";

const GROUP_LABELS = {
  coverage: "Coverage",
  photography: "Photography",
  videography: "Videography",
  deliverables: "Deliverables",
} as const;

export default function Packages() {
  return (
    <section id="packages" className="bg-paper py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Coverage, without surprises.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Three simple tiers cover most celebrations. The final quote
              depends on your date, venue and how much of the day you want
              kept.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08} className="h-full">
              <div
                className={`flex h-full flex-col rounded-[1.5rem] p-8 transition-all duration-500 ${
                  pkg.featured
                    ? "bg-ink text-paper shadow-[0_30px_80px_-30px_rgba(25,27,30,0.5)] ring-1 ring-accent/60"
                    : "border border-line bg-surface"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`font-display text-3xl font-semibold tracking-tight ${
                        pkg.featured ? "text-paper" : "text-ink"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`mt-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                        pkg.featured ? "text-accent-soft" : "text-accent"
                      }`}
                    >
                      {pkg.subhead}
                    </p>
                  </div>
                  {pkg.featured && (
                    <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-paper">
                      Most booked
                    </span>
                  )}
                </div>

                <div className="mt-5">
                  <p
                    className={`font-display text-4xl font-medium ${
                      pkg.featured ? "text-paper" : "text-ink"
                    }`}
                  >
                    {pkg.price}
                  </p>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      pkg.featured ? "text-paper/70" : "text-muted"
                    }`}
                  >
                    {pkg.tagline}
                  </p>
                </div>

                <div className="mt-7 flex-1 space-y-6">
                  {(Object.keys(GROUP_LABELS) as (keyof typeof GROUP_LABELS)[]).map(
                    (key) => (
                      <div key={key}>
                        <p
                          className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                            pkg.featured ? "text-paper/50" : "text-faint"
                          }`}
                        >
                          {GROUP_LABELS[key]}
                        </p>
                        <ul className="mt-3 space-y-2.5">
                          {pkg[key].map((f) => (
                            <li key={f} className="flex items-start gap-3 text-sm">
                              <span
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                  pkg.featured
                                    ? "bg-accent text-paper"
                                    : "bg-ink/8 text-accent"
                                }`}
                              >
                                <Check size={12} weight="bold" />
                              </span>
                              <span
                                className={`leading-relaxed ${
                                  pkg.featured ? "text-paper/85" : "text-ink-dim"
                                }`}
                              >
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                  )}
                </div>

                <a
                  href="#booking"
                  className={`mt-8 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-300 active:scale-[0.98] ${
                    pkg.featured
                      ? "bg-paper text-ink hover:bg-white"
                      : "border border-ink/20 text-ink hover:border-accent hover:text-accent"
                  }`}
                >
                  Reserve this package
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-muted">
            A 25% advance holds your date; the balance clears before the event.
            Prefer to talk it through?{" "}
            <span className="text-accent">Ask on WhatsApp when you enquire.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
