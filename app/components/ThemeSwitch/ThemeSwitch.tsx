'use client'

import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

import type { ThemeMode } from 'lib/misc/types'
import { isServer } from 'lib/misc/config'

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<ThemeMode>(
    isServer()
      ? (window.localStorage.getItem('theme') as ThemeMode) || 'light'
      : 'light'
  )
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.classList.remove(nextTheme)
    document.body.classList.add(theme)
    window.localStorage.setItem('theme', theme)
  }, [theme, nextTheme])

  const handleClick = () => {
    setTheme(nextTheme)
  }

  if (isServer()) return null

  return (
    <button
      className="fixed right-4 top-4 rounded-lg border border-black p-2 dark:border-white md:right-8 md:top-8"
      onClick={handleClick}
      aria-label={`Theme switcher, current mode: ${theme}`}
    >
      {theme === 'light' ? (
        <FaMoon className="size-7 text-black" />
      ) : (
        <FaSun className="size-7 text-white" />
      )}
    </button>
  )
}

export { ThemeSwitch }
