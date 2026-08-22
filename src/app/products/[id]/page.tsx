import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductDetails from '@/components/products/ProductDetails';
import { ChevronLeftIcon } from '@/components/ui/icons';
import { fetchProduct } from '@/lib/products';

interface ProductDetailsPageProps {
  params: { id: string };
}

/**
 * Per-product metadata (e.g. tab title). Shares the page's fetch via the
 * React cache() wrapper in fetchProduct.
 */
export async function generateMetadata({ params }: ProductDetailsPageProps): Promise<Metadata> {
  const product = await fetchProduct(params.id);
  return { title: product ? product.productName : 'Product not found' };
}

/**
 * Server component: loads the product by id, then hands it to the client
 * ProductDetails (readout + edit form that updates it).
 */
export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const product = await fetchProduct(params.id);
  if (!product) notFound();

  return (
    <section className="mx-auto w-full max-w-3xl p-6 sm:p-8 lg:p-10">
      <Link
        href="/products"
        className="text-foreground/50 inline-flex items-center gap-1.5 rounded font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
      >
        <ChevronLeftIcon size={14} />
        All products
      </Link>

      <ProductDetails product={product} />
    </section>
  );
}
