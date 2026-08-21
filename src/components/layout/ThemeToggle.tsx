'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@/components/ui/icons';

/** localStorage key used to persist the theme preference. */
const THEME_KEY = 'theme';

/**
 * Dark/light mode toggle. The actual `.dark` class lives on <html> and is
 * applied by an inline script in the root layout before first paint, so this
 * component only reads/syncs the current state and flips it on click.
 */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
    } catch {
      /* Storage unavailable (e.g. private mode) — theme just won't persist. */
    }
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-foreground/70 transition-all duration-200 hover:rotate-12 hover:border-accent-500 hover:text-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </button>
  );
}
