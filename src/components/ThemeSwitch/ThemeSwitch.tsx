'use client'

import { ThemeMode } from '@lib/types/client'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<ThemeMode>(
    typeof window !== 'undefined'
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

  return (
    <button
      className="fixed right-4 top-4 rounded-lg border border-slate-200 p-2 md:right-8 md:top-8"
      onClick={handleClick}
      aria-label={`Theme switcher, current mode: ${theme}`}
    >
      {theme === 'light' ? (
        <FaMoon className="h-7 w-7 text-white" />
      ) : (
        <FaSun className="h-7 w-7 text-white" />
      )}
    </button>
  )
}

export { ThemeSwitch }
