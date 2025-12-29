'use client'

import { RulerIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export const ViewportInfo = () => {
  const [{ width: viewportWidth, height: viewportHeight }, setViewportSize] =
    useState(() => ({ width: 0, height: 0 }))

  useEffect(() => {
    if (globalThis.window == undefined) {
      return
    }

    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (process.env.NODE_ENV === 'production') return null

  return (
    <aside className='fixed bottom-0 right-0 flex items-center gap-x-1 rounded-l-lg px-4 py-2 bg-primary text-primary-foreground font-semibold'>
      <RulerIcon className='size-5' />
      <p className='text-lg flex gap-x-2'>
        {viewportWidth}px - {viewportHeight}px -
        <span className='inline sm:hidden font-semibold'>default</span>
        <span className='hidden sm:inline md:hidden font-semibold'>sm</span>
        <span className='hidden md:inline lg:hidden font-semibold'>md</span>
        <span className='hidden lg:inline xl:hidden font-semibold'>lg </span>
        <span className='hidden xl:inline 2xl:hidden font-semibold'>xl</span>
        <span className='hidden 2xl:inline font-semibold'>2xl</span>
      </p>
    </aside>
  )
}
