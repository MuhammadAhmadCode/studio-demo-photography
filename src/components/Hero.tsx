"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { HERO_SLIDES, SITE } from "@/lib/site";

const SLIDE_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover ${i === index ? "anim-kenburns" : ""}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/20 to-ink/75" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_40%,rgba(13,14,16,0.45)_100%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 sm:pb-24">
        <div className="max-w-3xl">
          <p
            className="anim-rise inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-ink/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/90 backdrop-blur-md"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-paper" aria-hidden="true" />
            {SITE.tagline} &middot; {SITE.city}
          </p>

          <h1 className="mt-6 font-display text-[clamp(3rem,9vw,6.5rem)] font-medium leading-[1.02] tracking-tight text-paper">
            <span
              className="anim-rise block"
              style={{ animationDelay: "0.25s" }}
            >
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
            {SITE.heroCopy}
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
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/25 bg-ink/30 px-7 text-base font-medium text-paper backdrop-blur-md transition-all duration-500 hover:border-white/50 hover:text-white active:scale-[0.98]"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-24 right-6 z-10 hidden flex-col items-center gap-3 sm:flex sm:bottom-28 sm:right-10"
        aria-hidden="true"
      >
        {HERO_SLIDES.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-500 ${
              i === index ? "scale-125 bg-paper" : "bg-paper/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
