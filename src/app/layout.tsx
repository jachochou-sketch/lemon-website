import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lemonenviro.com'),
  title: {
    default: 'Lemon Environmental Technology — Water Purifier ODM & OEM Manufacturer',
    template: '%s | Lemon Environmental Technology',
  },
  description:
    'Water purifier ODM/OEM manufacturer in Zhongshan, China. RO systems, UF purifiers, replacement filters, and custom product development for international partners.',
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
  icons: {
    icon: '/images/brand/lemon-logo-concept-v2-transparent.png',
    apple: '/images/brand/lemon-logo-concept-v2-transparent.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Lemon Environmental Technology',
    title: 'Lemon Environmental Technology — Water Purifier ODM & OEM Manufacturer',
    description:
      'RO and UF water purification systems, replacement filters, and custom manufacturing programs from Zhongshan, China.',
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
