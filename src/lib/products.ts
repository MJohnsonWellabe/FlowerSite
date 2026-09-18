// Product photography: real reference photos (heart stem slider, pin frogs, bucket grid
// insert) live in /public/images/products alongside simple icon-illustrations standing in
// for the product lines we don't have real photos of yet (bouquet formers, rings, tags,
// vase buddies). Category hero banners use general florist/lifestyle photography from
// Unsplash for mood, not as literal product shots. Swap all of it for real photography
// once you're shooting your own prints — every field on Product is designed to be
// replaced wholesale.

export type ProductColor = { name: string; hex: string };
export type ProductImage = { src: string; alt: string };

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: ProductImage;
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

// Lifestyle/mood photography (Unsplash) — used only for category hero banners, never
// as a stand-in for a specific product.
const mood = (src: string, alt: string): ProductImage => ({
  src: `https://images.unsplash.com/${src}?w=1200&q=80&auto=format&fit=crop`,
  alt,
});

// Local product imagery — real reference photos or icon-illustrations, both stored in
// /public/images/products.
const p = (file: string, alt: string): ProductImage => ({
  src: `/images/products/${file}`,
  alt,
});

export const categories: Category[] = [
  {
    slug: "stem-tools",
    name: "Stem & Rose Tools",
    tagline: "Strip, size, and prep stems in one pass",
    description:
      "Board-style stripping tools that pull thorns and foliage off in a single smooth motion, so your hands stay clean and your roses stay perfect.",
    heroImage: p(
      "stem-slider-heart.png",
      "The heart-shaped Stem Slider stripping board, engraved with rose-stem guides"
    ),
  },
  {
    slug: "flower-frogs",
    name: "Flower Frogs & Pin Holders",
    tagline: "Precision stem placement, no floral foam needed",
    description:
      "Pin-style flower frogs that hold every stem exactly where you want it — reusable, foam-free, and satisfying to arrange with.",
    heroImage: p("pin-frog-large.png", "A large round pin frog, pins facing up"),
  },
  {
    slug: "bouquet-box-makers",
    name: "Bouquet Box Makers",
    tagline: "Build restaurant-quality hand-tieds, every time",
    description:
      "Adjustable formers that hold your spiral while you work, so hand-tied bouquets come out balanced and even — even on a rush order.",
    heroImage: mood(
      "photo-1533616688419-b7a585564566",
      "A lush orange and red bouquet arranged in a mason jar"
    ),
  },
  {
    slug: "bouquet-rings",
    name: "Bouquet Rings",
    tagline: "Clean handles for hand-tied bouquets",
    description:
      "Lightweight rings that slide onto a hand-tied bouquet to keep the stems gathered and the handle comfortable to hold and photograph.",
    heroImage: mood(
      "photo-1550005809-91ad75fb315f",
      "A bride holding a soft pastel bouquet, close up on the flowers"
    ),
  },
  {
    slug: "plant-tags",
    name: "Plant Tags",
    tagline: "Label rows, pots, and propagation stations",
    description:
      "Durable, reusable plant markers for nursery rows, garden beds, and windowsill propagation stations — write on them, wipe them, reuse them.",
    heroImage: mood(
      "photo-1631815589968-fdb09a223b1e",
      "Rows of small seedlings growing in individual pots"
    ),
  },
  {
    slug: "bucket-inserts",
    name: "Floral Bucket Inserts",
    tagline: "Grid organization for buckets, jars, and coolers",
    description:
      "Snap-fit grid inserts that keep stems separated and upright in buckets, jars, and cooler bins — no more tangled, leaning bunches.",
    heroImage: p(
      "bucket-grid-insert.jpg",
      "A 3D-printed grid insert clipped onto a glass jar, keeping stems separated"
    ),
  },
  {
    slug: "vase-buddies",
    name: "Vase Buddies",
    tagline: "Small, friendly faces for vases and houseplants",
    description:
      "Little clip-on characters that perch on a vase rim or pot edge — the just-for-fun line, made to make someone smile.",
    heroImage: mood(
      "photo-1509587584298-0f3b3a3a1797",
      "A small cactus with a pink bloom in a white ceramic mug"
    ),
  },
];

export const products: Product[] = [
  // Stem & Rose Tools
  {
    slug: "heart-stem-slider",
    name: "Heart Stem Slider",
    category: "stem-tools",
    price: 28,
    shortDescription: "Our signature heart-shaped stem-stripping board.",
    description:
      "Pull a rose through the guided channel and it comes out thornless and foliage-free — the heart shape doubles as a display piece for your workbench between orders. Fits standard rose, spray rose, and carnation stems.",
    images: [
      p("stem-slider-heart.png", "The heart-shaped Stem Slider board, engraved with rose-stem guides"),
      p("icon-stem-slider-b.png", "Diagram of the guided center channel and thorn-stripping ridges"),
    ],
    colors: filamentColors,
    featured: true,
  },
  {
    slug: "classic-stem-slider",
    name: "Classic Stem Slider",
    category: "stem-tools",
    price: 24,
    shortDescription: "The no-frills, oval-shaped original.",
    description:
      "A streamlined oval stripping board sized for fast, repetitive work — built for studios processing large volumes of stems before a big event.",
    images: [
      p("icon-stem-slider-a.png", "Diagram of the oval stem-stripping board"),
      p("stem-slider-heart.png", "The heart-shaped Stem Slider board, for scale reference"),
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
      "Slips into a kit bag or apron pocket for wedding-day touch-ups, market stall trims, and anywhere you need a quick clean stem away from the studio.",
    images: [
      p("icon-stem-slider-c.png", "Diagram of the compact travel-size stripping board"),
      p("icon-stem-slider-a.png", "Diagram of the guided stripping channel"),
    ],
    colors: filamentColors,
  },
  {
    slug: "double-blade-stem-stripper",
    name: "Double-Blade Stem Stripper",
    category: "stem-tools",
    price: 16,
    shortDescription: "A simple pull-through stripper with two channel sizes.",
    description:
      "Two channel widths in one tool — one pass for thin spray roses, one for thicker garden rose stems. Replaceable blade slot included.",
    images: [
      p("icon-stem-slider-b.png", "Diagram of the two-channel pull-through stripper"),
      p("icon-stem-slider-c.png", "Diagram of the stripping channel detail"),
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
      "Dense pins hold delicate stems upright in small-mouth vases and jars — perfect for bud vases, tablescapes, and low centerpieces.",
    images: [
      p("pin-frog-small.png", "A small round pin frog with densely packed pins"),
      p("pin-frog-medium.png", "A medium pin frog, for size comparison"),
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
      p("pin-frog-large.png", "A large round pin frog, pins facing up"),
      p("pin-frog-medium.png", "A medium pin frog, for size comparison"),
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
      p("pin-frog-large.png", "The large pin frog from the set"),
      p("pin-frog-medium.png", "The medium pin frog from the set"),
      p("pin-frog-small.png", "The small pin frog from the set"),
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
      p("pin-frog-medium.png", "A low-profile pin frog with pins facing up"),
      p("pin-frog-small.png", "A smaller pin frog, for size comparison"),
    ],
    colors: filamentColors,
  },

  // Bouquet Box Makers
  {
    slug: "adjustable-bouquet-former",
    name: "Adjustable Bouquet Former",
    category: "bouquet-box-makers",
    price: 32,
    shortDescription: "Holds your spiral while you build.",
    description:
      "Four adjustable arms cradle a hand-tied bouquet mid-build so both hands are free to place stems — take the guesswork out of an even spiral.",
    images: [
      p("icon-bouquet-former-a.png", "Diagram of the four-arm adjustable bouquet former"),
      p("icon-bouquet-former-b.png", "Diagram of the former's adjustable clamp arms"),
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
      p("icon-bouquet-former-c.png", "Diagram of the compact bridal-size bouquet former"),
      p("icon-bouquet-former-a.png", "Diagram of the former's clamp arms"),
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
      p("icon-bouquet-former-b.png", "Diagram of the open-frame bouquet cage"),
      p("icon-bouquet-former-c.png", "Diagram of the former's adjustable arms"),
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
      p("icon-ring-a.png", "Diagram of the classic bouquet handle ring"),
      p("icon-ring-c.png", "Diagram of the ring, smaller size reference"),
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
      p("icon-ring-d.png", "Diagram of the wide-grip bouquet ring"),
      p("icon-ring-a.png", "Diagram of the ring band"),
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
      "One ring for the bride's bouquet, two more for the bridesmaids — a matched set that nests together for easy storage between events.",
    images: [
      p("icon-ring-d.png", "Diagram of the largest ring in the set"),
      p("icon-ring-a.png", "Diagram of the mid-size ring in the set"),
      p("icon-ring-c.png", "Diagram of the smallest ring in the set"),
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
      p("icon-ring-c.png", "Diagram of the petite bouquet ring"),
      p("icon-ring-b.png", "Diagram of the ring band detail"),
    ],
    colors: filamentColors,
  },

  // Plant Tags
  {
    slug: "botanical-name-plant-tags",
    name: "Botanical Name Plant Tags (Set of 12)",
    category: "plant-tags",
    price: 16,
    shortDescription: "Pre-printed tags for common houseplants.",
    description:
      "Twelve tags printed with common botanical names for popular houseplants — stick them in the pot and skip the guesswork when watering day comes around.",
    images: [
      p("icon-tag-a.png", "Diagram of a plant stake tag"),
      p("icon-tag-b.png", "Diagram of a plant stake tag, alternate color"),
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
      "Twenty blank stake tags for garden beds and nursery rows — write with any garden marker or grease pencil, wipe clean, reuse next season.",
    images: [
      p("icon-tag-c.png", "Diagram of a blank garden stake tag"),
      p("icon-tag-d.png", "Diagram of a blank garden stake tag, alternate color"),
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
      p("icon-tag-d.png", "Diagram of a short herb marker stake"),
      p("icon-tag-a.png", "Diagram of the marker's paddle top"),
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
      p("icon-tag-b.png", "Diagram of a chalkboard-finish plant tag"),
      p("icon-tag-c.png", "Diagram of the tag's paddle shape"),
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
      p("bucket-grid-insert.jpg", "A grid insert clipped onto a jar, keeping stems separated"),
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
      "A pin-frog lid sized for standard wide-mouth mason jars — an easy way to turn jars you already have into proper arranging vessels.",
    images: [
      p("bucket-grid-insert.jpg", "A grid lid clamped onto a mason jar"),
      p("pin-frog-small.png", "A small pin frog, for a pinned alternative"),
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
      p("bucket-grid-insert.jpg", "A wide grid divider insert on a jar"),
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
      p("bucket-grid-insert.jpg", "A grid topper clipped onto a small jar"),
    ],
    colors: filamentColors,
  },

  // Vase Buddies
  {
    slug: "fenwick-the-fox",
    name: "Fenwick the Fox — Vase Buddy",
    category: "vase-buddies",
    price: 17,
    shortDescription: "A little fox who clips onto any vase rim.",
    description:
      "Fenwick perches on the edge of a vase or the rim of a pot, printed in one piece with no assembly — just clip him on and let him keep watch over your flowers.",
    images: [
      p("icon-fox.png", "Illustration of Fenwick the Fox vase buddy character"),
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
      p("icon-bunny.png", "Illustration of Bramble the Bunny vase buddy character"),
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
      p("icon-frog-buddy.png", "Illustration of Percy the Frog vase buddy character"),
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
      "Clementine curls around the edge of a planter, tail and all — a safer alternative to the real cat who keeps digging in the soil.",
    images: [
      p("icon-cat.png", "Illustration of Clementine the Cat pot buddy character"),
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
      "Hazel sits flat against the base of a pot, spines textured in the print itself — a small, quiet detail that gets noticed every time.",
    images: [
      p("icon-hedgehog.png", "Illustration of Hazel the Hedgehog pot buddy character"),
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
