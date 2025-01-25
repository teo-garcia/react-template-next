'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useEffect } from 'react'

const queryClient = new QueryClient()

const Providers = (props: { children: React.ReactNode }) => {
  const { children } = props

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('../../lib/mocks').then(({ setupMSWBrowser }) => setupMSWBrowser())
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  )
}

export default Providers
