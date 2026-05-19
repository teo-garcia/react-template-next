'use client'

import {
  AlertTriangle,
  ArrowLeft,
  LoaderCircle,
  RefreshCw,
  SearchX,
} from 'lucide-react'
import type { AriaRole, ReactNode } from 'react'

type RouteStateVariant = 'error' | 'loading' | 'not-found'

interface RouteStateProperties {
  actions?: ReactNode
  description: string
  details?: string
  title: string
  variant: RouteStateVariant
}

const iconClassName = 'size-16 text-muted-foreground md:size-20 lg:size-24'

const routeStateIcons = {
  error: AlertTriangle,
  loading: LoaderCircle,
  'not-found': SearchX,
} satisfies Record<RouteStateVariant, typeof AlertTriangle>

function getRouteStateRole(variant: RouteStateVariant): AriaRole | undefined {
  if (variant === 'loading') return 'status'
  if (variant === 'error') return 'alert'
  return undefined
}

export function RouteState(properties: Readonly<RouteStateProperties>) {
  const { actions, description, details, title, variant } = properties
  const isLoading = variant === 'loading'
  const Icon = routeStateIcons[variant]
  const role = getRouteStateRole(variant)

  return (
    <section
      aria-live={isLoading ? 'polite' : undefined}
      className='flex min-h-svh flex-col items-center justify-center gap-8 px-6 py-16 text-center'
      role={role}
    >
      <Icon
        aria-hidden='true'
        className={`${iconClassName} ${isLoading ? 'animate-spin' : ''}`}
        strokeWidth={1.5}
      />
      <div className='flex max-w-xl flex-col items-center gap-3'>
        <h1 className='text-4xl font-semibold tracking-normal md:text-6xl'>
          {title}
        </h1>
        <p className='text-base leading-7 text-muted-foreground md:text-lg'>
          {description}
        </p>
      </div>
      {details && (
        <pre className='max-h-48 max-w-3xl overflow-auto rounded-md border border-border bg-muted px-4 py-3 text-left text-sm text-muted-foreground'>
          <code>{details}</code>
        </pre>
      )}
      {actions && (
        <div className='flex flex-wrap justify-center gap-3'>{actions}</div>
      )}
    </section>
  )
}

export function RouteStateLink({
  children,
  href,
}: Readonly<{ children: ReactNode; href: string }>) {
  return (
    <a
      className='inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'
      href={href}
    >
      <ArrowLeft aria-hidden='true' className='size-4' />
      {children}
    </a>
  )
}

export function RouteStateButton({
  children,
  onClick,
}: Readonly<{ children: ReactNode; onClick: () => void }>) {
  return (
    <button
      className='inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'
      onClick={onClick}
      type='button'
    >
      <RefreshCw aria-hidden='true' className='size-4' />
      {children}
    </button>
  )
}

export function RouteLoadingState() {
  return (
    <RouteState
      description='Preparing the next screen with the latest data.'
      title='Loading'
      variant='loading'
    />
  )
}

export function RouteNotFoundState() {
  return (
    <RouteState
      actions={<RouteStateLink href='/'>Return home</RouteStateLink>}
      description='The page you are looking for does not exist.'
      title='Page not found'
      variant='not-found'
    />
  )
}
