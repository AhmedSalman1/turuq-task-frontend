import { Inter as InterFont, JetBrains_Mono as JetBrainsMonoFont } from 'next/font/google';

/**
 * Inter — body and UI text.
 * JetBrains Mono — labels, codes and chips; evokes warehouse rack/SKU tags.
 */
export const Inter = InterFont({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const JetBrainsMono = JetBrainsMonoFont({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});
