'use client'

import { useEffect } from 'react'

export type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const Error = (props: ErrorProps) => {
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

export default Error
