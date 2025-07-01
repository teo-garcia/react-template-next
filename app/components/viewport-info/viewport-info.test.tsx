import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import { isDevelopment } from '@/lib/misc/environment'

import { ViewportInfo } from './viewport-info'

vi.mock('@/lib/misc/environment')

describe('<ViewportInfo /> tests', () => {
  describe('when in development environment', () => {
    test('It should render initial width and height', () => {
      vi.mocked(isDevelopment).mockReturnValue(true)
      render(<ViewportInfo />)
      const initialWidth = window.innerWidth
      const initialHeight = window.innerHeight
      expect(
        screen.getByText(new RegExp(`${initialWidth}px - ${initialHeight}px`))
      ).toBeInTheDocument()
    })

    test('It should update width and height on window resize', () => {
      vi.mocked(isDevelopment).mockReturnValue(true)
      render(<ViewportInfo />)
      const newWidth = 800
      const newHeight = 600

      window.innerWidth = newWidth
      window.innerHeight = newHeight
      fireEvent(window, new Event('resize'))

      expect(
        screen.getByText(new RegExp(`${newWidth}px - ${newHeight}px`))
      ).toBeInTheDocument()
    })
  })

  describe('when in production environment', () => {
    test('It should not render in production mode', async () => {
      vi.mocked(isDevelopment).mockReturnValue(false)
      const { container } = render(<ViewportInfo />)
      await expect.element(container).toBeEmptyDOMElement()
    })
  })
})
