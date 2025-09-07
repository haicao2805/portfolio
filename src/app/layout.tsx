import type { Metadata, Viewport } from 'next';

import { Layout } from '@/components/layout/Layout';
import { Roboto } from 'next/font/google';
import { Providers } from './providers';

import '@/styles/globals.css';
import { AppConst, AppRoutes, Socials } from '@/common';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(AppConst.WEBSITE),
  title: {
    template: '%s | Hai Cao - Portfolio',
    default: 'Hai Cao - Portfolio',
  },
  description: `Explore the portfolio of Hai Cao, Software Engineer | Node.js/React.js Specialist | FinTech Enthusiast | Lifelong Learner & Problem Solver. View projects, skills, and contact information.`,
  keywords: [
    'Hai',
    'Hai Cao',
    'Chi Hai',
    'Cao Chi Hai',
    'haicao',
    'haicao2805',
    'Portfolio',
    'Software Engineer',
    'ReactJS',
    'TypeScript',
    'Projects',
    'Contact',
    'Resume',
  ].join(', '),
  authors: [
    {
      name: 'Hai Cao',
      url: AppRoutes.websitePath.main,
    },
  ],
  creator: 'Hai Cao',
  publisher: 'Hai Cao',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'vi_VN',
    title: 'Hai Cao - Portfolio',
    description: `Explore the portfolio of Hai Cao, Software Engineer | Node.js/React.js Specialist | FinTech Enthusiast | Lifelong Learner & Problem Solver. View projects, skills, and contact information.`,
    url: AppRoutes.websitePath.main,
    siteName: 'Hai Cao Portfolio',
    images: [
      {
        url: '/logo-website.png',
        width: 400,
        height: 400,
        alt: 'Hai Cao Portfolio Preview',
      },
    ],
    countryName: 'Vietnam',
    emails: [Socials.urls[Socials.EMAIL]],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={roboto.variable} suppressHydrationWarning>
      <body className={`relative flex min-h-screen flex-col antialiased`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
