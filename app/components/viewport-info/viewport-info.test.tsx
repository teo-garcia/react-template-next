import { act, render, fireEvent, screen } from '@testing-library/react'

import { ViewportInfo } from './viewport-info'
import { isDevelopment } from '@/lib/misc/config'

jest.mock('lib/misc/config', () => {
  return {
    ...jest.requireActual,
    isDevelopment: jest.fn(),
  }
})

describe('<ViewportInfo /> tests', () => {
  const isDevelopmentMock = isDevelopment as jest.Mock

  beforeAll(() => {
    isDevelopmentMock.mockReturnValue(true)
  })

  test('It should render initial width and height', () => {
    render(<ViewportInfo />)
    const initialWidth = window.innerWidth
    const initialHeight = window.innerHeight
    expect(
      screen.getByText(`${initialWidth} x ${initialHeight}`)
    ).toBeInTheDocument()
  })

  test('It should update width and height on window resize', () => {
    render(<ViewportInfo />)
    const newWidth = 800
    const newHeight = 600

    act(() => {
      window.innerWidth = newWidth
      window.innerHeight = newHeight
    })

    fireEvent(window, new Event('resize'))

    expect(screen.getByText(`${newWidth} x ${newHeight}`)).toBeInTheDocument()
  })

  test('It should not render in production mode', () => {
    isDevelopmentMock.mockReturnValue(false)

    render(<ViewportInfo />)
    const initialWidth = window.innerWidth
    const initialHeight = window.innerHeight
    expect(
      screen.queryByText(`${initialWidth} x ${initialHeight}`)
    ).not.toBeInTheDocument()
  })
})
