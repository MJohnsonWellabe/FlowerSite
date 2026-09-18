"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Category, Product } from "@/lib/products";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export default function ShopBrowser({
  products,
  categories,
  initialCategory = "all",
  showChips = true,
}: {
  products: Product[];
  categories: Category[];
  initialCategory?: string;
  showChips?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    const list =
      activeCategory === "all"
        ? products
        : products.filter((p) => p.category === activeCategory);

    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "featured")
      sorted.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    return sorted;
  }, [products, activeCategory, sort]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {showChips ? (
          <div className="flex flex-wrap gap-2">
            <Chip
              label="All"
              active={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
            />
            {categories.map((c) => (
              <Chip
                key={c.slug}
                label={c.name}
                active={activeCategory === c.slug}
                onClick={() => setActiveCategory(c.slug)}
              />
            ))}
          </div>
        ) : (
          <span />
        )}

        <label className="flex items-center gap-2 text-sm text-ink-soft">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-ink outline-none focus:border-sage"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A–Z</option>
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-ink-soft">
          No products in this category yet — check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-sage-dark bg-sage-dark text-cream"
          : "border-black/10 bg-white text-ink-soft hover:border-sage"
      }`}
    >
      {label}
    </button>
  );
}
