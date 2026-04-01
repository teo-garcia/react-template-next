// eslint-disable-next-line simple-import-sort/imports
import nextPlugin from '@next/eslint-plugin-next'
import base from '@teo-garcia/eslint-config-shared/base'
import { defineConfig } from 'eslint/config'
import playwright from '@teo-garcia/eslint-config-shared/playwright'
import react from '@teo-garcia/eslint-config-shared/react'

export default defineConfig([
  ...base,
  ...react,
  nextPlugin.default.configs.recommended,
  ...playwright,
])
