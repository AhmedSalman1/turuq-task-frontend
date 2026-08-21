import type { Metadata } from 'next';
import { Inter } from '@/styles/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Warehouse Moderator',
    template: '%s | Warehouse Moderator',
  },
  description: 'Manage and view warehouse inventory, stock details, and product workflows efficiently.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Inter.className} ${Inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
