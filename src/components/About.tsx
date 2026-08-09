import Image from "next/image";
import Reveal from "./Reveal";
import { ABOUT } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="bg-paper py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                About the studio
              </p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                An <em className="italic">unhurried</em> approach to your
                biggest day.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                {ABOUT.body.map((p) => (
                  <p key={p.slice(0, 24)} className="max-w-[52ch]">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {ABOUT.values.map((v, i) => (
                <Reveal key={v.title} delay={0.1 + i * 0.08}>
                  <div className="border-t border-line pt-5">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative px-6 pb-16 sm:px-10 sm:pb-24">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={ABOUT.images.main.src}
                      alt={ABOUT.images.main.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-[58%] overflow-hidden rounded-[1.25rem] ring-8 ring-paper">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={ABOUT.images.inset.src}
                      alt={ABOUT.images.inset.alt}
                      fill
                      sizes="(max-width: 1024px) 58vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
