import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/products";

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
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="relative p-4 text-cream">
        <p className="font-display text-lg font-semibold">{category.name}</p>
        <p className="text-xs text-cream/85">{category.tagline}</p>
      </div>
    </Link>
  );
}
