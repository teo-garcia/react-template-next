import { render } from '@/lib/test/render'

import HomePage from './page'

test('HomePage renders with providers', () => {
  const { container } = render(<HomePage />)

  expect(container.querySelector('section')).not.toBeNull()
  expect(container.querySelector('svg')).not.toBeNull()
})
