import { rest } from 'msw'

const healthHandler = rest.get(
  'http://localhost:3001/health',
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 'ok',
      })
    )
  }
)

export const handlers = [healthHandler]
