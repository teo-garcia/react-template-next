'use client'

import styles from './Banner.module.css'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { FaReact } from 'react-icons/fa'

const fetcher = () =>
  fetch('/api')
    .then((res) => res.json())
    .then((res) => res)

const Banner = () => {
  const { data, isLoading } = useQuery(['mock query'], fetcher)

  if (isLoading) return null

  const { title } = data
  return (
    <section
      className={clsx(
        'h-100vh d-flex fd-column ai-center jc-center bc-background',
        styles.container
      )}
    >
      <FaReact className={clsx('c-primary', styles.icon)} />
      <h1 className={clsx('ta-center c-primary fw-bold', styles.title)}>
        {title}
      </h1>
    </section>
  )
}

export { Banner }
