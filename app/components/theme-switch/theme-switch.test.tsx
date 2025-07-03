import type { RenderOptions } from '@testing-library/react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'next-themes'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'

import { ThemeSwitch } from '@/components/theme-switch/theme-switch'

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </ThemeProvider>
  )
}

const customRender = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

describe('<ThemeSwitch /> tests', () => {
  const user = userEvent.setup()

  beforeEach(() => {
    globalThis.window.localStorage.clear()
    document.documentElement.className = ''
  })

  afterEach(() => {
    globalThis.window.localStorage.clear()
  })

  test('It should render localStorage theme value if provided', async () => {
    globalThis.window.localStorage.setItem('theme', 'dark')
    customRender(<ThemeSwitch />)
    await waitFor(() => {
      return expect
        .element(screen.getByLabelText(/theme switcher, current mode: dark/i))
        .toBeInTheDocument()
    })
  })

  test('It should render system value if window.localStorage value is not provided', async () => {
    customRender(<ThemeSwitch />)
    await waitFor(() => {
      return expect
        .element(screen.getByLabelText(/theme switcher, current mode: system/i))
        .toBeInTheDocument()
    })
  })

  test('It should toggle to light theme when clicking the button', async () => {
    customRender(<ThemeSwitch />)

    await user.click(
      await screen.findByLabelText(/theme switcher, current mode: system/i)
    )

    await expect
      .element(screen.getByLabelText(/theme switcher, current mode: light/i))
      .toBeInTheDocument()
  })

  test('It should attach the theme property into the html class', async () => {
    customRender(<ThemeSwitch />)
    // system theme is light in test environment
    await waitFor(async () => {
      await expect.element(document.documentElement).toHaveClass('light')
    })

    await user.click(
      await screen.findByLabelText(/theme switcher, current mode: system/i)
    )
    await waitFor(async () => {
      await expect.element(document.documentElement).toHaveClass('light')
    })
    await user.click(
      screen.getByLabelText(/theme switcher, current mode: light/i)
    )
    await waitFor(async () => {
      await expect.element(document.documentElement).toHaveClass('dark')
    })
  })

  test('It should attach the theme property into the localStorage theme property', async () => {
    customRender(<ThemeSwitch />)
    await user.click(
      await screen.findByLabelText(/theme switcher, current mode: system/i)
    )
    expect(globalThis.window.localStorage.getItem('theme')).toBe('light')
    await user.click(
      screen.getByLabelText(/theme switcher, current mode: light/i)
    )
    expect(globalThis.window.localStorage.getItem('theme')).toBe('dark')
  })
})
