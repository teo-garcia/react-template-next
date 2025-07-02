'use client'

import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

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
        return <Sun className='size-5 text-foreground' />
      }
      case 'dark': {
        return <Moon className='size-5 text-background' />
      }
      default: {
        return (
          <Laptop
            className={`size-5 ${resolvedTheme === 'dark' ? 'text-background' : 'text-foreground'}`}
          />
        )
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
      className='fixed right-4 top-4 rounded-lg border border-foreground dark:border-background p-2 md:right-8 md:top-8 transition-colors duration-200'
      title={`Current theme: ${theme}. Click to switch to ${getNextTheme()}`}
    >
      {getCurrentIcon()}
    </button>
  )
}
