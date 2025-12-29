import type { MetadataRoute } from 'next'

import { env } from './lib/env'

const getRobots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${env.publicUrl}/sitemap.xml`,
  }
}

export default getRobots
