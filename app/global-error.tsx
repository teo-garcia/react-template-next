'use client'

import { useEffect } from 'react'

export type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default (props: GlobalErrorProps) => {
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

