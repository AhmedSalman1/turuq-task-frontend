import Link from 'next/link';
import Barcode from '@/components/ui/Barcode';
import { ChevronRightIcon } from '@/components/ui/icons';
import { formatPrice } from '@/lib/format';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  /** Zero-based position in the grid — drives the staggered entrance. */
  index: number;
}

/**
 * One product on the shelves list. The whole card links to the product's
 * details page so the click target stays large for non-technical users.
 */
export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="card-enter hover:shadow-primary-900/10 group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 dark:hover:border-primary-700 dark:hover:shadow-black/40"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <header className="flex items-center justify-between gap-3">
        <span className="text-foreground/50 shrink-0 rounded border border-border bg-background px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.14em]">
          SKU-{String(product.id).padStart(3, '0')}
        </span>
        <span className="max-w-[45%] truncate rounded bg-primary-50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-primary-600 dark:bg-primary-500 dark:text-accent-50">
          {product.productVariant}
        </span>
      </header>

      <p className="mt-5 line-clamp-2 text-lg font-semibold tracking-tight text-foreground">{product.productName}</p>
      <p className="mt-1 font-mono text-2xl font-bold text-primary-600 dark:text-accent-400">
        {formatPrice(product.productPrice)}
      </p>

      <span className="text-foreground/40 mt-4 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors group-hover:text-accent-500">
        View details
        <ChevronRightIcon size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>

      <Barcode className="mt-5 opacity-30 transition-opacity duration-300 group-hover:opacity-60" />
    </Link>
  );
}
