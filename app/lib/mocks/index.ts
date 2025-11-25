export const setupMSWBrowser = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nodeEnv = (globalThis as any).process?.env?.NODE_ENV
  if (nodeEnv === 'production') {
    return
  }

  try {
    const { worker } = await import('./browser')
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    })
  } catch (error) {
    console.error('Failed to start MSW:', error)
  }
}
