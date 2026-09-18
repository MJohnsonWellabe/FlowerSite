import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

export const metadata: Metadata = { title: "Our Story — Petal & Press" };

const values = [
  {
    title: "Small Business, Big Heart",
    body: "We're a tiny studio, not a warehouse — every order is printed, checked, and packed by an actual person.",
  },
  {
    title: "Quality Materials",
    body: "PLA and PETG filament chosen for durability, not just for looking good on day one.",
  },
  {
    title: "Designed for Florists",
    body: "Every tool starts as a real problem a florist brought to us, not a guess at what might sell.",
  },
  {
    title: "Made to Last",
    body: "Reusable by design — fewer single-use tools in the trash at the end of a wedding season.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blush px-3 py-1 text-xs font-semibold text-terracotta-dark">
            Our Story
          </span>
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">
            A Small Studio with a Big Love for Flowers
          </h1>
          <p className="text-ink-soft">
            Petal &amp; Press started on a kitchen table with one 3D printer and a florist
            friend who was tired of buying single-use tools that didn&apos;t quite fit her hands
            or her workflow. A few prototypes later, the stem slider she asked for became the
            first thing we ever sold.
          </p>
          <p className="text-ink-soft">
            We&apos;re still a small team, but the mission hasn&apos;t changed: design practical,
            beautiful tools for florists, flower lovers, and creative makers — and print every
            single one ourselves, in colors that actually look nice on a studio shelf.
          </p>
          <Link
            href="/custom-orders"
            className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-sage-dark px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-sage"
          >
            Got an idea for a tool? Let&apos;s talk &rarr;
          </Link>
        </div>
        <div className="relative h-72 w-full overflow-hidden rounded-3xl sm:h-96">
          <Image
            src={withBasePath("/images/lifestyle/about-workshop.jpg")}
            alt="A 3D-printed floral bucket insert prototype on the studio workbench, next to fresh dahlias and another print in progress"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-black/5 bg-white p-6">
            <p className="font-display text-lg font-semibold">{v.title}</p>
            <p className="mt-2 text-sm text-ink-soft">{v.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
