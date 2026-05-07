import './app/lib/styles/globals.css'

import { afterAll, afterEach, beforeAll } from 'vitest'

let mswNode: typeof import('./app/lib/mocks/node-setup') | undefined

if (!('document' in globalThis)) {
  beforeAll(async () => {
    mswNode = await import('./app/lib/mocks/node-setup')
    mswNode.setupMSWNode()
  })

  afterEach(() => {
    mswNode?.cleanupMSWNode()
  })

  afterAll(() => {
    mswNode?.stopMSWNode()
  })
}
