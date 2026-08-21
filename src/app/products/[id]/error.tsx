'use client';

import ErrorState from '@/components/products/ErrorState';

interface ProductDetailsErrorProps {
  reset: () => void;
}

export default function ProductDetailsError({ reset }: ProductDetailsErrorProps) {
  return (
    <ErrorState
      title="Couldn't read this product's tag"
      message="The record failed to load. Check your connection and try again."
      onRetry={reset}
    />
  );
}
