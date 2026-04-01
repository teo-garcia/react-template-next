import { createHealthyHealthResponse } from '@/lib/health'

export const GET = () => {
  return Response.json(createHealthyHealthResponse())
}
