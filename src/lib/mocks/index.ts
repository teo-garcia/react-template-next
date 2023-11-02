import { isProduction, isServer } from 'lib/misc/config'

const setupMSW = async () => {
  if (isProduction()) {
    return
  }

  if (isServer()) {
    const { server } = await import('./node')
    server.listen({ onUnhandledRequest: 'bypass' })
  } else {
    const { worker } = await import('./browser')
    worker.start({ onUnhandledRequest: 'bypass' })
  }
}

export { setupMSW }
