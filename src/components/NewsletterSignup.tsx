"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/70 px-6 py-10 text-center sm:px-10">
      <h3 className="font-display text-2xl font-semibold">Join Our Newsletter</h3>
      <p className="max-w-md text-sm text-ink-soft">
        New drops, restock alerts, and the occasional behind-the-scenes look at what&apos;s on the print bed.
      </p>
      {submitted ? (
        <p className="rounded-full bg-sage-light px-5 py-2 text-sm font-medium text-sage-dark">
          You&apos;re on the list — thank you!
        </p>
      ) : (
        <form
          className="flex w-full max-w-sm flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-sage"
          />
          <button
            type="submit"
            className="rounded-full bg-sage-dark px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-sage"
          >
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
}
