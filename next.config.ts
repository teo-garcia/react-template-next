import bundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

import { securityHeaders } from './lib/security-headers'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        headers: [...securityHeaders],
        source: '/(.*)',
      },
    ]
  },
  output: 'standalone',
  reactCompiler: true,
  reactStrictMode: true,
}

export default withBundleAnalyzer(nextConfig)
