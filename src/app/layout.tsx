import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lemonenvirotec.com'),
  title: {
    default: 'Lemon Environmental Technology — Water Purifier ODM & OEM Manufacturer',
    template: '%s | Lemon Environmental Technology',
  },
  description:
    'Leading water purifier ODM/OEM manufacturer. RO systems, UF purifiers, UV sterilizers, replacement filters, and custom water treatment solutions. ISO 9001 & NSF certified. Serving 40+ countries.',
  keywords: [
    'water purifier OEM',
    'water purifier ODM',
    'RO system manufacturer',
    'reverse osmosis',
    'ultrafiltration',
    'water filter factory',
    'water treatment',
    'china water purifier manufacturer',
    'private label water purifier',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Lemon Environmental Technology',
    title: 'Lemon Environmental Technology — Water Purifier ODM & OEM Manufacturer',
    description:
      'Custom water purifier manufacturing for global brands. RO, UF, UV systems. ISO 9001 & NSF certified.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-body min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
