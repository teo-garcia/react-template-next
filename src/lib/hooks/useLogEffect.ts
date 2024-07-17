import { logger } from 'lib/misc/logger'
import { useEffect } from 'react'
import type { Logger } from 'winston'

const useLogEffect = (type: keyof Logger, message: string) => {
  useEffect(() => {
    logger[type](message)
  }, [type, message])
}

export { useLogEffect }
