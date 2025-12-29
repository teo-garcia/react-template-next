import { env, isProduction } from '../env'
import { server } from './node'

export const setupMSWNode = () => {
  if (isProduction) {
    return null
  }

  try {
    server.listen({ onUnhandledRequest: 'bypass' })
    return server
  } catch (error) {
    console.error('Failed to start MSW Node server:', error, {
      env: env.nodeEnv,
    })
    return null
  }
}

export const cleanupMSWNode = () => {
  try {
    server.resetHandlers()
  } catch (error) {
    console.error('Failed to cleanup MSW Node server:', error)
  }
}

export const stopMSWNode = () => {
  try {
    server.close()
  } catch (error) {
    console.error('Failed to stop MSW Node server:', error)
  }
}
