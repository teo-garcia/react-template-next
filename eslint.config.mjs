import nextPlugin from '@next/eslint-plugin-next'
import base from '@teo-garcia/eslint-config-shared/base'
import playwright from '@teo-garcia/eslint-config-shared/playwright'
import react from '@teo-garcia/eslint-config-shared/react'

export default [...base, ...react, nextPlugin.default.configs.recommended, ...playwright]
