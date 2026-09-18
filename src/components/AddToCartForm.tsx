"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";

export default function AddToCartForm({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="mb-2 text-sm font-semibold text-ink">
          Color: <span className="font-normal text-ink-soft">{color}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setColor(c.name)}
              aria-label={c.name}
              title={c.name}
              className={`h-8 w-8 rounded-full border-2 transition-transform ${
                color === c.name ? "scale-110 border-sage" : "border-white"
              } shadow-sm ring-1 ring-black/10`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-ink">Quantity</p>
        <div className="flex w-fit items-center rounded-full border border-black/10 bg-white">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-9 w-9 items-center justify-center text-lg text-ink-soft"
            aria-label="Decrease quantity"
          >
            &minus;
          </button>
          <span className="w-8 text-center text-sm font-medium">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-9 w-9 items-center justify-center text-lg text-ink-soft"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          addItem(product, color, quantity);
          setJustAdded(true);
          setTimeout(() => setJustAdded(false), 1800);
        }}
        className="rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
      >
        {justAdded ? "Added to Cart ✓" : "Add to Cart"}
      </button>

      {justAdded && (
        <button
          type="button"
          onClick={() => router.push("/cart")}
          className="-mt-2 text-left text-sm font-medium text-sage-dark underline underline-offset-2"
        >
          View cart &rarr;
        </button>
      )}

      <ul className="grid grid-cols-1 gap-2 border-t border-black/5 pt-4 text-sm text-ink-soft sm:grid-cols-3 sm:gap-3">
        <li className="flex items-center gap-2">
          <TrustIcon /> 3D printed with care
        </li>
        <li className="flex items-center gap-2">
          <TrustIcon /> Durable &amp; lightweight
        </li>
        <li className="flex items-center gap-2">
          <TrustIcon /> Designed for real florists
        </li>
      </ul>
    </div>
  );
}

function TrustIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="flex-shrink-0 text-sage-dark"
    >
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
