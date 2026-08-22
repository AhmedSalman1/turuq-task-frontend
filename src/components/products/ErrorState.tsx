'use client';

interface ErrorStateProps {
  title: string;
  message: string;
  onRetry: () => void;
}

/**
 * Shared failure state used by the error.tsx boundaries. Explains what went
 * wrong and gives the moderator one clear way to recover: try again.
 */
export default function ErrorState({ title, message, onRetry }: ErrorStateProps) {
  return (
    <section className="mx-auto w-full max-w-6xl p-6 sm:p-8 lg:p-10">
      <div className="rounded-xl border border-border bg-surface p-10 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary-500 dark:text-accent-400">
          Hang on
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight">{title}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-foreground/60">{message}</p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 rounded-lg bg-primary-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:bg-accent-500 dark:text-primary-950 dark:hover:bg-accent-400"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
