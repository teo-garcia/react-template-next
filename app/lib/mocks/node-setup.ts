import { server } from './node'

export const setupMSWNode = () => {
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  try {
    server.listen({ onUnhandledRequest: 'bypass' })
    return server
  } catch (error) {
    console.error('Failed to start MSW Node server:', error)
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
