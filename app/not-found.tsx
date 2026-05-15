import { Info } from 'lucide-react'
import type { Metadata } from 'next'

import { siteMetadata } from './lib/seo'

export const metadata: Metadata = {
  description: `The requested page could not be found in ${siteMetadata.name}.`,
  robots: {
    follow: false,
    index: false,
  },
  title: 'Not Found',
}

const NotFoundPage = () => {
  return (
    <section className='flex h-screen flex-col items-center justify-center gap-y-12'>
      <Info className='size-32 text-muted-foreground lg:size-36' />
      <h1 className='text-5xl font-semibold lg:text-7xl'>Page not found</h1>
    </section>
  )
}

export default NotFoundPage
