'use client'

import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

import { Button } from '../ui/button'

type ThemeMode = 'light' | 'dark'

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<ThemeMode>('light')
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    const savedTheme =
      (window.localStorage.getItem('theme') as ThemeMode) || 'light'
    setTheme(savedTheme)
  }, [])

  useEffect(() => {
    document.body.classList.remove(nextTheme)
    document.body.classList.add(theme)
    window.localStorage.setItem('theme', theme)
  }, [theme, nextTheme])

  const handleClick = () => {
    setTheme(nextTheme)
  }

  return (
    <Button
      className="fixed right-4 top-4 rounded-lg border border-black p-2 dark:border-white md:right-8 md:top-8 size-10"
      onClick={handleClick}
      aria-label={`Theme switcher, current mode: ${theme}`}
      size="icon"
    >
      {theme === 'light' ? (
        <FaMoon className="text-black" />
      ) : (
        <FaSun className="text-white" />
      )}
    </Button>
  )
}
