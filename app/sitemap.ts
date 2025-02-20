import { MetadataRoute } from 'next'

export default (): MetadataRoute.Sitemap => {
  const routes = ['/'].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}

