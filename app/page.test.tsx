import { render, screen } from '@/lib/test/render'

import HomePage from './page'

test('HomePage renders with providers', () => {
  render(<HomePage />)
  expect(
    screen.getByRole('button', { name: /theme switcher/i })
  ).toBeInTheDocument()
})
