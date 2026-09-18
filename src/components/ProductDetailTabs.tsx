"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

const tabs = ["Description", "Details", "Shipping"] as const;

export default function ProductDetailTabs({ product }: { product: Product }) {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Description");

  return (
    <div>
      <div className="flex gap-6 border-b border-black/10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`-mb-px border-b-2 pb-3 text-sm font-medium transition-colors ${
              tab === t
                ? "border-sage-dark text-ink"
                : "border-transparent text-ink-soft hover:text-ink"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="pt-5 text-sm leading-relaxed text-ink-soft">
        {tab === "Description" && <p>{product.description}</p>}
        {tab === "Details" && (
          <ul className="list-disc space-y-1.5 pl-4">
            <li>Printed to order in PLA or PETG, depending on the piece</li>
            <li>Available in {product.colors.length} studio colors</li>
            <li>Wipe clean with a damp cloth — not dishwasher safe</li>
            <li>Designed, printed, and packed by hand in our small studio</li>
          </ul>
        )}
        {tab === "Shipping" && (
          <p>
            Most orders ship within 2–4 business days since every piece is printed to order.
            You&apos;ll get a shipping confirmation with tracking as soon as it&apos;s on its way.
            Need it faster for an event? Mention your date in the order notes and we&apos;ll do
            our best to accommodate.
          </p>
        )}
      </div>
    </div>
  );
}
