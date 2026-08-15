import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SiteChrome from '@/components/SiteChrome'

const SITE_URL = 'https://farza-shahzad.vercel.app'
const TITLE = 'Farza Shahzad — Full Stack Developer'
const DESCRIPTION =
  'Portfolio of Farza Shahzad, a full stack developer building Flutter apps and full-stack web products with React, Next.js, Node.js, Python, and IoT integrations.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Farza Shahzad',
  },
  description: DESCRIPTION,
  keywords: [
    'Farza Shahzad',
    'Full Stack Developer',
    'Flutter Developer',
    'Next.js',
    'React',
    'TypeScript',
    'IoT Developer',
    'Peshawar',
    'Pakistan',
  ],
  authors: [{ name: 'Farza Shahzad', url: SITE_URL }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Farza Shahzad',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: '#e9e5db',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Farza Shahzad',
  url: SITE_URL,
  jobTitle: 'Full Stack Developer',
  sameAs: ['https://www.linkedin.com/in/farza-shahzad/', 'https://github.com/farzask'],
  knowsAbout: [
    'Flutter',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'IoT',
    'ESP32',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteChrome>
          <Navbar />
        </SiteChrome>
        <main>{children}</main>
        <SiteChrome>
          <Footer />
        </SiteChrome>
        <Analytics />
      </body>
    </html>
  )
}
