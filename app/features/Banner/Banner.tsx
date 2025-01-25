'use client'
import { FaReact } from 'react-icons/fa'

import { useHealthcheck } from 'lib/hooks/useHealthcheck'

export type BannerProps = {
  title: string
}

export const Banner = (props: BannerProps) => {
  const { title } = props

  useHealthcheck()

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-16">
      <FaReact className="size-48 animate-[spin_5s_linear_infinite] text-primary dark:text-secondary lg:size-56 xl:size-64" />
      <h1 className="w-10/12 text-center text-7xl font-bold text-primary dark:text-secondary md:text-8xl lg:w-10/12 lg:text-9xl xl:w-auto">
        {title}
      </h1>
    </section>
  )
}
