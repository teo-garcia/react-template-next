'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

const Error = (props: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  const { error, reset } = props

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <h2>Something went wrong!</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  )
}

export default Error
