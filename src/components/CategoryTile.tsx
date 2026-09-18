import Image from "next/image";
import Link from "next/link";
import type { Accent, Category } from "@/lib/products";

const ACCENT_GRADIENT: Record<Accent, string> = {
  blush: "from-[#8a4a5c]/75",
  sage: "from-[#3f4d38]/75",
  lavender: "from-[#4b3d6b]/75",
  sky: "from-[#2e5266]/75",
  butter: "from-[#6b5a2a]/75",
  terracotta: "from-[#6b3a26]/75",
};

const ACCENT_BADGE: Record<Accent, string> = {
  blush: "bg-blush-dark/85",
  sage: "bg-sage-dark/85",
  lavender: "bg-lavender-dark/85",
  sky: "bg-sky-dark/85",
  butter: "bg-butter-dark/85",
  terracotta: "bg-terracotta-dark/85",
};

export default function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      href={`/shop/${category.slug}`}
      className="group relative flex h-56 flex-col justify-end overflow-hidden rounded-2xl border border-black/5"
    >
      <Image
        src={category.heroImage.src}
        alt={category.heroImage.alt}
        fill
        sizes="(min-width: 1024px) 33vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${ACCENT_GRADIENT[category.accent]} via-black/5 to-transparent`}
      />
      <span
        className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-medium text-white ${ACCENT_BADGE[category.accent]}`}
      >
        Shop now
      </span>
      <div className="relative p-4 text-cream">
        <p className="font-display text-lg font-semibold">{category.name}</p>
        <p className="text-xs text-cream/85">{category.tagline}</p>
      </div>
    </Link>
  );
}
