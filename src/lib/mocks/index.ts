const setupMSW = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('./node')
    server.listen({ onUnhandledRequest: 'bypass' })
  } else {
    const { worker } = await import('./browser')
    worker.start({ onUnhandledRequest: 'bypass' })
  }
}

export { setupMSW }
