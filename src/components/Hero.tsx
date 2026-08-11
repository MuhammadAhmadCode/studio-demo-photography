import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { HERO, SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={HERO.src}
          alt={HERO.alt}
          fill
          priority
          sizes="100vw"
          className="anim-kenburns object-cover"
          style={{ objectPosition: HERO.focus }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/15 to-ink/75" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_40%,rgba(24,20,16,0.5)_100%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 sm:px-8 sm:pb-28">
        <div className="max-w-3xl">
          <p
            className="anim-rise inline-flex items-center gap-2.5 rounded-full border border-paper/25 bg-ink/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/90 backdrop-blur-md"
            style={{ animationDelay: "0.15s" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent-soft"
              aria-hidden="true"
            />
            {SITE.tagline} &middot; {SITE.city}
          </p>

          <h1 className="mt-6 font-display text-[clamp(3rem,9vw,6.5rem)] font-medium leading-[1.02] tracking-tight text-paper">
            <span className="anim-rise block" style={{ animationDelay: "0.25s" }}>
              We photograph the days you&rsquo;ll
            </span>
            <span
              className="anim-rise block italic"
              style={{ animationDelay: "0.35s" }}
            >
              never want to forget.
            </span>
          </h1>

          <p
            className="anim-rise mt-6 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg"
            style={{ animationDelay: "0.48s" }}
          >
            {SITE.description}
          </p>

          <div
            className="anim-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.58s" }}
          >
            <a
              href="#portfolio"
              className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-paper px-7 text-base font-semibold text-ink transition-all duration-500 hover:bg-white active:scale-[0.98]"
            >
              View the Work
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/10 text-ink transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight size={16} weight="bold" />
              </span>
            </a>
            <a
              href="#booking"
              className="inline-flex h-14 items-center justify-center rounded-full border border-paper/30 bg-ink/30 px-7 text-base font-medium text-paper backdrop-blur-md transition-all duration-500 hover:border-paper/60 hover:text-white active:scale-[0.98]"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>

      <p className="anim-fade absolute bottom-8 left-5 hidden max-w-[40ch] font-display text-sm italic text-paper/60 sm:left-8 lg:block">
        {HERO.alt}
      </p>

      <div
        className="anim-fade absolute bottom-8 right-5 hidden items-center gap-3 sm:flex sm:right-8"
        aria-hidden="true"
        style={{ animationDelay: "1s" }}
      >
        <span className="h-px w-10 bg-paper/40" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-paper/60">
          Scroll
        </span>
      </div>
    </section>
  );
}
