import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-8 sm:px-8 sm:pt-12">
      <div className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl bg-blush lg:grid-cols-2">
        <div className="flex flex-col gap-4 px-6 py-10 sm:px-12 sm:py-14">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-sage-dark">
            Small studio &middot; big love for flowers
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl">
            Tools for Brighter Days
          </h1>
          <p className="max-w-md text-ink-soft">
            3D-printed tools and playful accessories for florists, flower lovers, and creative
            makers — designed and printed in our own studio, one layer at a time.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
            >
              Shop All Products
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              Our Story
            </Link>
          </div>
        </div>
        <div className="relative h-72 w-full sm:h-96 lg:h-[26rem]">
          <Image
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=1400&q=80&auto=format&fit=crop"
            alt="Hands holding a heart-shaped arrangement of fresh flowers"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
