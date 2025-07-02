'use client'

import { useEffect } from 'react'

export interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage = (properties: ErrorProps) => {
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

export default ErrorPage
