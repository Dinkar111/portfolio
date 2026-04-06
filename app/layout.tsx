import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dinkar Maharjan | Software Engineer",
    template: "%s | Dinkar Maharjan"
  },
  description: "Portfolio of Dinkar Maharjan – Software Engineer focused on building scalable SaaS platforms, multi-tenant systems, and optimizing large-scale time-series data.",
  keywords: ["Software Engineer", "Full Stack Developer", "Next.js", "Laravel", "PostgreSQL", "React", "TypeScript"],
  authors: [{ name: "Dinkar Maharjan" }],
  creator: "Dinkar Maharjan",
  publisher: "Dinkar Maharjan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dinkarmaharjan.dev',
    title: 'Dinkar Maharjan | Software Engineer',
    description: 'Portfolio of Dinkar Maharjan – Software Engineer focused on building scalable SaaS platforms, multi-tenant systems, and optimizing large-scale time-series data.',
    siteName: 'Dinkar Maharjan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dinkar Maharjan - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinkar Maharjan | Software Engineer',
    description: 'Portfolio of Dinkar Maharjan – Software Engineer focused on building scalable SaaS platforms, multi-tenant systems, and optimizing large-scale time-series data.',
    images: ['/og-image.jpg'],
    creator: '@dinkarmaharjan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <ErrorBoundary>
            <div className="flex-1">
              {children}
            </div>
            <footer className="border-t border-gray-200 dark:border-gray-700 py-8 mt-16 bg-white dark:bg-gray-900">
              <div className="max-w-4xl mx-auto px-4 flex justify-end items-center">
                <p className="text-gray-600 dark:text-gray-400">&copy; 2026 Dinkar Maharjan. All rights reserved.</p>
              </div>
            </footer>
        </ErrorBoundary>
      </body>
    </html>
  );
}
