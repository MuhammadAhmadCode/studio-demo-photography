/* =====================================================================
   SITE CONTENT — edit this one file to customize for each photographer.

   HOW TO REBRAND FOR A NEW CLIENT (no rebuild, no code changes needed):
   1.  Change `name`, `shortName`, `city`, `tagline`, `about` copy below.
   2.  Replace the `phoneDisplay` / `phoneTel` / `whatsappNumber` with the
       client's real number.
   3.  Swap the Pexels URLs in `IMAGES` / `GALLERY` with the client's
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
  tagline: "Wedding Photography",
  // Short description used for SEO / meta.
  description:
    "Cinematic wedding, mehndi and event photography across Pakistan — unhurried, honest, and made to be kept.",
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
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
] as const;

// ---------------------------------------------------------------------
// HERO — one cinematic photograph carries the whole moment.
// `focus` is the CSS object-position used to frame the subject.
// ---------------------------------------------------------------------
export const HERO = {
  src: "https://images.pexels.com/photos/27443998/pexels-photo-27443998.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1600&fit=crop",
  alt: "A bride and groom in traditional Indian wedding attire sharing a tender moment under the night sky",
  focus: "50% 45%",
};

// ---------------------------------------------------------------------
// ABOUT — studio approach copy.
// ---------------------------------------------------------------------
export const ABOUT = {
  heading: "An unhurried approach to your biggest day.",
  body: [
    "We photograph weddings, engagements and events the way you'll remember them — not as a series of posed tableaux, but as a story carried by light, laughter and the honest in-between moments.",
    "Whether it's a nikkah in the morning or a walima that runs past midnight, we work quietly in the background, then hand you a gallery you'll keep opening for years.",
  ],
  // Editorial image stack for the about section.
  images: {
    main: {
      src: "https://images.pexels.com/photos/38917731/pexels-photo-38917731.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "An Indian bride in a vibrant red outfit with intricate jewelry",
      focus: "50% 22%",
    },
    inset: {
      src: "https://images.pexels.com/photos/33557600/pexels-photo-33557600.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Intricate henna design on hands with jewelry",
      focus: "50% 50%",
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
// PORTFOLIO — editorial gallery. Swap each `src` for the client's photos.
// `category` drives the filters. `ratio` sets the tile shape, `focus` is
// the object-position (focal point), `span` sets desktop column width
// (12-column editorial grid — a 8/4 row, a 4/4/4 row, etc).
// ---------------------------------------------------------------------
export type GalleryCategory =
  | "Wedding"
  | "Mehndi & Haldi"
  | "Engagement"
  | "Portrait";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  ratio: string;
  focus: string;
  span: 4 | 5 | 7 | 8;
};

export const GALLERY: GalleryItem[] = [
  {
    src: "https://images.pexels.com/photos/27443997/pexels-photo-27443997.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "A couple gracefully dancing during a nighttime Indian wedding in traditional attire",
    caption: "The first dance, after dark",
    category: "Wedding",
    ratio: "4/3",
    focus: "50% 50%",
    span: 8,
  },
  {
    src: "https://images.pexels.com/photos/29226160/pexels-photo-29226160.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Close-up of a South Asian bride during her traditional haldi ceremony",
    caption: "Haldi, golden hour",
    category: "Mehndi & Haldi",
    ratio: "3/4",
    focus: "50% 28%",
    span: 4,
  },
  {
    src: "https://images.pexels.com/photos/18925087/pexels-photo-18925087.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "An Indian bride in a traditional sari with lavish floral decorations on an elegant sofa",
    caption: "The bride, red and gold",
    category: "Wedding",
    ratio: "4/3",
    focus: "50% 32%",
    span: 7,
  },
  {
    src: "https://images.pexels.com/photos/33557600/pexels-photo-33557600.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Intricate henna design on hands with jewelry",
    caption: "Mehndi, frame by frame",
    category: "Mehndi & Haldi",
    ratio: "4/3",
    focus: "50% 50%",
    span: 5,
  },
  {
    src: "https://images.pexels.com/photos/25489380/pexels-photo-25489380.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "A bride wearing traditional wedding jewelry",
    caption: "Bridal portrait, in gold",
    category: "Portrait",
    ratio: "3/4",
    focus: "50% 30%",
    span: 4,
  },
  {
    src: "https://images.pexels.com/photos/27443851/pexels-photo-27443851.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "A groom gently kisses his bride in elegant Indian wedding attire under the night sky",
    caption: "A quiet moment",
    category: "Wedding",
    ratio: "4/3",
    focus: "50% 38%",
    span: 4,
  },
  {
    src: "https://images.pexels.com/photos/32060316/pexels-photo-32060316.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "An elegant South Asian couple in traditional attire",
    caption: "Engagement, golden light",
    category: "Engagement",
    ratio: "3/4",
    focus: "50% 40%",
    span: 4,
  },
  {
    src: "https://images.pexels.com/photos/27443847/pexels-photo-27443847.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "An Indian bride and groom embracing outdoors in traditional attire",
    caption: "Just the two of them",
    category: "Wedding",
    ratio: "3/4",
    focus: "50% 50%",
    span: 5,
  },
  {
    src: "https://images.pexels.com/photos/38712963/pexels-photo-38712963.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "A romantic couple in traditional attire posing at historic stone architecture",
    caption: "Portraits in old Lahore",
    category: "Engagement",
    ratio: "3/4",
    focus: "50% 52%",
    span: 7,
  },
  {
    src: "https://images.pexels.com/photos/20850963/pexels-photo-20850963.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "A newlywed couple in vibrant traditional clothing standing amid a lush banana grove",
    caption: "Between two ceremonies",
    category: "Wedding",
    ratio: "16/10",
    focus: "50% 42%",
    span: 8,
  },
  {
    src: "https://images.pexels.com/photos/26559592/pexels-photo-26559592.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Newlyweds sitting together in traditional wedding clothing",
    caption: "The calm before the walima",
    category: "Wedding",
    ratio: "4/3",
    focus: "50% 45%",
    span: 4,
  },
  {
    src: "https://images.pexels.com/photos/28721955/pexels-photo-28721955.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Colorful Bangladeshi wedding henna and flowers",
    caption: "Henna, flowers, gold",
    category: "Mehndi & Haldi",
    ratio: "4/3",
    focus: "50% 45%",
    span: 5,
  },
  {
    src: "https://images.pexels.com/photos/27443852/pexels-photo-27443852.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "An Indian bride and groom in red and blue outfits standing together in the dark",
    caption: "Night reception",
    category: "Wedding",
    ratio: "4/3",
    focus: "50% 50%",
    span: 7,
  },
  {
    src: "https://images.pexels.com/photos/33049966/pexels-photo-33049966.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "A groom in traditional Indian attire standing elegantly in a lavish wedding venue",
    caption: "The groom, in full regalia",
    category: "Portrait",
    ratio: "3/4",
    focus: "50% 20%",
    span: 4,
  },
  {
    src: "https://images.pexels.com/photos/27443853/pexels-photo-27443853.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "A couple in traditional Indian wedding attire posing in the woods during twilight",
    caption: "Twilight, out on the lawn",
    category: "Engagement",
    ratio: "4/3",
    focus: "50% 45%",
    span: 4,
  },
  {
    src: "https://images.pexels.com/photos/33049965/pexels-photo-33049965.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "A groom in traditional Indian attire posed against a dark background, elegant and regal",
    caption: "A regal groom, in chiaroscuro",
    category: "Portrait",
    ratio: "3/4",
    focus: "50% 22%",
    span: 4,
  },
];

// ---------------------------------------------------------------------
// PACKAGES — three tiers. `featured` highlights the middle one.
// TODO per-client: update prices and features for the client's real offers.
// ---------------------------------------------------------------------
export const PACKAGES = [
  {
    name: "Essential",
    subhead: "Wedding Day",
    price: "Rs 55,000",
    tagline: "One photographer, one unhurried day — every essential moment kept.",
    featured: false,
    coverage: ["Ceremony & reception coverage", "Up to 5 hours, one photographer"],
    photography: ["300+ hand-edited images"],
    videography: ["Edited highlight reel (2–3 min)"],
    deliverables: [
      "Private online gallery",
      "Full-resolution downloads",
      "Delivered in 4 weeks",
    ],
  },
  {
    name: "Signature",
    subhead: "Wedding Story",
    price: "Rs 110,000",
    tagline: "Two shooters, full day, both angles covered — the story told properly.",
    featured: true,
    coverage: ["All events, getting ready to last dance", "Full day, two photographers"],
    photography: ["600+ hand-edited images"],
    videography: ["Cinematic highlight film (5–8 min)"],
    deliverables: [
      "Pre-wedding shoot included",
      "Private online gallery",
      "Full-resolution downloads",
      "Delivered in 4 weeks",
    ],
  },
  {
    name: "Grand",
    subhead: "Complete Story",
    price: "Rs 175,000",
    tagline: "Every event, every angle, every detail — the complete story kept forever.",
    featured: false,
    coverage: ["Multi-day coverage of all events", "Two photographers + assistant"],
    photography: ["1,000+ hand-edited images"],
    videography: ["Highlight film + full wedding film"],
    deliverables: [
      "Fine-art album, 25 spreads",
      "Private online gallery",
      "Full-resolution downloads",
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
