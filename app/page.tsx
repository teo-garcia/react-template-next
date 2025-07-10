import { Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | RTN',
}

const HomePage = () => {
  return (
    <section className='flex h-screen flex-col items-center justify-center gap-y-16'>
      <Zap className='size-48 text-primary  lg:size-56 xl:size-72' />
    </section>
  )
}

export default HomePage
