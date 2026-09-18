// Product photography lives in /public/images/products, sliced from a set of styled
// product-photography boards commissioned for the brand (art-*.jpg) plus a couple of real
// reference photos of actual prints (bucket-grid-insert.jpg). Every image is meant to show
// what's actually being sold — a 3D-printed plastic piece, not a stand-in material or a
// diagram. Swap any of it for your own studio photography whenever you're ready.

import { withBasePath } from "@/lib/basePath";

export type ProductColor = { name: string; hex: string };
export type ProductImage = { src: string; alt: string };

export type Accent = "blush" | "sage" | "lavender" | "sky" | "butter" | "terracotta";

// Static Tailwind class fragments per accent — kept as literal object values (not
// concatenated at call sites) so Tailwind's build-time scanner can see them.
export const ACCENT_OVERLAY: Record<Accent, string> = {
  blush: "bg-[#8a4a5c]/40",
  sage: "bg-[#3f4d38]/40",
  lavender: "bg-[#4b3d6b]/40",
  sky: "bg-[#2e5266]/40",
  butter: "bg-[#6b5a2a]/40",
  terracotta: "bg-[#6b3a26]/40",
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: ProductImage;
  accent: Accent;
};

export type Product = {
  slug: string;
  name: string;
  category: string; // Category["slug"]
  price: number;
  shortDescription: string;
  description: string;
  images: ProductImage[];
  colors: ProductColor[];
  featured?: boolean;
};

export const filamentColors: ProductColor[] = [
  { name: "Sage", hex: "#7C9070" },
  { name: "Blush", hex: "#F0DCD3" },
  { name: "Ivory", hex: "#F5F0E6" },
  { name: "Charcoal", hex: "#3A3835" },
  { name: "Terracotta", hex: "#C97A5B" },
  { name: "Dusty Blue", hex: "#93A9B8" },
];

const p = (file: string, alt: string): ProductImage => ({
  src: withBasePath(`/images/products/${file}`),
  alt,
});

export const categories: Category[] = [
  {
    slug: "stem-tools",
    name: "Stem & Rose Tools",
    tagline: "Strip, size, and prep stems in one pass",
    description:
      "A heart-shaped stripping board that pulls thorns and foliage off in a single smooth motion, so your hands stay clean and your roses stay perfect.",
    heroImage: p("art-stem-heart-hero.jpg", "The pink 3D-printed Heart Stem Slider, printed with rows of soft stripping ridges"),
    accent: "blush",
  },
  {
    slug: "flower-frogs",
    name: "Flower Frogs & Pin Holders",
    tagline: "Precision stem placement, no floral foam needed",
    description:
      "3D-printed pin-style flower frogs that hold every stem exactly where you want it — reusable, foam-free, and satisfying to arrange with.",
    heroImage: p("art-frog-hero.jpg", "A sage green 3D-printed pin flower frog planted with a fresh arrangement"),
    accent: "sage",
  },
  {
    slug: "bouquet-box-makers",
    name: "Bouquet Box Makers",
    tagline: "Build restaurant-quality hand-tieds, every time",
    description:
      "3D-printed formers that hold your stems while you work, so hand-tied bouquets come out balanced and even — even on a rush order.",
    heroImage: p("art-box-hero.jpg", "A lavender 3D-printed bouquet former box filled with fresh stems"),
    accent: "lavender",
  },
  {
    slug: "bouquet-rings",
    name: "Bouquet Rings",
    tagline: "Clean handles for hand-tied bouquets",
    description:
      "Lightweight 3D-printed rings that slide onto a hand-tied bouquet to keep the stems gathered and the handle comfortable to hold and photograph.",
    heroImage: p("art-ring-stack-hero.jpg", "A stack of four 3D-printed bouquet rings in sage, blush, lavender, and sky blue"),
    accent: "sky",
  },
  {
    slug: "plant-tags",
    name: "Plant Tags",
    tagline: "Label rows, pots, and propagation stations",
    description:
      "Durable, reusable 3D-printed plant markers with raised lettering for nursery rows, garden beds, and windowsill propagation stations.",
    heroImage: p("art-tag-hero.jpg", "Pastel 3D-printed plant tags reading Basil, Lavender, and Rosemary in a potted plant"),
    accent: "butter",
  },
  {
    slug: "bucket-inserts",
    name: "Floral Bucket Inserts",
    tagline: "Grid organization for buckets, jars, and coolers",
    description:
      "Snap-fit 3D-printed grid inserts that keep stems separated and upright in buckets, jars, and cooler bins — no more tangled, leaning bunches.",
    heroImage: p("art-bucket-hero.jpg", "A 3D-printed grid insert fitted inside a white bucket, holding a mixed flower bunch upright"),
    accent: "terracotta",
  },
  {
    slug: "vase-buddies",
    name: "Vase Buddies",
    tagline: "Small, friendly faces for vases and houseplants",
    description:
      "Little 3D-printed characters that perch on a vase rim or pot edge — the just-for-fun line, made to make someone smile.",
    heroImage: p("art-vb-group.jpg", "A bunny, frog, and fox Vase Buddy figurine sitting together in a white planter"),
    accent: "blush",
  },
];

export const products: Product[] = [
  // Stem & Rose Tools — all heart-shaped, the shape shown throughout this line's photography
  {
    slug: "heart-stem-slider",
    name: "Heart Stem Slider",
    category: "stem-tools",
    price: 28,
    shortDescription: "Our signature heart-shaped stem-stripping board.",
    description:
      "Pull a rose through the printed ridges and it comes out thornless and foliage-free — the heart shape doubles as a display piece for your workbench between orders. Fits standard rose, spray rose, and carnation stems.",
    images: [
      p("art-stem-heart-hero.jpg", "The pink Heart Stem Slider on a wooden table next to fresh roses"),
      p("art-stem-heart-inuse.jpg", "A rose stem being pulled through the Heart Stem Slider's stripping ridges"),
      p("art-stem-heart-detail.jpg", "Close-up angled view of the Heart Stem Slider's printed ridge texture"),
    ],
    colors: filamentColors,
    featured: true,
  },
  {
    slug: "classic-stem-slider",
    name: "Classic Stem Slider",
    category: "stem-tools",
    price: 24,
    shortDescription: "The original heart-shaped design, no frills.",
    description:
      "Our original heart-shaped stripping board in a classic matte finish — sized for fast, repetitive work and built for studios processing large volumes of stems before a big event.",
    images: [
      p("art-stem-heart-swatch-sage.jpg", "The Classic Stem Slider in sage green"),
      p("art-stem-heart-inuse.jpg", "A rose stem being pulled through the stripping ridges"),
    ],
    colors: filamentColors,
  },
  {
    slug: "mini-stem-slider-travel",
    name: "Mini Stem Slider — Travel Size",
    category: "stem-tools",
    price: 18,
    shortDescription: "Pocket-sized stripper for on-site work.",
    description:
      "A smaller heart, sized to slip into a kit bag or apron pocket for wedding-day touch-ups, market stall trims, and anywhere you need a quick clean stem away from the studio.",
    images: [
      p("art-stem-heart-swatch-cream.jpg", "The Mini Stem Slider in ivory cream"),
      p("art-stem-heart-swatch-lavender.jpg", "The Mini Stem Slider in lavender"),
    ],
    colors: filamentColors,
  },
  {
    slug: "double-blade-stem-stripper",
    name: "Double-Blade Stem Stripper",
    category: "stem-tools",
    price: 16,
    shortDescription: "A wider-ridge heart stripper for thicker stems.",
    description:
      "The same heart-shaped design with a wider ridge spacing, so it handles everything from delicate spray roses to thick garden stems in one pass.",
    images: [
      p("art-stem-heart-swatch-lavender.jpg", "The Double-Blade Stem Stripper in lavender"),
      p("art-stem-heart-detail.jpg", "Close-up of the printed ridge texture"),
    ],
    colors: filamentColors,
  },

  // Flower Frogs & Pin Holders
  {
    slug: "round-pin-frog-small",
    name: "Round Pin Frog — Small (2.5\")",
    category: "flower-frogs",
    price: 14,
    shortDescription: "Compact pin frog for bud vases and jars.",
    description:
      "Dense printed pins hold delicate stems upright in small-mouth vases and jars — perfect for bud vases, tablescapes, and low centerpieces. Shown here in lavender and blush.",
    images: [
      p("art-frog-small-pair.jpg", "Two small 3D-printed pin flower frogs in lavender and blush"),
      p("art-frog-swatch-pink.jpg", "The small pin frog in blush pink"),
    ],
    colors: filamentColors,
    featured: true,
  },
  {
    slug: "round-pin-frog-large",
    name: "Round Pin Frog — Large (4\")",
    category: "flower-frogs",
    price: 22,
    shortDescription: "Our best-seller for full centerpieces.",
    description:
      "More pins, more hold — built for full arrangements in wide-mouth vessels. Reusable indefinitely, no floral foam waste.",
    images: [
      p("art-frog-hero.jpg", "A large sage green pin flower frog planted with a full mixed arrangement"),
      p("art-frog-swatch-sage.jpg", "The large pin frog in sage green"),
    ],
    colors: filamentColors,
  },
  {
    slug: "ikebana-pin-frog-set",
    name: "Ikebana Pin Frog Set (3 Sizes)",
    category: "flower-frogs",
    price: 38,
    shortDescription: "A nesting trio for ikebana-style work.",
    description:
      "Three graduated pin frogs designed for structured, minimal arrangements — small, medium, and large in one set so you always have the right fit.",
    images: [
      p("art-frog-small-pair.jpg", "The small pin frogs from the set, in lavender and blush"),
      p("art-frog-low.jpg", "The low-profile frog from the set, in sage green"),
      p("art-frog-hero.jpg", "The largest pin frog from the set, planted with flowers"),
    ],
    colors: filamentColors,
  },
  {
    slug: "low-profile-vase-frog",
    name: "Low-Profile Vase Frog",
    category: "flower-frogs",
    price: 16,
    shortDescription: "A slim frog that disappears below the waterline.",
    description:
      "Extra-low profile so it stays hidden in clear vases — the pins do the work without becoming part of the display.",
    images: [
      p("art-frog-low.jpg", "A low-profile sage green pin flower frog"),
      p("art-frog-swatch-sage.jpg", "The low-profile frog in sage green, detail view"),
    ],
    colors: filamentColors,
  },

  // Bouquet Box Makers
  {
    slug: "adjustable-bouquet-former",
    name: "Adjustable Bouquet Former",
    category: "bouquet-box-makers",
    price: 32,
    shortDescription: "Holds your stems while you build the spiral.",
    description:
      "Snap-fit slatted walls cradle a hand-tied bouquet mid-build so both hands are free to place stems — take the guesswork out of an even spiral. Ships flat-packed and assembles in seconds.",
    images: [
      p("art-box-hero.jpg", "A lavender bouquet former box filled with a fresh mixed bouquet"),
      p("art-box-flatpack.jpg", "The bouquet former's flat-packed panels laid out before assembly"),
      p("art-box-finished.jpg", "The assembled former holding a finished bouquet"),
    ],
    colors: filamentColors,
    featured: true,
  },
  {
    slug: "compact-bouquet-box-bridal",
    name: "Compact Bouquet Box — Bridal Size",
    category: "bouquet-box-makers",
    price: 28,
    shortDescription: "Sized for bridal and bridesmaid bouquets.",
    description:
      "A smaller-diameter former tuned for bridal-party proportions, so finished bouquets sit comfortably in hand for the whole day.",
    images: [
      p("art-box-pink.jpg", "The Compact Bouquet Box in blush pink"),
      p("art-box-finished.jpg", "A finished bouquet built in the compact former"),
    ],
    colors: filamentColors,
  },
  {
    slug: "hand-tied-bouquet-cage",
    name: "Hand-Tied Bouquet Cage",
    category: "bouquet-box-makers",
    price: 34,
    shortDescription: "Open-frame former for loose, garden-style ties.",
    description:
      "A wider, more open frame for airy garden-style bouquets that need support without being packed tight.",
    images: [
      p("art-box-sage.jpg", "The Hand-Tied Bouquet Cage in sage green"),
      p("art-box-flatpack.jpg", "The former's flat-packed panels before assembly"),
    ],
    colors: filamentColors,
  },

  // Bouquet Rings
  {
    slug: "classic-bouquet-handle-ring",
    name: "Classic Bouquet Handle Ring",
    category: "bouquet-rings",
    price: 12,
    shortDescription: "A clean, comfortable handle for any hand-tied.",
    description:
      "Slides onto the gathered stems below the tie point for a smooth, comfortable grip — dresses up any hand-tied bouquet in seconds.",
    images: [
      p("art-ring-inuse-1.jpg", "A blush bouquet ring slid onto a bundle of gathered stems"),
      p("art-ring-inuse-2.jpg", "A hand holding a bouquet gathered with the blush ring"),
      p("art-ring-swatch-pink.jpg", "The Classic Bouquet Handle Ring in blush pink"),
    ],
    colors: filamentColors,
    featured: true,
  },
  {
    slug: "wide-grip-bouquet-ring",
    name: "Wide Grip Bouquet Ring",
    category: "bouquet-rings",
    price: 14,
    shortDescription: "Extra surface area for heavier bouquets.",
    description:
      "A wider band distributes weight for larger, heavier bouquets — comfortable to hold through a full ceremony and reception.",
    images: [
      p("art-ring-swatch-sage.jpg", "The Wide Grip Bouquet Ring in sage green"),
      p("art-ring-inuse-1.jpg", "A bouquet ring slid onto gathered stems"),
    ],
    colors: filamentColors,
  },
  {
    slug: "nested-bouquet-ring-set",
    name: "Nested Bouquet Ring Set (3 Sizes)",
    category: "bouquet-rings",
    price: 30,
    shortDescription: "Three sizes for bridal party bouquets of any scale.",
    description:
      "One ring for the bride's bouquet, two more for the bridesmaids — a matched set in three sizes that nests together for easy storage between events.",
    images: [
      p("art-ring-stack-hero.jpg", "A stack of four nested bouquet rings in sage, blush, lavender, and sky blue"),
      p("art-ring-swatch-lavender.jpg", "One ring from the set, in lavender"),
      p("art-ring-swatch-sage.jpg", "One ring from the set, in sage green"),
    ],
    colors: filamentColors,
  },
  {
    slug: "petite-bridesmaid-bouquet-ring",
    name: "Petite Bridesmaid Bouquet Ring",
    category: "bouquet-rings",
    price: 10,
    shortDescription: "A smaller ring for smaller bouquets.",
    description:
      "Scaled down for posy-style bridesmaid bouquets and flower-girl bunches — same clean handle, smaller footprint.",
    images: [
      p("art-ring-swatch-lavender.jpg", "The Petite Bridesmaid Bouquet Ring in lavender"),
      p("art-ring-swatch-pink.jpg", "The ring in blush pink"),
    ],
    colors: filamentColors,
  },

  // Plant Tags
  {
    slug: "botanical-name-plant-tags",
    name: "Botanical Name Plant Tags (Set of 12)",
    category: "plant-tags",
    price: 16,
    shortDescription: "Pre-printed tags with raised lettering.",
    description:
      "Twelve tags printed with raised botanical names for popular houseplants and herbs — stick them in the pot and skip the guesswork when watering day comes around.",
    images: [
      p("art-tag-hero.jpg", "Pastel plant tags reading Basil, Lavender, and Rosemary in raised lettering, planted in a pot"),
      p("art-tag-inhand.jpg", "A hand holding a sage plant tag reading Sage in raised lettering"),
      p("art-tag-swatch-sage.jpg", "A sage plant tag, detail view"),
    ],
    colors: filamentColors,
    featured: true,
  },
  {
    slug: "blank-garden-tags",
    name: "Blank Garden Tags (Set of 20)",
    category: "plant-tags",
    price: 14,
    shortDescription: "Write-your-own tags for garden rows.",
    description:
      "Twenty blank stake tags for garden beds and nursery rows in a mix of pastel colors — write with any garden marker or grease pencil, wipe clean, reuse next season.",
    images: [
      p("art-tag-fan.jpg", "A fanned row of blank plant tags in pastel colors"),
      p("art-tag-swatch-yellow.jpg", "A blank tag in butter yellow"),
    ],
    colors: filamentColors,
  },
  {
    slug: "herb-garden-marker-set",
    name: "Herb Garden Marker Set",
    category: "plant-tags",
    price: 18,
    shortDescription: "Short stakes sized for pots and window boxes.",
    description:
      "Shorter stakes designed for kitchen herb pots and window boxes, so they don't tower over basil and thyme.",
    images: [
      p("art-tag-swatch-cream.jpg", "An herb marker in ivory cream"),
      p("art-tag-swatch-blue.jpg", "An herb marker in sky blue"),
    ],
    colors: filamentColors,
  },
  {
    slug: "reusable-chalkboard-plant-tags",
    name: "Reusable Chalkboard Plant Tags (Set of 8)",
    category: "plant-tags",
    price: 15,
    shortDescription: "A matte finish that takes chalk marker beautifully.",
    description:
      "A matte, chalkboard-style surface for chalk markers — great for market displays and propagation stations you relabel often.",
    images: [
      p("art-tag-inhand.jpg", "A hand holding a matte-finish plant tag"),
      p("art-tag-fan.jpg", "A row of matte plant tags in assorted colors"),
    ],
    colors: filamentColors,
  },

  // Floral Bucket Inserts
  {
    slug: "universal-bucket-grid-insert",
    name: "Universal Bucket Grid Insert",
    category: "bucket-inserts",
    price: 19,
    shortDescription: "Snap-fit grid for standard florist buckets.",
    description:
      "A snap-fit grid that clips inside standard florist buckets to keep stems separated, upright, and easy to count at a glance.",
    images: [
      p("art-bucket-hero.jpg", "A sage grid insert fitted inside a white bucket, holding a mixed flower bunch upright"),
      p("art-bucket-swatch-blue.jpg", "The grid insert in blue"),
      p("art-bucket-swatch-gray.jpg", "The grid insert in slate gray"),
    ],
    colors: filamentColors,
    featured: true,
  },
  {
    slug: "mason-jar-flower-frog-lid",
    name: "Mason Jar Flower Frog Lid",
    category: "bucket-inserts",
    price: 12,
    shortDescription: "Turn any mason jar into an arranging vessel.",
    description:
      "A clip-on grid lid sized for standard wide-mouth mason jars — an easy way to turn jars you already have into proper arranging vessels.",
    images: [
      p("bucket-grid-insert.jpg", "A clip-on grid lid clamped onto a glass mason jar, with stems arranged through the grid"),
      p("art-bucket-sage.jpg", "A sage grid insert, detail view"),
    ],
    colors: filamentColors,
  },
  {
    slug: "five-gallon-bucket-divider",
    name: "5-Gallon Bucket Divider Insert",
    category: "bucket-inserts",
    price: 26,
    shortDescription: "Big-batch organization for market days.",
    description:
      "A wide-diameter divider for 5-gallon buckets — built for market prep and large-volume processing days.",
    images: [
      p("art-bucket-black.jpg", "A large grid divider insert fitted inside a dark bucket"),
      p("art-bucket-swatch-gray.jpg", "The divider insert in slate gray"),
    ],
    colors: filamentColors,
  },
  {
    slug: "mini-vase-grid-topper",
    name: "Mini Vase Grid Topper",
    category: "bucket-inserts",
    price: 14,
    shortDescription: "A smaller grid for bud vases and jars.",
    description:
      "Scaled down for bud vases and small jars — a lighter grid pattern that stays nearly invisible once flowers are in.",
    images: [
      p("art-bucket-blue.jpg", "A small blue grid topper"),
      p("art-bucket-swatch-pink.jpg", "The grid topper in blush pink"),
    ],
    colors: filamentColors,
  },

  // Vase Buddies
  {
    slug: "fenwick-the-fox",
    name: "Fenwick the Fox — Vase Buddy",
    category: "vase-buddies",
    price: 17,
    shortDescription: "A little fox who perches on any vase rim.",
    description:
      "Fenwick perches on the edge of a vase or the rim of a pot, printed in one piece with no assembly — just set him on the edge and let him keep watch over your flowers.",
    images: [
      p("art-vb-row-fox.jpg", "Fenwick the Fox, a small orange 3D-printed fox figurine"),
      p("art-vb-group.jpg", "Fenwick sitting together with the bunny and frog Vase Buddies"),
    ],
    colors: filamentColors,
    featured: true,
  },
  {
    slug: "bramble-the-bunny",
    name: "Bramble the Bunny — Vase Buddy",
    category: "vase-buddies",
    price: 17,
    shortDescription: "Long ears, bigger personality.",
    description:
      "Bramble's oversized ears make her easy to spot peeking out from a bouquet — a favorite for spring arrangements and Easter tablescapes.",
    images: [
      p("art-vb-row-bunny.jpg", "Bramble the Bunny, a small white 3D-printed rabbit figurine"),
      p("art-vb-group.jpg", "Bramble sitting together with the frog and fox Vase Buddies"),
    ],
    colors: filamentColors,
  },
  {
    slug: "percy-the-frog",
    name: "Percy the Frog — Vase Buddy",
    category: "vase-buddies",
    price: 15,
    shortDescription: "A pond-side classic, right on your windowsill.",
    description:
      "Percy sits low and wide on a pot rim, printed in a matte finish so he looks right at home next to real greenery.",
    images: [
      p("art-vb-row-frog.jpg", "Percy the Frog, a small sage green 3D-printed frog figurine"),
      p("art-vb-group.jpg", "Percy sitting together with the bunny and fox Vase Buddies"),
    ],
    colors: filamentColors,
  },
  {
    slug: "clementine-the-cat",
    name: "Clementine the Cat — Pot Buddy",
    category: "vase-buddies",
    price: 17,
    shortDescription: "For the plant parent whose actual cat won't stay out of the pots.",
    description:
      "Clementine perches on the edge of a planter, tail curled around her paws — a safer alternative to the real cat who keeps digging in the soil.",
    images: [
      p("art-vb-row-cat.jpg", "Clementine the Cat, a small gray 3D-printed cat figurine"),
      p("art-vb-cat.jpg", "Clementine perched on the rim of a planter"),
    ],
    colors: filamentColors,
  },
  {
    slug: "hazel-the-hedgehog",
    name: "Hazel the Hedgehog — Pot Buddy",
    category: "vase-buddies",
    price: 16,
    shortDescription: "Small, round, and quietly delightful.",
    description:
      "Hazel tucks into the edge of a pot, spines textured in the print itself — a small, quiet detail that gets noticed every time.",
    images: [
      p("art-vb-row-hedgehog.jpg", "Hazel the Hedgehog, a small tan 3D-printed hedgehog figurine"),
      p("art-vb-hedgehog.jpg", "Hazel tucked into the rim of a planter"),
    ],
    colors: filamentColors,
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, count);
}
