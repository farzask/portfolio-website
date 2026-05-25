import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Farza Shahzad — Flutter Developer & Hardware Integrator',
  description:
    'Portfolio of Farza Shahzad — App developer skilled in Flutter, Firebase, Bluetooth communication, and IoT solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Farza Shahzad — Flutter Developer & Hardware Integrator',
    description:
      'Portfolio of Farza Shahzad — App developer skilled in Flutter, Firebase, Bluetooth communication, and IoT solutions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-paper text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
