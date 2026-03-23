import { createWrapper } from '@teo-garcia/react-shared/test-utils'
import { render as tlRender, type RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'next-themes'

// QueryClient + provider is handled by createWrapper from react-shared.
// AllProviders composes it with the Next.js-specific ThemeProvider.
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
