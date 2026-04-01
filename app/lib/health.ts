export type HealthStatus = 'ok' | 'degraded' | 'down'

export interface HealthResponse {
  checks?: Record<string, string>
  status: HealthStatus
  timestamp?: string
  version?: string
}

const HEALTH_STATUSES = new Set<HealthStatus>(['ok', 'degraded', 'down'])

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null

export const createHealthyHealthResponse = (): HealthResponse => ({
  status: 'ok',
  timestamp: new Date().toISOString(),
})

export const parseHealthResponse = (value: unknown): HealthResponse => {
  if (!isRecord(value)) {
    throw new TypeError('Health response must be an object')
  }

  if (
    typeof value['status'] !== 'string' ||
    !HEALTH_STATUSES.has(value['status'] as HealthStatus)
  ) {
    throw new TypeError('Health response status is invalid')
  }

  const status = value['status'] as HealthStatus
  const timestamp =
    typeof value['timestamp'] === 'string' ? value['timestamp'] : undefined
  const version =
    typeof value['version'] === 'string' ? value['version'] : undefined
  const checksValue = value['checks']

  if (checksValue != undefined && !isRecord(checksValue)) {
    throw new TypeError('Health response checks must be an object')
  }

  const checks =
    checksValue == undefined
      ? undefined
      : Object.fromEntries(
          Object.entries(checksValue).map(([key, item]) => {
            if (typeof item === 'string') {
              return [key, item]
            }

            throw new TypeError(
              `Health response check "${key}" must be a string`
            )
          })
        )

  const response: HealthResponse = { status }

  if (checks !== undefined) {
    response.checks = checks
  }

  if (timestamp !== undefined) {
    response.timestamp = timestamp
  }

  if (version !== undefined) {
    response.version = version
  }

  return response
}
