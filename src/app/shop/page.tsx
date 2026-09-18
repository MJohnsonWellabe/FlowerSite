import type { Metadata } from "next";
import ShopBrowser from "@/components/ShopBrowser";
import { categories, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop All Products — Petal & Press",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="mb-8 max-w-xl">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">All Products</h1>
        <p className="mt-2 text-ink-soft">
          Tools, accessories, and a few new friends for your workbench.
        </p>
      </div>
      <ShopBrowser products={products} categories={categories} />
    </div>
  );
}
