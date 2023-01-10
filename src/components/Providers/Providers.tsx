'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { ProvidersProps } from '@lib/types/client'

/* React Query */
const queryClient = new QueryClient()

const Providers = (props: ProvidersProps) => {
  const { children } = props
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default Providers
