'use client'
import { useHealthcheck } from 'lib/hooks/useHealthcheck'
import { FaReact } from 'react-icons/fa'

export type BannerProps = {
  title: string
}

const Banner = (props: BannerProps) => {
  const { title } = props

  useHealthcheck()

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-16">
      <FaReact className="h-48 w-48 animate-[spin_5s_linear_infinite] text-black dark:text-primary lg:h-56 lg:w-56 xl:h-64 xl:w-64" />
      <h1 className="w-10/12 text-center text-7xl font-bold text-black dark:text-primary md:text-8xl lg:w-10/12 lg:text-9xl xl:w-auto">
        {title}
      </h1>
    </section>
  )
}

export { Banner }
