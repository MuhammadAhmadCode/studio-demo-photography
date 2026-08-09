"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";
import { GALLERY, type GalleryItem } from "@/lib/site";

const FILTERS = ["All", "Wedding", "Engagement", "Portrait", "Event"] as const;
type Filter = (typeof FILTERS)[number];

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<number | null>(null);

  const items =
    filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setActive((a) =>
        a === null ? a : (a + dir + items.length) % items.length,
      );
    },
    [items.length],
  );

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, step]);

  return (
    <section id="portfolio" className="bg-surface py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Selected work.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A few frames from recent weddings, engagements and portraits.
              Every gallery is built around the light, not the other way round.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFilter(f);
                  setActive(null);
                }}
                aria-pressed={filter === f}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 active:scale-95 ${
                  filter === f
                    ? "bg-ink text-paper"
                    : "border border-line text-muted hover:border-ink/30 hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.06}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group mb-5 block w-full break-inside-avoid text-left"
                aria-label={`Open ${item.caption}`}
              >
                <div
                  className="relative overflow-hidden rounded-[1.25rem]"
                  style={{ aspectRatio: item.ratio }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <p className="font-display text-xl font-medium italic text-paper">
                      {item.caption}
                    </p>
                    <span className="rounded-full bg-paper/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                      {item.category}
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {active !== null && items[active] && (
        <Lightbox
          item={items[active]}
          index={active}
          total={items.length}
          onClose={close}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      )}
    </section>
  );
}

function Lightbox({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-5 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-paper transition-colors duration-300 hover:border-white/60 hover:text-white"
      >
        <X size={20} weight="bold" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-paper transition-colors duration-300 hover:border-white/60 hover:text-white"
      >
        <CaretLeft size={20} weight="bold" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-paper transition-colors duration-300 hover:border-white/60 hover:text-white"
      >
        <CaretRight size={20} weight="bold" />
      </button>

      <figure
        className="max-h-[86dvh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative mx-auto overflow-hidden rounded-[1.25rem]">
          <Image
            src={item.src}
            alt={item.alt}
            width={1200}
            height={900}
            sizes="(max-width: 900px) 100vw, 900px"
            className="max-h-[74dvh] w-full object-contain"
          />
        </div>
        <figcaption className="mt-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate font-display text-2xl font-medium italic text-paper">
              {item.caption}
            </p>
            <p className="mt-0.5 text-sm text-paper/60">{item.category}</p>
          </div>
          <p className="shrink-0 font-mono text-sm tracking-wider text-paper/60">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
