'use client';

import { MenuIcon } from '@/components/ui/icons';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  title: string;
  /** Opens the mobile navigation drawer. */
  onMenuClick: () => void;
}

/**
 * Sticky top bar: route context on the left, presence chip and theme
 * toggle on the right. Always visible across the app.
 */
export default function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between gap-4 border-b border-border bg-surface/80 px-4 backdrop-blur sm:px-6 lg:px-10">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border text-foreground/70 transition-colors hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 lg:hidden"
        >
          <MenuIcon size={18} />
        </button>
        <p className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40 sm:block">Turuq /</p>
        <h1 className="truncate text-base font-semibold tracking-tight">{title}</h1>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        {/* Live presence chip */}
        <span className="hidden items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/60 sm:flex">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
          </span>
          On duty
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
