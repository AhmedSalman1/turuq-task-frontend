import Link from 'next/link';

/**
 * Global 404 — shown for unknown routes and for product ids that don't
 * exist in the warehouse API.
 */
export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-3xl p-6 sm:p-8 lg:p-10">
      <div className="rounded-xl border border-border bg-surface p-10 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary-500 dark:text-accent-400">404</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight">That item isn&apos;t in the warehouse</h1>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-foreground/60">
          The page you asked for doesn&apos;t exist or was moved off the shelf.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-lg bg-primary-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:bg-accent-500 dark:text-primary-950 dark:hover:bg-accent-400"
        >
          Back to products
        </Link>
      </div>
    </section>
  );
}
