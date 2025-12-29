export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  publicUrl: process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000',
} as const

export const isDevelopment = env.nodeEnv === 'development'
export const isProduction = env.nodeEnv === 'production'
