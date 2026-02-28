import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render as tlRender, type RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'next-themes'

import { ThemeSwitch } from '@/components/theme-switch/theme-switch'
import { ViewportInfo } from '@/components/viewport-info/viewport-info'

const createTestQueryClient = () =>
  new QueryClient({ defaultOptions: { queries: { retry: false } } })

const AllProviders = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider attribute='class' defaultTheme='light'>
    <QueryClientProvider client={createTestQueryClient()}>
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>
      <ThemeSwitch />
      <ViewportInfo />
    </QueryClientProvider>
  </ThemeProvider>
)

const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => tlRender(ui, { wrapper: AllProviders, ...options })

export { renderWithProviders as render }
export { screen, waitFor, within } from '@testing-library/react'
