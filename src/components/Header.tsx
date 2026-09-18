"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/lib/products";

export default function Header() {
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage text-cream">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3c1.5 2 1.5 4 0 6-1.5-2-1.5-4 0-6Z" />
              <path d="M12 9c2.5 0 4.5 1.5 5 4-2.5 0-4.5-1.5-5-4Z" />
              <path d="M12 9c-2.5 0-4.5 1.5-5 4 2.5 0 4.5-1.5 5-4Z" />
              <path d="M12 13v8" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Petal &amp; Press
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          <div className="group relative">
            <Link href="/shop" className="transition-colors hover:text-sage-dark">
              Shop
            </Link>
            <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-1 gap-1 rounded-2xl border border-black/5 bg-white p-3 shadow-lg">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/shop/${c.slug}`}
                    className="rounded-lg px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-sand hover:text-ink"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/about" className="transition-colors hover:text-sage-dark">
            Our Story
          </Link>
          <Link href="/custom-orders" className="transition-colors hover:text-sage-dark">
            Custom Orders
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors hover:border-sage"
            aria-label="View cart"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M1 1h3l2.6 13.2a2 2 0 0 0 2 1.8h9.8a2 2 0 0 0 2-1.6L22 6H6" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-terracotta px-1 text-[11px] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-cream px-5 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium">
            <Link href="/shop" className="rounded-lg px-2 py-2" onClick={() => setOpen(false)}>
              Shop All
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/shop/${c.slug}`}
                className="rounded-lg px-2 py-2 pl-5 text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {c.name}
              </Link>
            ))}
            <Link href="/about" className="rounded-lg px-2 py-2" onClick={() => setOpen(false)}>
              Our Story
            </Link>
            <Link href="/custom-orders" className="rounded-lg px-2 py-2" onClick={() => setOpen(false)}>
              Custom Orders
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
