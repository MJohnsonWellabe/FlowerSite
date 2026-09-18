"use client";

import Image from "next/image";
import { useState } from "react";

export default function CustomOrdersPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-sage-light px-3 py-1 text-xs font-semibold text-sage-dark">
            Custom &amp; Bulk Orders
          </span>
          <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Need Something Special?
          </h1>
          <p className="mt-3 max-w-md text-ink-soft">
            We love working with florists, event planners, and businesses on custom designs,
            color matching, and bulk orders — weddings, studio branding, corporate events, you
            name it. Tell us what you&apos;re picturing and we&apos;ll follow up with next steps
            and a quote.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6">
              <p className="font-display text-lg font-semibold">Request received!</p>
              <p className="mt-1 text-sm text-ink-soft">
                Thanks for reaching out — we&apos;ll be in touch within a couple of business
                days.
              </p>
            </div>
          ) : (
            <form
              className="mt-8 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-ink">Name</span>
                  <input
                    required
                    className="rounded-xl border border-black/10 bg-white px-3.5 py-2.5 outline-none focus:border-sage"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-ink">Email</span>
                  <input
                    type="email"
                    required
                    className="rounded-xl border border-black/10 bg-white px-3.5 py-2.5 outline-none focus:border-sage"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-ink">Tell us about your project&hellip;</span>
                <textarea
                  required
                  rows={5}
                  placeholder="Event date, quantities, colors, or anything else that helps us understand what you need."
                  className="rounded-xl border border-black/10 bg-white px-3.5 py-2.5 outline-none focus:border-sage"
                />
              </label>
              <button
                type="submit"
                className="w-fit rounded-full bg-sage-dark px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-sage"
              >
                Send Request
              </button>
            </form>
          )}
        </div>

        <div className="relative h-72 overflow-hidden rounded-3xl lg:h-full">
          <Image
            src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1200&q=80&auto=format&fit=crop"
            alt="A bouquet of rainbow-dyed roses"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 text-sm font-medium text-ink shadow">
            Custom ideas welcome!
          </div>
        </div>
      </div>
    </div>
  );
}
