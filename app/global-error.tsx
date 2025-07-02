'use client'

import { useEffect } from 'react'

export interface GlobalErrorProperties {
  error: Error & { digest?: string }
  reset: () => void
}

const GlobalErrorBoundary = (properties: GlobalErrorProperties) => {
  const { error, reset } = properties

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang='en'>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}

export default GlobalErrorBoundary
