/**
 * Skeleton shown while a single product loads. Mirrors the readout panel
 * and the form so the finished page doesn't jump when data arrives.
 */
export default function ProductDetailsLoading() {
  return (
    <section className="mx-auto w-full max-w-3xl p-6 sm:p-8 lg:p-10">
      <div className="animate-pulse">
        <div className="h-4 w-24 rounded bg-border" />

        <div className="mt-6 rounded-xl border border-border bg-surface p-8">
          <div className="h-3 w-28 rounded bg-border" />
          <div className="mt-4 h-8 w-52 max-w-full rounded bg-border" />
          <div className="mt-4 h-9 w-32 rounded bg-border" />
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface p-8">
          <div className="h-6 w-40 rounded bg-border" />
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="h-16 rounded-lg bg-border" />
            <div className="h-16 rounded-lg bg-border" />
            <div className="h-16 rounded-lg bg-border" />
            <div className="h-16 rounded-lg bg-border" />
          </div>
          <div className="mt-6 h-10 w-36 rounded-lg bg-border" />
        </div>
      </div>
    </section>
  );
}
