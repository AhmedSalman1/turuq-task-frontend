'use client';

import ErrorState from '@/components/products/ErrorState';

interface ProductsErrorProps {
  reset: () => void;
}

export default function ProductsError({ reset }: ProductsErrorProps) {
  return (
    <ErrorState
      title="This rack came up empty"
      message="We couldn't load the product list. Check your connection and try again."
      onRetry={reset}
    />
  );
}
