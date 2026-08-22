import type { Metadata } from 'next';
import AppShell from '@/components/layout/AppShell';
import { Inter, JetBrainsMono } from '@/styles/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Warehouse Moderator',
    template: '%s | Warehouse Moderator',
  },
  description: 'Manage and view warehouse inventory, stock details, and product workflows efficiently.',
};

/**
 * Inline script: applies the saved theme before first paint so there is
 * never a flash of the wrong theme. Runs once, before hydration.
 */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${Inter.className} ${Inter.variable} ${JetBrainsMono.variable} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
