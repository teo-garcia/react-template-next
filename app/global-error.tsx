'use client'

import { useEffect } from 'react'

import {
  RouteState,
  RouteStateButton,
} from './components/route-state/route-state'

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
        <RouteState
          actions={
            <RouteStateButton onClick={reset}>Try again</RouteStateButton>
          }
          description='The application shell failed to render. Retry after the root boundary resets.'
          details={error.digest ? `Digest: ${error.digest}` : undefined}
          title='Application error'
          variant='error'
        />
      </body>
    </html>
  )
}

export default GlobalErrorBoundary
