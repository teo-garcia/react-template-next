import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  const routes = ['/'].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}

export default sitemap
