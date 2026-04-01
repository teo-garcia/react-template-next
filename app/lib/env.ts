type NodeEnvironment = 'development' | 'production' | 'test'

const nodeEnv = (() => {
  const value = process.env.NODE_ENV

  if (value === 'development' || value === 'production' || value === 'test') {
    return value
  }

  return 'development'
})()

export const env = {
  appEnv: nodeEnv,
  isDevelopment: nodeEnv === 'development',
  isProduction: nodeEnv === 'production',
  isServer: !('window' in globalThis),
  nodeEnv: nodeEnv satisfies NodeEnvironment,
  publicUrl: process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000',
  isDev: nodeEnv === 'development',
  isProd: nodeEnv === 'production',
} as const

export const isDevelopment = env.isDevelopment
export const isProduction = env.isProduction
