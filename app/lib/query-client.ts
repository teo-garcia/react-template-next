import { QueryClient, type QueryClientConfig } from '@tanstack/react-query'

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      staleTime: 60 * 1000,
    },
    mutations: {
      retry: 0,
    },
  },
}

export const createQueryClient = () => new QueryClient(queryClientConfig)
