'use client'

import { useEffect } from 'react'

export interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const GlobalErrorBoundary = (props: GlobalErrorProps) => {
  const { error, reset } = props

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}

export default GlobalErrorBoundary
