export const isDevelopment = () => {
  return process.env.NODE_ENV === 'development'
}

export const isProduction = () => {
  return !isDevelopment()
}

export const isServer = () => {
  return typeof window === 'undefined'
}

export const isClient = () => {
  return !isServer()
}

export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? ''
