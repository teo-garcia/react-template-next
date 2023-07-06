import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeSwitch } from './ThemeSwitch'

describe('<ThemeSwitch /> tests', () => {
  const user = userEvent.setup()

  beforeEach(() => {
    window.localStorage.clear()
  })

  afterEach(() => {
    window.localStorage.clear()
  })

  test('It should render localStorage theme value if provided', () => {
    window.localStorage.setItem('theme', 'dark')
    render(<ThemeSwitch />)
    expect(
      screen.getByLabelText(/theme switcher, current mode: dark/i)
    ).toBeInTheDocument()
  })

  test('It should render light value if window.localStorage value is not provided', () => {
    render(<ThemeSwitch />)
    expect(
      screen.getByLabelText(/theme switcher, current mode: light/i)
    ).toBeInTheDocument()
  })

  test('It should toggle to dark theme when clicking the button', async () => {
    render(<ThemeSwitch />)
    await user.click(
      screen.getByLabelText(/theme switcher, current mode: light/i)
    )
    expect(
      screen.getByLabelText(/theme switcher, current mode: dark/i)
    ).toBeInTheDocument()
  })

  test('It should attach the theme property into the body dataset', async () => {
    render(<ThemeSwitch />)
    await expect(document.body).toHaveClass('light')
    await user.click(
      screen.getByLabelText(/theme switcher, current mode: light/i)
    )
    await expect(document.body).toHaveClass('dark')
    await user.click(
      screen.getByLabelText(/theme switcher, current mode: dark/i)
    )
    await expect(document.body).toHaveClass('light')
  })

  test('It should attach the theme property into the localStorage theme property', async () => {
    render(<ThemeSwitch />)
    await user.click(
      screen.getByLabelText(/theme switcher, current mode: light/i)
    )
    expect(window.localStorage.getItem('theme')).toBe('dark')
    await user.click(
      screen.getByLabelText(/theme switcher, current mode: dark/i)
    )
    expect(window.localStorage.getItem('theme')).toBe('light')
  })
})
