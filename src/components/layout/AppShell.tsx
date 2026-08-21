'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Sidebar from './Sidebar';

/** Maps a route to the human-readable name shown in the header. */
function titleForPath(pathname: string): string {
  if (pathname === '/') return 'Overview';
  if (pathname === '/products') return 'Products';
  if (pathname.startsWith('/products/')) return 'Product details';
  return 'Overview';
}

interface AppShellProps {
  children: React.ReactNode;
}

/**
 * Persistent app frame: fixed sidebar (desktop) / drawer (mobile),
 * sticky header, and the routed page content.
 */
export default function AppShell({ children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Allow closing the drawer with Escape.
  useEffect(() => {
    if (!sidebarOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSidebarOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-screen w-full">
      {/* Desktop sidebar — fixed column from lg upwards */}
      <div className="hidden lg:block">
        <div className="fixed inset-y-0 left-0 z-50">
          <Sidebar />
        </div>
      </div>

      {/* Mobile drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setSidebarOpen(false)}
            className="absolute inset-0 cursor-default bg-primary-950/60 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 left-0 w-64 shadow-2xl">
            <Sidebar onNavigate={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Content column */}
      <div className="flex min-h-screen w-full flex-col lg:pl-64">
        <Header title={titleForPath(pathname)} onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
