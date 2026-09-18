import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartForm from "@/components/AddToCartForm";
import ProductCard from "@/components/ProductCard";
import ProductDetailTabs from "@/components/ProductDetailTabs";
import ProductGallery from "@/components/ProductGallery";
import {
  getCategory,
  getProduct,
  getRelatedProducts,
  products,
} from "@/lib/products";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? `${product.name} — Petal & Press` : "Petal & Press" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);

  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      <div className="mb-6 flex items-center gap-1.5 text-sm text-ink-soft">
        <Link href="/shop" className="hover:text-sage-dark">
          &larr; Back to Shop
        </Link>
        {category && (
          <>
            <span>/</span>
            <Link href={`/shop/${category.slug}`} className="hover:text-sage-dark">
              {category.name}
            </Link>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ProductGallery images={product.images} />

        <div className="flex flex-col gap-5">
          <div>
            {category && (
              <p className="text-sm font-medium text-sage-dark">{category.name}</p>
            )}
            <h1 className="font-display text-3xl font-semibold sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-2xl font-semibold text-ink">${product.price}</p>
          </div>

          <p className="text-ink-soft">{product.shortDescription}</p>

          <AddToCartForm product={product} />
        </div>
      </div>

      <div className="mt-14 max-w-3xl">
        <ProductDetailTabs product={product} />
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 font-display text-2xl font-semibold">You Might Also Like</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
