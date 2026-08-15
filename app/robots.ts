import type { MetadataRoute } from 'next'

const SITE_URL = 'https://farza-shahzad.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/keystatic', '/api/keystatic'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
