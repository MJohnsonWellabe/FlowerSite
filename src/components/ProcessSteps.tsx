const steps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v4M3 12h4M17 12h4M12 17v4M6.3 6.3l2.8 2.8M17.7 6.3l-2.8 2.8M6.3 17.7l2.8-2.8M17.7 17.7l-2.8-2.8" />
      </svg>
    ),
    title: "1. Design",
    body: "We start with real problems florists bring us, then sketch and model each tool ourselves.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8v8H8z" />
      </svg>
    ),
    title: "2. Print",
    body: "Every piece is printed in-house in small batches using durable, food-safe-rated PLA and PETG.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.8 8.6c0 5-8.8 11-8.8 11s-8.8-6-8.8-11a4.4 4.4 0 0 1 8.8-1.7A4.4 4.4 0 0 1 20.8 8.6Z" />
      </svg>
    ),
    title: "3. Finish & Ship",
    body: "We hand-check, clean, and pack each order ourselves before it heads to your studio.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div className="mb-8 text-center">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">How It&apos;s Made</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-ink-soft">
          Small studio, real materials, no shortcuts.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-white p-6 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blush text-terracotta-dark">
              {step.icon}
            </span>
            <p className="font-display text-lg font-semibold">{step.title}</p>
            <p className="text-sm text-ink-soft">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
