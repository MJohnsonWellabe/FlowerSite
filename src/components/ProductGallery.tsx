"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/lib/products";

export default function ProductGallery({ images }: { images: ProductImage[] }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row">
      {images.length > 1 && (
        <div className="flex gap-2 sm:flex-col">
          {images.map((image, i) => (
            <button
              key={image.src + i}
              onClick={() => setActive(i)}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${
                i === active ? "border-sage" : "border-transparent"
              }`}
              aria-label={`Show image ${i + 1}`}
            >
              <Image src={image.src} alt={image.alt} fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
      <div className="relative aspect-square flex-1 overflow-hidden rounded-2xl bg-sand">
        {current && (
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}
