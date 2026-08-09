import { Quotes } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";
import { REVIEWS } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-surface py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Kind words.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              What recent clients have said after the day (and after the
              gallery landed).
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-[1.5rem] border border-line bg-paper p-8">
                <Quotes
                  size={28}
                  weight="fill"
                  className="text-accent"
                  aria-hidden="true"
                />
                <blockquote className="mt-5 flex-1">
                  <p className="text-base leading-relaxed text-ink-dim">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-7 border-t border-line pt-5">
                  <p className="font-display text-lg font-semibold text-ink">
                    {r.name}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">{r.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 rounded-2xl border border-dashed border-accent/40 bg-accent/5 px-5 py-4 text-center text-sm leading-relaxed text-accent">
            Sample reviews shown for this demo only. Replace with each
            photographer&rsquo;s real client feedback before going live.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
