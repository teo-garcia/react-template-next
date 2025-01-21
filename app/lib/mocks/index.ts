import { isProduction } from 'lib/misc/config'

const setupMSWBrowser = async () => {
  if (isProduction()) return
  const { worker } = await import('./browser')
  worker.start({ onUnhandledRequest: 'bypass' })
}

const setupMSWNode = async () => {
  // if (isProduction()) return
  // const { server } = await import('./node')
  // server.listen({ onUnhandledRequest: 'bypass' })
}

export { setupMSWBrowser, setupMSWNode }
