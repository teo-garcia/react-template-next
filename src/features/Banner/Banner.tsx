'use client'
import { useHealthcheck } from 'lib/hooks/useHealthcheck'
import { useLogEffect } from 'lib/hooks/useLogEffect'
import { FaReact } from 'react-icons/fa'

export type BannerProps = {
  title: string
}

const Banner = (props: BannerProps) => {
  const { title } = props

  useHealthcheck()
  useLogEffect('info', 'Home page loaded')

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-16">
      <FaReact className="size-48 animate-[spin_5s_linear_infinite] text-black dark:text-primary lg:size-56 xl:size-64" />
      <h1 className="w-10/12 text-center text-7xl font-bold text-black dark:text-primary md:text-8xl lg:w-10/12 lg:text-9xl xl:w-auto">
        {title}
      </h1>
    </section>
  )
}

export { Banner }
