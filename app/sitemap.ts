import type { MetadataRoute } from 'next'

import { env } from './lib/env'

const getSitemap = (): MetadataRoute.Sitemap => {
  const routes = ['/'].map((route) => ({
    url: `${env.publicUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}

export default getSitemap
