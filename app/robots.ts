import type { MetadataRoute } from 'next'

import { getCanonicalUrl } from './lib/seo'

const getRobots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: getCanonicalUrl('/sitemap.xml'),
  }
}

export default getRobots
