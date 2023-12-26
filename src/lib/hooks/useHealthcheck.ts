import { useQuery } from '@tanstack/react-query'

const useHealthcheck = () => {
  return useQuery({
    queryKey: ['healthcheck'],
    queryFn: async () => {
      return await fetch('http://localhost:3000/api/healthcheck').then(
        (response) => response.json()
      )
    },
  })
}

export { useHealthcheck }
