import { Zap } from 'lucide-react'
import type { Metadata } from 'next'

import { getCanonicalUrl, siteMetadata } from './lib/seo'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  description: siteMetadata.description,
  openGraph: {
    description: siteMetadata.description,
    title: siteMetadata.name,
    url: getCanonicalUrl(),
  },
  title: {
    absolute: `Home | ${siteMetadata.shortName}`,
  },
  twitter: {
    card: 'summary',
    description: siteMetadata.description,
    title: siteMetadata.name,
  },
}

const HomePage = () => {
  return (
    <section className='flex h-screen flex-col items-center justify-center gap-y-16'>
      <Zap className='size-48 text-primary  lg:size-56 xl:size-72' />
    </section>
  )
}

export default HomePage
