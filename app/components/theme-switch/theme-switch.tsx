'use client'

import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const getNextTheme = (): ThemeMode => {
    switch (theme) {
      case 'light': {
        return 'dark'
      }
      case 'dark': {
        return 'system'
      }
      default: {
        return 'light'
      }
    }
  }

  const getCurrentIcon = () => {
    switch (theme) {
      case 'light': {
        return <Sun className='size-5' />
      }
      case 'dark': {
        return <Moon className='size-5' />
      }
      default: {
        return <Laptop className='size-5' />
      }
    }
  }

  const handleClick = () => {
    setTheme(getNextTheme())
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return
  }

  return (
    <button
      onClick={handleClick}
      aria-label={`Theme switcher, current mode: ${theme}`}
      className='fixed right-4 top-4 rounded-lg border p-2 md:right-8 md:top-8 transition-colors duration-200 hover:bg-accent hover:text-accent-foreground'
      title={`Current theme: ${theme}. Click to switch to ${getNextTheme()}`}
    >
      {getCurrentIcon()}
    </button>
  )
}
