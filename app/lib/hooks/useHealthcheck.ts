import { useQuery } from '@tanstack/react-query'

import { apiBaseUrl } from '@/lib/misc/environment'

export const useHealthcheck = () => {
  return useQuery({
    queryKey: ['healthcheck'],
    queryFn: async () => {
      return await fetch(`${apiBaseUrl}/healthcheck`).then((response) =>
        response.json()
      )
    },
  })
}
