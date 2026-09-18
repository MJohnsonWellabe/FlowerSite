"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { lines, subtotal } = useCart();

  if (lines.length === 0) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-24 text-center sm:px-8">
        <h1 className="font-display text-3xl font-semibold">Nothing to check out yet</h1>
        <p className="text-ink-soft">Add a few tools to your cart first.</p>
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
      <h1 className="mb-8 font-display text-3xl font-semibold sm:text-4xl">Checkout</h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <form
          className="flex flex-col gap-5 lg:col-span-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold">Shipping Information</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="First Name" name="firstName" />
              <Field label="Last Name" name="lastName" />
              <Field label="Address" name="address" full />
              <Field label="Apartment, suite, etc. (optional)" name="address2" full required={false} />
              <Field label="City" name="city" />
              <Field label="State" name="state" />
              <Field label="ZIP Code" name="zip" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone (optional)" name="phone" required={false} />
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <div className="mb-3 flex items-center gap-2">
              <StripeMark />
              <p className="font-display text-lg font-semibold">Payment</p>
            </div>
            <div className="rounded-xl bg-sand p-4 text-sm text-ink-soft">
              <p className="font-semibold text-ink">TODO: Stripe Checkout Session goes here</p>
              <p className="mt-1">
                Integrate Stripe Checkout to securely collect payment information. Create an
                API route (<code className="rounded bg-white px-1 py-0.5">/api/checkout</code>)
                to generate a Checkout Session and redirect the customer to Stripe — see the
                stub in <code className="rounded bg-white px-1 py-0.5">src/app/api/checkout/route.ts</code>.
              </p>
            </div>
            <button
              type="button"
              disabled
              className="mt-4 w-full cursor-not-allowed rounded-full bg-black/15 px-6 py-3.5 text-sm font-semibold text-ink-soft"
            >
              Pay with Stripe (Coming Soon)
            </button>
          </div>
        </form>

        <div className="h-fit rounded-2xl border border-black/5 bg-white p-6">
          <h2 className="mb-4 font-display text-lg font-semibold">Order Summary</h2>
          <div className="flex flex-col gap-3">
            {lines.map((line) => (
              <div key={`${line.slug}-${line.color}`} className="flex items-center gap-3">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-sand">
                  {line.image && (
                    <Image src={line.image} alt={line.name} fill sizes="48px" className="object-cover" />
                  )}
                </div>
                <div className="flex-1 text-sm">
                  <p className="font-medium text-ink">{line.name}</p>
                  <p className="text-ink-soft">
                    {line.color} &middot; Qty {line.quantity}
                  </p>
                </div>
                <p className="text-sm font-semibold">${(line.price * line.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-1.5 border-t border-black/5 pt-4 text-sm">
            <div className="flex justify-between text-ink-soft">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-ink-soft">
              <span>Shipping</span>
              <span>Calculated at payment</span>
            </div>
            <div className="flex justify-between pt-2 text-base font-semibold text-ink">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  full = false,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  full?: boolean;
  required?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm ${full ? "sm:col-span-2" : ""}`}>
      <span className="font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-black/10 bg-white px-3.5 py-2.5 outline-none focus:border-sage"
      />
    </label>
  );
}

function StripeMark() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#635bff] text-white">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M13.5 8.1c0-.9.8-1.3 2-1.3 1.8 0 4 .5 5.8 1.5V3.6C19.5 2.9 17.5 2.5 15.5 2.5c-4.7 0-7.9 2.5-7.9 6.6 0 6.4 8.9 5.4 8.9 8.1 0 1-.9 1.4-2.2 1.4-1.9 0-4.4-.8-6.3-1.9v4.8c2.1.9 4.3 1.3 6.3 1.3 4.9 0 8.2-2.4 8.2-6.6 0-6.9-9-5.7-9-8.1Z" />
      </svg>
    </span>
  );
}
