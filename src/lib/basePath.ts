// Mirrors the basePath logic in next.config.ts. next/link and next/router apply
// basePath to route URLs automatically, but next/image does NOT prepend it to local
// image src strings when images.unoptimized is true (required for static export) — so
// any local asset path we hand to next/image needs this applied by hand.
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/FlowerSite" : "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
