import { NextResponse } from "next/server";

// Stripe Checkout integration point — currently NOT wired into the app.
//
// This site is deployed as a static export (`output: "export"` in next.config.ts) to
// GitHub Pages, which only serves static files and can't run API routes. To bring this
// back: move this file to src/app/api/checkout/route.ts, remove `output: "export"` (and
// the basePath/assetPrefix) from next.config.ts, and deploy to a host that runs server
// code (Vercel, Netlify, Cloudflare Pages, etc.).
//
// Once you have a Stripe secret key:
//   1. `npm install stripe`
//   2. Set STRIPE_SECRET_KEY in your environment (.env.local, never committed).
//   3. Read the cart lines from the request body and build Checkout line_items
//      (or look products back up server-side by slug — don't trust client-sent prices).
//   4. Create a Checkout Session with stripe.checkout.sessions.create({ line_items, mode: "payment", success_url, cancel_url }).
//   5. Return { url: session.url } and have the checkout page redirect the browser there.
//
// This stub exists so the checkout page has a real endpoint to call once that's wired up.
export async function POST() {
  return NextResponse.json(
    { error: "Stripe checkout is not configured yet." },
    { status: 501 }
  );
}
