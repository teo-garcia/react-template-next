export const setupMSWBrowser = async () => {
  if (process.env.NODE_ENV === 'production') {
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
