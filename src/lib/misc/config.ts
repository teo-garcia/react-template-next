const isDevelopment = () => {
  return process.env.NODE_ENV === 'development'
}

const isProduction = () => {
  return !isDevelopment()
}

const isServer = () => {
  return typeof window === 'undefined'
}

const isClient = () => {
  return !isServer()
}

export { isDevelopment, isProduction, isClient, isServer }
