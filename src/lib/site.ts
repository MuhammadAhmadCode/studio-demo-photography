/* =====================================================================
   SITE CONTENT — edit this one file to customize for each photographer.

   HOW TO REBRAND FOR A NEW CLIENT (no rebuild, no code changes needed):
   1.  Change `name`, `shortName`, `city`, `tagline`, `about` copy below.
   2.  Replace the `phoneDisplay` / `phoneTel` / `whatsappNumber` with the
       client's real number.
   3.  Swap the Unsplash URLs in `IMAGES` / `GALLERY` with the client's
       own photos (any public image URL works — S3, Cloudinary, etc).
   4.  Update `PACKAGES` prices/features to the client's real packages.
   5.  Replace `REVIEWS` with the client's real testimonials.
   6.  Deploy — that's it. Nothing else on the site hardcodes this data.
   ===================================================================== */

// ---------------------------------------------------------------------
// BUSINESS DETAILS
// ---------------------------------------------------------------------
export const SITE = {
  // TODO per-client: real studio name.
  name: "Studio Demo",
  shortName: "Studio",
  city: "Pakistan",
  tagline: "Wedding & Event Photography",
  // Short description used for SEO / meta.
  description:
    "Wedding, engagement and event photography in Pakistan — real moments, told with warmth and editorial restraint.",
  heroCopy:
    "Wedding, engagement and event photography — real moments, told with warmth and editorial restraint.",
  // TODO per-client: replace both numbers with the real one.
  phoneDisplay: "+92 300 0000000",
  phoneTel: "+923000000000",
  email: "hello@studiodemo.pk",
  // WhatsApp number in international format, no "+", no spaces.
  // TODO per-client: replace with the client's real number.
  whatsappNumber: "923000000000",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  // Shown under the footer contact block so nobody mistakes the
  // placeholder number for a real one.
  phonePlaceholderNote:
    "Placeholder number for this demo — swap it in src/lib/site.ts per client.",
};

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsappNumber}`;

// ---------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "The Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
  { label: "Booking", href: "#booking" },
] as const;

// ---------------------------------------------------------------------
// HERO SLIDESHOW — each entry is one full-bleed slide.
// ---------------------------------------------------------------------
export const HERO_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop",
    alt: "Bride and groom embracing at their wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2400&auto=format&fit=crop",
    alt: "Couple sharing their first dance",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2400&auto=format&fit=crop",
    alt: "Wedding rings held over the bride's hand",
  },
  {
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2400&auto=format&fit=crop",
    alt: "Couple exchanging vows in a garden ceremony",
  },
] as const;

// ---------------------------------------------------------------------
// ABOUT — studio approach copy.
// ---------------------------------------------------------------------
export const ABOUT = {
  kicker: "About the studio",
  heading: "An unhurried approach to your biggest day.",
  body: [
    "We photograph weddings, engagements and events the way you'll remember them — not as a series of posed tableaux, but as a story with light, laughter and honest in-between moments.",
    "Whether it's a nikkah in the morning or a walima that runs past midnight, we work quietly in the background, then hand you a gallery you'll keep opening for years.",
  ],
  // Small editorial image stack for the about section.
  images: {
    main: {
      src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
      alt: "Couple dancing at their wedding reception",
    },
    inset: {
      src: "https://images.unsplash.com/photo-1529636458467-8fbf6939a7c0?q=80&w=800&auto=format&fit=crop",
      alt: "Couple embracing during a portrait session",
    },
  },
  values: [
    {
      title: "Documentary at heart",
      body: "We shoot the moments as they happen — laughter, tears, and everything in between.",
    },
    {
      title: "Directed when it counts",
      body: "A gentle nudge for portraits, so you look and feel like yourself.",
    },
    {
      title: "Edited with restraint",
      body: "Every image is cleaned and color-graded. No filters that fight the light.",
    },
  ],
};

// ---------------------------------------------------------------------
// PORTFOLIO — masonry gallery. Swap each `src` for the client's photos.
// `category` drives the filters. `ratio` sets the tile shape.
// ---------------------------------------------------------------------
export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: "Wedding" | "Engagement" | "Portrait" | "Event";
  ratio: string;
};

export const GALLERY: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    alt: "Elegant wedding reception table setting",
    caption: "Reception tables, set and lit",
    category: "Wedding",
    ratio: "4/3",
  },
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop",
    alt: "Couple sharing a quiet moment",
    caption: "A quiet moment between events",
    category: "Wedding",
    ratio: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    alt: "Woman portrait with soft natural light",
    caption: "Natural-light portrait",
    category: "Portrait",
    ratio: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1200&auto=format&fit=crop",
    alt: "Grand wedding hall reception with guests",
    caption: "Full hall, full heart",
    category: "Wedding",
    ratio: "4/3",
  },
  {
    src: "https://images.unsplash.com/photo-1529636458467-8fbf6939a7c0?q=80&w=1200&auto=format&fit=crop",
    alt: "Couple embracing during engagement photos",
    caption: "Engagement session, golden hour",
    category: "Engagement",
    ratio: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    alt: "Celebration event with bunting and lights",
    caption: "A celebration that ran late",
    category: "Event",
    ratio: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1511806754518-53bada35f930?q=80&w=1200&auto=format&fit=crop",
    alt: "Couple exchanging wedding vows",
    caption: "The vows",
    category: "Wedding",
    ratio: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    alt: "Man portrait in warm tones",
    caption: "Portrait, available light",
    category: "Portrait",
    ratio: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
    alt: "Couple walking together after the ceremony",
    caption: "Just married",
    category: "Wedding",
    ratio: "4/3",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    alt: "Woman portrait in soft light",
    caption: "Editorial portrait",
    category: "Portrait",
    ratio: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
    alt: "Round-table banquet setting",
    caption: "Banquet tables in full bloom",
    category: "Wedding",
    ratio: "4/3",
  },
  {
    src: "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=1200&auto=format&fit=crop",
    alt: "Couple laughing together",
    caption: "The laughs in between",
    category: "Engagement",
    ratio: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    alt: "Event guests mingling under string lights",
    caption: "An event after dark",
    category: "Event",
    ratio: "4/3",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    alt: "Wedding rings close up",
    caption: "The rings",
    category: "Engagement",
    ratio: "3/4",
  },
];

// ---------------------------------------------------------------------
// PACKAGES — three tiers. `featured` highlights the middle one.
// TODO per-client: update prices and features for the client's real offers.
// ---------------------------------------------------------------------
export const PACKAGES = [
  {
    name: "Essential",
    price: "Rs 55,000",
    tagline: "A focused, single-moment celebration.",
    featured: false,
    features: [
      "Up to 5 hours, one photographer",
      "300+ hand-edited images",
      "Private online gallery",
      "Full-resolution downloads",
    ],
  },
  {
    name: "Signature",
    price: "Rs 110,000",
    tagline: "Two shooters, full day, both angles covered.",
    featured: true,
    features: [
      "Full day, two photographers",
      "600+ hand-edited images",
      "Cinematic highlight film",
      "Pre-wedding shoot included",
      "Private online gallery",
    ],
  },
  {
    name: "Grand",
    price: "Rs 175,000",
    tagline: "The complete story, from getting ready to last dance.",
    featured: false,
    features: [
      "Multi-day coverage of all events",
      "Two photographers + assistant",
      "1,000+ hand-edited images",
      "Highlight film + full wedding film",
      "Fine-art album, 25 spreads",
      "Private online gallery",
    ],
  },
] as const;

// ---------------------------------------------------------------------
// TESTIMONIALS — SAMPLE CONTENT ONLY.
// These are placeholder reviews to demonstrate the layout. Replace them
// with the client's real reviews (labeled as such) before going live.
// ---------------------------------------------------------------------
export const REVIEWS_SAMPLE = true;

export const REVIEWS = [
  {
    quote:
      "Studio Demo made our entire wedding feel effortless. The photos feel like us — warm and real, not posed within an inch of our lives.",
    name: "Placeholder review — replace with a real client",
    role: "Wedding, Lahore",
  },
  {
    quote:
      "Two weeks later we had the full gallery, and every single photo was a keeper. That almost never happens.",
    name: "Placeholder review — replace with a real client",
    role: "Walima, Islamabad",
  },
  {
    quote:
      "They covered everything from mehndi to walima. The candid shots are the ones we keep going back to.",
    name: "Placeholder review — replace with a real client",
    role: "Full wedding, Karachi",
  },
] as const;

// ---------------------------------------------------------------------
// BOOKING FORM — options for the select fields.
// ---------------------------------------------------------------------
export const EVENT_OPTIONS = [
  "Wedding",
  "Nikkah",
  "Engagement",
  "Mehndi / Walima",
  "Portrait session",
  "Corporate event",
  "Other",
] as const;

export const PACKAGE_OPTIONS = [
  "Not sure yet",
  "Essential",
  "Signature",
  "Grand",
] as const;
