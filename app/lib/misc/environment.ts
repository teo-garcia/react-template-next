export const isDevelopment = () => {
  return process.env.NODE_ENV === 'development'
}

export const isProduction = () => {
  return !isDevelopment()
}

export const isServer = () => {
  return globalThis.window == undefined
}

export const isClient = () => {
  return !isServer()
}
