import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render as tlRender, type RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'next-themes'
import { createElement, type ReactNode } from 'react'

const createWrapper = (
  queryClient = new QueryClient({
    defaultOptions: {
      mutations: { retry: false },
      queries: { gcTime: 0, retry: false },
    },
  })
) => {
  return function Wrapper({ children }: { children: ReactNode }) {
    return createElement(QueryClientProvider, { client: queryClient }, children)
  }
}

const QueryWrapper = createWrapper()

const AllProviders = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider attribute='class' defaultTheme='light'>
    <QueryWrapper>
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>
    </QueryWrapper>
  </ThemeProvider>
)

const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => tlRender(ui, { wrapper: AllProviders, ...options })

export { renderWithProviders as render }
export { screen, waitFor, within } from '@testing-library/react'
