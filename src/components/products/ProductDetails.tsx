'use client';

import { useState } from 'react';
import { formatPrice } from '@/lib/format';
import type { Product } from '@/types/product';
import ProductEditForm from './ProductEditForm';

interface ProductDetailsProps {
  product: Product;
}

/**
 * Readout + edit form for one product. Keeps the displayed record in local
 * state so a form submit is reflected at the top of the page immediately.
 * (The assessment only requires local reflection — no API write happens.)
 */
export default function ProductDetails({ product }: ProductDetailsProps) {
  const [details, setDetails] = useState<Product>(product);
  const [updated, setUpdated] = useState(false);

  const handleSubmit = (next: Product) => {
    setDetails(next);
    setUpdated(true);
  };

  return (
    <div className="mt-6 space-y-6">
      {/* Readout panel */}
      <article className="overflow-hidden rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-primary-500 dark:text-accent-400">
          Product details
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-foreground/50 rounded border border-border bg-background px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.14em]">
            ID {details.id}
          </span>
          <span className="rounded bg-primary-50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-primary-600 dark:bg-primary-500 dark:text-accent-50">
            {details.productVariant}
          </span>
        </div>

        <h1 className="mt-4 break-words text-2xl font-bold tracking-tight sm:text-3xl">{details.productName}</h1>
        <p className="mt-2 font-mono text-3xl font-bold text-primary-600 dark:text-accent-400">
          {formatPrice(details.productPrice)}
        </p>

        {/* Confirmation after a submit — announced to screen readers */}
        <p
          aria-live="polite"
          className={`mt-3 text-sm font-medium text-emerald-600 transition-opacity duration-300 dark:text-emerald-400 ${
            updated ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Details updated — shown above.
        </p>
      </article>

      {/* Edit form */}
      <ProductEditForm product={details} onSubmit={handleSubmit} />
    </div>
  );
}
