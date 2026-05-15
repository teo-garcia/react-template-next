import type { MetadataRoute } from 'next'

import { getCanonicalUrl } from './lib/seo'

const getSitemap = (): MetadataRoute.Sitemap => {
  const routes = ['/'].map((route) => ({
    url: getCanonicalUrl(route),
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}

export default getSitemap
