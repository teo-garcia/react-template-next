import { HttpResponse, http } from 'msw'

const healthcheckHandler = http.get('/api/healthcheck', () => {
  return HttpResponse.json(
    {
      message: 'ok',
      status: 200,
      data: null,
    },
    { status: 200 }
  )
})

export const handlers = [healthcheckHandler]
