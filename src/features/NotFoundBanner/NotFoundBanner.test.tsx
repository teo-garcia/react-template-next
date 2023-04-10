import { render } from '@testing-library/react'
import { NotFoundBanner } from './NotFoundBanner'

describe('<NotFoundBanner /> tests', () => {
  test('It should render', () => {
    render(<NotFoundBanner />)
    expect(1 + 1).toBe(2)
  })
})
