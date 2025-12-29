'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'

import { ThemeSwitch } from '@/components/theme-switch/theme-switch'
import { ViewportInfo } from '@/components/viewport-info/viewport-info'
import { createNewQueryClient } from '@/lib/misc/react-query'

export const GlobalProviders = (properties: React.PropsWithChildren) => {
  const { children } = properties

  useEffect(() => {
    if (globalThis.window != undefined) {
      import('../../lib/mocks').then(({ setupMSWBrowser }) => setupMSWBrowser())
    }
  }, [])

  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <QueryClientProvider client={createNewQueryClient()}>
        <ThemeProviderContent>{children}</ThemeProviderContent>
        <ReactQueryDevtools buttonPosition='bottom-left' />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

const ThemeProviderContent = ({ children }: React.PropsWithChildren) => (
  <>
    {children}
    <ThemeSwitch />
    <ViewportInfo />
  </>
)
