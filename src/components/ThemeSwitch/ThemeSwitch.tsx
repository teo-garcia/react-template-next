'use client'

import styles from './ThemeSwitch.module.css'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import clsx from 'clsx'
import type { ThemeMode } from '@lib/types/client'

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      return (window.localStorage.getItem('theme') as ThemeMode) || 'light'
    }
    return 'light'
  })
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const onClick = () => {
    setTheme(nextTheme)
  }

  return (
    <button
      className={clsx(styles.button, 'bc-secondary')}
      onClick={onClick}
      aria-label={`Theme switcher, current mode: ${theme}`}
    >
      {theme === 'light' ? (
        <FaMoon className={clsx(styles.icon, 'c-background')} />
      ) : (
        <FaSun className={clsx(styles.icon, 'c-text')} />
      )}
    </button>
  )
}

export { ThemeSwitch }
