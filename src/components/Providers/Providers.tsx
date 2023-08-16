'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { ProvidersProps } from '@lib/types/client'
import { ViewportInfo } from '@components/ViewportInfo/ViewportInfo'

const isDEV = process.env.NODE_ENV === 'development'
const queryClient = new QueryClient()

const Providers = (props: ProvidersProps) => {
  const { children } = props
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {isDEV && <ReactQueryDevtools />}
      {isDEV && <ViewportInfo />}
    </QueryClientProvider>
  )
}

export default Providers
