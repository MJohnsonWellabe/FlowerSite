import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ShopBrowser from "@/components/ShopBrowser";
import { categories, getCategory, products } from "@/lib/products";

type Params = { category: string };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  return { title: cat ? `${cat.name} — Petal & Press` : "Petal & Press" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  return (
    <div>
      <div className="relative h-56 w-full overflow-hidden sm:h-72">
        <Image
          src={cat.heroImage.src}
          alt={cat.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 px-5 text-center text-cream">
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">{cat.name}</h1>
          <p className="mt-2 max-w-lg text-sm text-cream/90 sm:text-base">{cat.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="mb-8 max-w-2xl text-ink-soft">{cat.description}</p>
        <ShopBrowser
          products={products}
          categories={categories}
          initialCategory={cat.slug}
        />
      </div>
    </div>
  );
}
