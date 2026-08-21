import { cache } from 'react';
import type { Product } from '@/types/product';

/**
 * Server-side data access for warehouse products.
 *
 * These functions must only be used inside Server Components — fetching here
 * keeps API calls off the client and lets Next.js cache + deduplicate them.
 * (A separate `server-only` package is not installed, so keep these imports
 * out of client components.)
 */

const PRODUCTS_API_URL =
  process.env.PRODUCTS_API_URL ?? 'https://6776992512a55a9a7d0c4868.mockapi.io/products';

/** Revalidate every minute so the shelves list stays reasonably fresh. */
const REVALIDATE_SECONDS = 60;

/**
 * Fetches every product in the warehouse.
 * Throws on network/server failure so the nearest error.tsx boundary renders.
 */
export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_API_URL, { next: { revalidate: REVALIDATE_SECONDS } });

  if (!response.ok) {
    throw new Error(`Failed to load products (${response.status})`);
  }

  return response.json();
}

/**
 * Fetches a single product by id.
 * The mock API has no GET /products/:id endpoint (it returns 404), so we
 * read the cached collection and pick the matching record. Returns `null`
 * when no product matches so the caller can show notFound(). Wrapped in
 * React `cache()` so the page and its generateMetadata share one request
 * per render; the inner fetch is additionally deduplicated by Next.js.
 */
export const fetchProduct = cache(async (id: string): Promise<Product | null> => {
  const products = await fetchProducts();
  return products.find((product) => String(product.id) === id) ?? null;
});
