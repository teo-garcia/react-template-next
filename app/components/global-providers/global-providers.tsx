'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  nextEnvironmentAdapter,
  useNextThemesAdapter,
} from '@teo-garcia/react-shared/adapters'
import { ThemeSwitch, ViewportInfo } from '@teo-garcia/react-shared/components'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'

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

const ThemeProviderContent = ({ children }: React.PropsWithChildren) => {
  const themeAdapter = useNextThemesAdapter()

  return (
    <>
      {children}
      <ThemeSwitch themeAdapter={themeAdapter} />
      <ViewportInfo environmentAdapter={nextEnvironmentAdapter} />
    </>
  )
}
