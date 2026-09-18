import Image from "next/image";
import Link from "next/link";
import { getProductsByCategory } from "@/lib/products";

export default function VaseBuddiesTeaser() {
  const buddies = getProductsByCategory("vase-buddies").slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="overflow-hidden rounded-3xl bg-blush">
        <div className="flex flex-col items-center gap-8 px-6 py-10 sm:flex-row sm:px-10">
          <div className="flex flex-1 flex-col gap-3 text-center sm:text-left">
            <span className="mx-auto inline-flex w-fit items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-terracotta-dark sm:mx-0">
              Just for fun
            </span>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Meet the Vase Buddies
            </h2>
            <p className="max-w-md text-sm text-ink-soft">
              Little clip-on characters for vases and houseplant pots — not everything we print
              has to be strictly practical. Sometimes a plant just needs a friend.
            </p>
            <Link
              href="/shop/vase-buddies"
              className="mx-auto mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark sm:mx-0"
            >
              Meet the Buddies &rarr;
            </Link>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-3">
            {buddies.map((b) => (
              <Link
                key={b.slug}
                href={`/product/${b.slug}`}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-white/60"
              >
                <Image
                  src={b.images[0].src}
                  alt={b.images[0].alt}
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
