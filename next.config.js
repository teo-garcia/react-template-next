/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true, typedRoutes: true },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
