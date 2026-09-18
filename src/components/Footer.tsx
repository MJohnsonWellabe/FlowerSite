import Link from "next/link";
import { categories } from "@/lib/products";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-sage-light/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="mb-12">
          <NewsletterSignup />
        </div>
        <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-10 text-sm sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage text-cream">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3c1.5 2 1.5 4 0 6-1.5-2-1.5-4 0-6Z" />
                  <path d="M12 13v8" />
                </svg>
              </span>
              <span className="font-display text-base font-semibold">Petal &amp; Press</span>
            </div>
            <p className="text-ink-soft">
              Tools for a more beautiful world — made with 3D printing.
            </p>
          </div>
          <div>
            <p className="mb-3 font-semibold text-ink">Shop</p>
            <ul className="space-y-2 text-ink-soft">
              {categories.slice(0, 4).map((c) => (
                <li key={c.slug}>
                  <Link href={`/shop/${c.slug}`} className="hover:text-sage-dark">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-ink">Studio</p>
            <ul className="space-y-2 text-ink-soft">
              <li>
                <Link href="/about" className="hover:text-sage-dark">Our Story</Link>
              </li>
              <li>
                <Link href="/custom-orders" className="hover:text-sage-dark">Custom Orders</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-sage-dark">Shop All</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-ink">Follow Along</p>
            <div className="flex gap-3">
              {["instagram", "pinterest", "tiktok"].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-ink-soft transition-colors hover:border-sage hover:text-sage-dark"
                >
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-black/10 pt-6 text-xs text-ink-soft sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Petal &amp; Press. All rights reserved.</p>
          <p>Made with 3D printing, one layer at a time.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "pinterest") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 17c1-3 1.5-5.5 1.5-7a2.5 2.5 0 1 1 5 0c0 1.8-1 4-2.5 4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 8a4 4 0 1 0 4 4V3c.5 2 2 3.3 4 3.6" />
    </svg>
  );
}
