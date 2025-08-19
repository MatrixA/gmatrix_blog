import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fernando Jacob - Full Stack Developer',
  description: 'Professional portfolio and blog of Fernando Jacob, a passionate full stack developer specializing in modern web technologies.',
  keywords: 'Fernando Jacob, Full Stack Developer, React, Next.js, TypeScript, Portfolio',
  authors: [{ name: 'Fernando Jacob' }],
  openGraph: {
    title: 'Fernando Jacob - Full Stack Developer',
    description: 'Professional portfolio and blog of Fernando Jacob',
    type: 'website',
    locale: 'en_US',
    url: 'https://fernandojacob.vercel.app',
    siteName: 'Fernando Jacob Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernando Jacob - Full Stack Developer',
    description: 'Professional portfolio and blog of Fernando Jacob',
    creator: '@fernandojacob',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}