'use client'

import { NotFoundBanner } from './features/not-found-banner/not-found-banner'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404| Next 13',
}

const NotFoundPage = () => {
  return (
    <>
      <NotFoundBanner />
    </>
  )
}

export default NotFoundPage
