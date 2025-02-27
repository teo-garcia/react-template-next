// 'use client'

import { FaInfoCircle } from 'react-icons/fa'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not Found - RTN',
}

export default () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-12">
      <FaInfoCircle className="size-32 text-foreground dark:text-background lg:size-36" />
      <h1 className="text-5xl font-semibold lg:text-7xl text-foreground dark:text-background">
        Page not found
      </h1>
    </section>
  )
}
