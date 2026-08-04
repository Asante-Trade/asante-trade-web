import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Asante Trade | Financial Inclusion Powered by Stellar',
  description:
    'Asante Trade provides field agents with tools to sell financial services to underbanked communities across Africa using Stellar blockchain.',
  keywords:
    'fintech, financial inclusion, Africa, Stellar, blockchain, mobile wallets, remittances, savings, bill payments',
  authors: [{ name: 'Asante Trade Team' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Asante Trade',
    description: 'Financial inclusion, powered by Stellar',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logos/logo-mark.svg',
        width: 128,
        height: 128,
        alt: 'Asante Trade Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asante Trade',
    description: 'Financial inclusion, powered by Stellar',
  },
  icons: {
    icon: '/logos/logo-mark.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#12141C',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-slate-950`}
    >
      <body className="font-sans antialiased bg-slate-950 text-slate-50">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
