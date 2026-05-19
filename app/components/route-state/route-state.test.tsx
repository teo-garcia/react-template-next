import axe from 'axe-core'

import { render } from '@/lib/test/render'

import { RouteLoadingState, RouteNotFoundState } from './route-state'

test('RouteLoadingState renders an accessible loading state', async () => {
  const { container, getByRole } = render(<RouteLoadingState />)
  const results = await axe.run(container)

  expect(getByRole('status')).toHaveTextContent('Loading')
  expect(results.violations).toEqual([])
})

test('RouteNotFoundState renders an accessible not found state', async () => {
  const { container, getByRole } = render(<RouteNotFoundState />)
  const results = await axe.run(container)

  expect(getByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
  expect(getByRole('link', { name: 'Return home' })).toHaveAttribute(
    'href',
    '/'
  )
  expect(results.violations).toEqual([])
})
