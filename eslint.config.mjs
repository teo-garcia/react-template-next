import nextPlugin from '@next/eslint-plugin-next'
import base from '@teo-garcia/eslint-config-shared/base'
import react from '@teo-garcia/eslint-config-shared/react'

export default [...base, ...react, nextPlugin.default.configs.recommended]
