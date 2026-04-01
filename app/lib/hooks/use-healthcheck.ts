import { useQuery } from '@tanstack/react-query'

import { parseHealthResponse } from '@/lib/health'

const fetchHealth = async () => {
  const response = await fetch('/api/health')

  if (!response.ok) {
    throw new Error(`Health request failed with status ${response.status}`)
  }

  return parseHealthResponse(await response.json())
}

export const useHealthcheck = () => {
  return useQuery({
    queryFn: fetchHealth,
    queryKey: ['health'],
  })
}
