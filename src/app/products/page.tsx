import type { Metadata } from 'next';
import ProductCard from '@/components/products/ProductCard';
import { fetchProducts } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Products',
};

/**
 * Warehouse shelves — server component that fetches the full product list
 * at request time. Slow responses render the loading.tsx skeleton; failures
 * render the error.tsx boundary.
 */
export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <section className="mx-auto w-full max-w-6xl p-6 sm:p-8 lg:p-10">
      <header className="mb-8">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-primary-500 dark:text-accent-400">
          Inventory
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Products</h1>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/60">
          {products.length} {products.length === 1 ? 'item' : 'items'} on the shelves right now.
        </p>
      </header>

      {products.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-surface p-12 text-center">
          <h2 className="text-lg font-semibold tracking-tight">No stock on the shelves yet</h2>
          <p className="mt-1 text-sm text-foreground/60">Check back after the next intake.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
