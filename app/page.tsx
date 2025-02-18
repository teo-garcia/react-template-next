import type { Metadata } from 'next'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

export const metadata: Metadata = {
  title: 'Home | RTN',
}

export default () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-16">
      <SiNextdotjs className="size-48 dark:text-secondary lg:size-56 xl:size-72" />
    </section>
  )
}
