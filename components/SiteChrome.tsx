'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

/**
 * Hides the portfolio navbar/footer on the Keystatic admin routes, which render
 * inside the root layout but shouldn't inherit the site chrome.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname?.startsWith('/keystatic')) return null
  return <>{children}</>
}
