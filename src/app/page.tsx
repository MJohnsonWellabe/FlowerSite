import Link from "next/link";
import Hero from "@/components/Hero";
import CategoryTile from "@/components/CategoryTile";
import ProductCard from "@/components/ProductCard";
import ProcessSteps from "@/components/ProcessSteps";
import VaseBuddiesTeaser from "@/components/VaseBuddiesTeaser";
import { categories, getFeaturedProducts } from "@/lib/products";

export default function Home() {
  const shopCategories = categories.filter((c) => c.slug !== "vase-buddies");
  const featured = getFeaturedProducts();

  return (
    <div className="flex flex-col gap-16 pb-16 sm:gap-20">
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Shop by Category</h2>
          <Link href="/shop" className="text-sm font-medium text-sage-dark hover:underline">
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {shopCategories.map((c) => (
            <CategoryTile key={c.slug} category={c} />
          ))}
        </div>
      </section>

      <VaseBuddiesTeaser />

      <ProcessSteps />

      <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Featured Products</h2>
          <Link href="/shop" className="text-sm font-medium text-sage-dark hover:underline">
            Shop all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
