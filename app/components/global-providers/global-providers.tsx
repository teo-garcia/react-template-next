'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'

import { createNewQueryClient } from '@/lib/misc/react-query'

export const GlobalProviders = (properties: React.PropsWithChildren) => {
  const { children } = properties

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('../../lib/mocks').then(({ setupMSWBrowser }) => setupMSWBrowser())
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={createNewQueryClient()}>
        {children}
        <ReactQueryDevtools buttonPosition="bottom-left" />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
