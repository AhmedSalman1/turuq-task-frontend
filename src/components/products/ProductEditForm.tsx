'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import FormField from '@/components/ui/FormField';
import type { Product } from '@/types/product';

interface ProductEditFormProps {
  product: Product;
  /** Called with the submitted values; the parent updates the readout above. */
  onSubmit: (next: Product) => void;
}

interface FormValues {
  id: string;
  name: string;
  variant: string;
  price: string;
}

/**
 * Edit form for every field of a product (ID, name, variant, price).
 * Controlled inputs initialized from the current record; submission is
 * validated locally and handed up via onSubmit.
 */
export default function ProductEditForm({ product, onSubmit }: ProductEditFormProps) {
  const [values, setValues] = useState<FormValues>({
    id: String(product.id),
    name: product.productName,
    variant: product.productVariant,
    price: String(product.productPrice),
  });

  const handleChange =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement>): void => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const price = Number.parseFloat(values.price);
    if (Number.isNaN(price) || price < 0) return;

    onSubmit({
      id: Number.parseInt(values.id, 10) || product.id,
      productName: values.name,
      productVariant: values.variant,
      productPrice: price,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Update product details"
      className="rounded-xl border border-border bg-surface p-6 sm:p-8"
    >
      <h2 className="text-lg font-bold tracking-tight">Update details</h2>
      <p className="mt-1 text-sm text-foreground/60">
        Edit a field and submit — the record above updates right away.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField
          label="ID"
          name="id"
          type="number"
          min={1}
          required
          value={values.id}
          onChange={handleChange('id')}
        />
        <FormField
          label="Name"
          name="name"
          type="text"
          required
          value={values.name}
          onChange={handleChange('name')}
        />
        <FormField
          label="Variant"
          name="variant"
          type="text"
          required
          value={values.variant}
          onChange={handleChange('variant')}
        />
        <FormField
          label="Price"
          name="price"
          type="number"
          step="0.01"
          min={0}
          required
          value={values.price}
          onChange={handleChange('price')}
        />
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg bg-primary-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:bg-accent-500 dark:text-primary-950 dark:hover:bg-accent-400"
      >
        Update details
      </button>
    </form>
  );
}
