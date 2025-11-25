import { useQuery } from '@tanstack/react-query'

export const useHealthcheck = () => {
  return useQuery({
    queryKey: ['healthcheck'],
    queryFn: async () => {
      return await fetch('/api/healthcheck').then((response) => response.json())
    },
  })
}
