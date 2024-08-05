'use client'

import { NotFoundBanner } from 'features/NotFoundBanner/NotFoundBanner'

import type { Metadata } from 'next'

const metadata: Metadata = {
  title: '404| Next 13',
}

const NotFoundPage = () => {
  return (
    <>
      <NotFoundBanner />
    </>
  )
}

export { metadata }
export default NotFoundPage
