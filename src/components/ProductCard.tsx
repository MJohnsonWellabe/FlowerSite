import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-sand">
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-ink-soft">
          {product.colors.length} colors
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-medium leading-snug text-ink">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-ink-soft">{product.shortDescription}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-display text-lg font-semibold">${product.price}</span>
          <span className="text-xs font-medium text-sage-dark opacity-0 transition-opacity group-hover:opacity-100">
            View details &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
