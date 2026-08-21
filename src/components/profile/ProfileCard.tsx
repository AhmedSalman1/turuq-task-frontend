import type { ReactNode } from 'react';

/**
 * Deterministic bar widths (px) so the barcode strip never shifts
 * between server and client renders.
 */
const BARCODE_BARS = [3, 1, 2, 4, 1, 1, 3, 2, 1, 4, 2, 1, 1, 3, 4, 1, 2, 1, 3, 1, 1, 2, 4, 2, 1, 3];

interface ProfileCardProps {
  label: string;
  value: string;
  detail?: string;
  code: string;
  icon: ReactNode;
  /** Zero-based position in the grid — drives the staggered entrance. */
  index: number;
}

/**
 * A single personal record, styled as a warehouse rack tag:
 * mono bin code + barcode strip make the data feel like inventory
 * signage the moderator already reads daily.
 */
export default function ProfileCard({ label, value, detail, code, icon, index }: ProfileCardProps) {
  return (
    <article
      className="card-enter group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-900/10 dark:hover:border-primary-700 dark:hover:shadow-black/40"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <header className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary-500 dark:text-accent-300">
          <span className="text-primary-400 dark:text-accent-400">{icon}</span>
          {label}
        </p>
        <span className="shrink-0 rounded border border-border bg-background px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-foreground/50">
          {code}
        </span>
      </header>

      <p className="mt-5 break-words text-2xl font-semibold tracking-tight text-foreground">{value}</p>
      {detail && <p className="mt-1 text-sm text-foreground/60">{detail}</p>}

      {/* Barcode strip — the card's warehouse-tag signature */}
      <div className="mt-6 flex h-8 w-full items-end justify-between opacity-40 transition-opacity duration-300 group-hover:opacity-80" aria-hidden="true">
        {BARCODE_BARS.map((width, i) => (
          <span key={i} className="h-full shrink-0 rounded-[1px] bg-foreground/30" style={{ width }} />
        ))}
      </div>
    </article>
  );
}
