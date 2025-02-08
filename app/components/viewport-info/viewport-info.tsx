'use client'

import { useEffect, useState } from 'react'
import { TfiRulerAlt2 } from 'react-icons/tfi'

import { isDevelopment } from '@/lib/misc/config'

export const ViewportInfo = () => {
  const [viewportWidth, setViewportWidth] = useState<number | null>(null)
  const [viewportHeight, setViewportHeight] = useState<number | null>(null)

  const handleResize = () => {
    setViewportWidth(window.innerWidth)
    setViewportHeight(window.innerHeight)
  }

  useEffect(() => {
    setViewportWidth(window.innerWidth)
    setViewportHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!isDevelopment()) return null

  return (
    <aside className="fixed bottom-0 right-0 flex items-center gap-x-1 rounded-l-lg bg-black/90 px-4 py-2 text-white dark:border-blue-500 dark:bg-white dark:text-black">
      <TfiRulerAlt2 className="text-lg" />
      <p className="text-lg">
        {viewportWidth} x {viewportHeight}
      </p>
    </aside>
  )
}
