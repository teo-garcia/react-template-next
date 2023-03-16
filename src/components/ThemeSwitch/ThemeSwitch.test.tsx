import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeSwitch } from './ThemeSwitch'

describe('<ThemeSwitch /> tests', () => {
  const user = userEvent.setup()

  test('It should render light theme by default', () => {
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
    expect(document.body.dataset.theme).toBe('light')
    await user.click(
      screen.getByLabelText(/theme switcher, current mode: light/i)
    )
    expect(document.body.dataset.theme).toBe('dark')
    await user.click(
      screen.getByLabelText(/theme switcher, current mode: dark/i)
    )
    expect(document.body.dataset.theme).toBe('light')
  })
})
