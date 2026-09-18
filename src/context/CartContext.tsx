"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/products";

export type CartLine = {
  slug: string;
  name: string;
  price: number;
  image: string;
  color: string;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  addItem: (product: Product, color: string, quantity?: number) => void;
  removeItem: (slug: string, color: string) => void;
  updateQuantity: (slug: string, color: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "petal-and-press-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // One-time hydration from localStorage after mount (can't read it during SSR).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional one-time hydration, not a render loop
      if (stored) setLines(JSON.parse(stored));
    } catch {
      // ignore malformed/blocked storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // ignore blocked storage (private browsing, etc.)
    }
  }, [lines, hydrated]);

  const addItem = useCallback(
    (product: Product, color: string, quantity = 1) => {
      setLines((prev) => {
        const existing = prev.find(
          (l) => l.slug === product.slug && l.color === color
        );
        if (existing) {
          return prev.map((l) =>
            l.slug === product.slug && l.color === color
              ? { ...l, quantity: l.quantity + quantity }
              : l
          );
        }
        return [
          ...prev,
          {
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.images[0]?.src ?? "",
            color,
            quantity,
          },
        ];
      });
    },
    []
  );

  const removeItem = useCallback((slug: string, color: string) => {
    setLines((prev) =>
      prev.filter((l) => !(l.slug === slug && l.color === color))
    );
  }, []);

  const updateQuantity = useCallback(
    (slug: string, color: string, quantity: number) => {
      setLines((prev) =>
        quantity <= 0
          ? prev.filter((l) => !(l.slug === slug && l.color === color))
          : prev.map((l) =>
              l.slug === slug && l.color === color ? { ...l, quantity } : l
            )
      );
    },
    []
  );

  const clearCart = useCallback(() => setLines([]), []);

  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );
  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity * l.price, 0),
    [lines]
  );

  const value = useMemo(
    () => ({
      lines,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal,
    }),
    [lines, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
