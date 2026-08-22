/**
 * Skeleton shown while the product list is fetched. Mirrors the card layout
 * so the finished page doesn't jump when data arrives.
 */
export default function ProductsLoading() {
  return (
    <section className="mx-auto w-full max-w-6xl p-6 sm:p-8 lg:p-10">
      <header className="mb-8 animate-pulse">
        <div className="h-3 w-24 rounded bg-border" />
        <div className="mt-3 h-8 w-48 rounded bg-border" />
        <div className="mt-3 h-4 w-72 max-w-full rounded bg-border" />
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="animate-pulse rounded-xl border border-border bg-surface p-6">
            <div className="flex items-center justify-between">
              <div className="h-5 w-16 rounded bg-border" />
              <div className="h-5 w-24 rounded bg-border" />
            </div>
            <div className="mt-5 h-5 w-3/4 rounded bg-border" />
            <div className="mt-3 h-8 w-28 rounded bg-border" />
            <div className="mt-6 h-8 w-full rounded bg-border" />
          </div>
        ))}
      </div>
    </section>
  );
}
