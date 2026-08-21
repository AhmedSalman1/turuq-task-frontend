import type { InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

/**
 * Reusable labelled input with consistent warehouse-tag styling.
 * Renders inside client components only (inherits the client boundary).
 */
export default function FormField({ label, id, ...props }: FormFieldProps) {
  const inputId = id ?? props.name ?? 'field';

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={inputId}
        className="block font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/60"
      >
        {label}
      </label>
      <input
        id={inputId}
        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground transition-colors placeholder:text-foreground/30 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
        {...props}
      />
    </div>
  );
}
