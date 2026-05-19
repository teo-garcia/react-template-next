import type { Metadata } from 'next'

import { RouteNotFoundState } from './components/route-state/route-state'
import { siteMetadata } from './lib/seo'

export const metadata: Metadata = {
  description: `The requested page could not be found in ${siteMetadata.name}.`,
  robots: {
    follow: false,
    index: false,
  },
  title: {
    absolute: `Page not found | ${siteMetadata.shortName}`,
  },
}

const NotFoundPage = () => {
  return <RouteNotFoundState />
}

export default NotFoundPage
