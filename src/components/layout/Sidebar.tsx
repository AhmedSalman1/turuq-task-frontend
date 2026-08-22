'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentType } from 'react';
import { BoxIcon, GearIcon, GridIcon, HomeIcon, type IconProps } from '@/components/ui/icons';

interface NavItem {
  href: string;
  label: string;
  icon: ComponentType<IconProps>;
  /** Placeholder pages for future routes (Dashboard, Settings, ...). */
  soon?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Overview', icon: HomeIcon },
  { href: '/products', label: 'Products', icon: BoxIcon },
  { href: '#', label: 'Dashboard', icon: GridIcon, soon: true },
  { href: '#', label: 'Settings', icon: GearIcon, soon: true },
];

interface SidebarProps {
  /** Called after any navigation — lets the mobile drawer close itself. */
  onNavigate?: () => void;
}

/**
 * Persistent side navigation. Rendered inside a fixed desktop column and,
 * on small screens, inside the mobile drawer managed by AppShell.
 */
export default function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col bg-primary-950 text-slate-300">
      {/* Brand block */}
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent-400 to-primary-600 text-white">
          <BoxIcon size={18} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold tracking-wide text-white">TURUQ</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">Warehouse mod</p>
        </div>
      </div>

      {/* Navigation */}
      <nav aria-label="Main navigation" className="flex-1 space-y-1 px-3 py-6">
        <p className="px-3 pb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">Menu</p>
        {NAV_ITEMS.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

          if (item.soon) {
            return (
              <span
                key={item.label}
                aria-disabled="true"
                title="Coming soon"
                className="flex cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600"
              >
                <item.icon size={18} />
                {item.label}
                <span className="ml-auto rounded border border-white/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-slate-500">
                  Soon
                </span>
              </span>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? 'page' : undefined}
              className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
                isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {isActive && <span className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-accent-500" aria-hidden="true" />}
              <item.icon size={18} className={isActive ? 'text-accent-400' : undefined} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer — who is signed in */}
      <div className="border-t border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-800 font-mono text-xs font-bold text-accent-300">
            WM
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">Warehouse Moderator</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Moderator access</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
