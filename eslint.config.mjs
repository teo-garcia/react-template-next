import shared from '@teo-garcia/eslint-config-shared'
import sharedReact from '@teo-garcia/eslint-config-shared/react'
import nextPlugin from '@next/eslint-plugin-next/dist/index.js'

export default [
  ...shared,
  ...sharedReact,
  nextPlugin.flatConfig.recommended,
  // project-specific additions here (if needed)
]
