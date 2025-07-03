/* eslint-disable sonarjs/todo-tag */
import { isProduction } from '@/lib/misc/environment'

export const setupMSWBrowser = async () => {
  if (isProduction()) return
  const { worker } = await import('./browser')
  worker.start({ onUnhandledRequest: 'bypass' })
}

// TODO: Implement MSW setup for Node.js
export const setupMSWNode = async () => {}
