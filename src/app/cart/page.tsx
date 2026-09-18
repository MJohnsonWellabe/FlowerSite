"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { lines, updateQuantity, removeItem, subtotal } = useCart();
  const [coupon, setCoupon] = useState("");

  if (lines.length === 0) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-24 text-center sm:px-8">
        <h1 className="font-display text-3xl font-semibold">Your cart is empty</h1>
        <p className="text-ink-soft">Looks like your workbench could use a few new tools.</p>
        <Link
          href="/shop"
          className="mt-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
        >
          Shop All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <h1 className="mb-8 font-display text-3xl font-semibold sm:text-4xl">Your Cart</h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          {lines.map((line) => (
            <div
              key={`${line.slug}-${line.color}`}
              className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4"
            >
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-sand">
                {line.image && (
                  <Image src={line.image} alt={line.name} fill sizes="80px" className="object-cover" />
                )}
              </div>
              <div className="flex-1">
                <Link
                  href={`/product/${line.slug}`}
                  className="font-medium text-ink hover:text-sage-dark"
                >
                  {line.name}
                </Link>
                <p className="text-sm text-ink-soft">{line.color}</p>
                <p className="mt-1 text-sm font-semibold">${line.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center rounded-full border border-black/10 bg-white">
                <button
                  onClick={() => updateQuantity(line.slug, line.color, line.quantity - 1)}
                  className="flex h-8 w-8 items-center justify-center text-ink-soft"
                  aria-label="Decrease quantity"
                >
                  &minus;
                </button>
                <span className="w-6 text-center text-sm">{line.quantity}</span>
                <button
                  onClick={() => updateQuantity(line.slug, line.color, line.quantity + 1)}
                  className="flex h-8 w-8 items-center justify-center text-ink-soft"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <p className="w-16 text-right text-sm font-semibold">
                ${(line.price * line.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeItem(line.slug, line.color)}
                aria-label={`Remove ${line.name}`}
                className="text-ink-soft transition-colors hover:text-terracotta"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-9 0 1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-2xl border border-black/5 bg-white p-6">
          <div className="mb-4 flex gap-2">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon code"
              className="w-full rounded-full border border-black/10 px-4 py-2 text-sm outline-none focus:border-sage"
            />
            <button
              type="button"
              className="rounded-full bg-sand px-4 py-2 text-sm font-medium text-ink-soft"
              title="Coupon codes coming soon"
            >
              Apply
            </button>
          </div>
          <div className="flex items-center justify-between border-t border-black/5 pt-4 text-sm text-ink-soft">
            <span>Subtotal</span>
            <span className="text-ink">${subtotal.toFixed(2)}</span>
          </div>
          <p className="mt-1 text-xs text-ink-soft">Shipping &amp; taxes calculated at checkout</p>
          <div className="mt-4 flex items-center justify-between text-base font-semibold">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link
            href="/checkout"
            className="mt-5 flex w-full items-center justify-center rounded-full bg-sage-dark px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-sage"
          >
            Proceed to Checkout &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
