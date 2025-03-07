import { MetadataRoute } from 'next'

const getRobots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
  }
}

export default getRobots
