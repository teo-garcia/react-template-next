'use client'

import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

type ThemeMode = 'light' | 'dark'

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<ThemeMode>('light')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme') as ThemeMode | null
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setTheme('dark')
      }
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-prefers-color-scheme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const nextTheme: ThemeMode = theme === 'light' ? 'dark' : 'light'

  const CurrentIcon =
    theme === 'light' ? (
      <FaMoon className="size-5 text-foreground" />
    ) : (
      <FaSun className="size-5 text-background" />
    )

  const handleClick = () => {
    setTheme(nextTheme)
  }

  return (
    <button
      onClick={handleClick}
      aria-label={`Theme switcher, current mode: ${theme}`}
      className="fixed right-4 top-4 rounded-lg border border-foreground dark:border-background p-2 md:right-8 md:top-8"
    >
      {CurrentIcon}
    </button>
  )
}
