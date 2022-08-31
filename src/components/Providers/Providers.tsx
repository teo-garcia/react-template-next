import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import type { ProvidersProps } from '@lib/types/client'

const isDEV = process.env.NODE_ENV === 'development'

/* React Query */
const queryClient = new QueryClient()

const Providers = (props: ProvidersProps) => {
  const { children } = props
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {isDEV && <ReactQueryDevtools />}
    </QueryClientProvider>
  )
}

export default Providers
