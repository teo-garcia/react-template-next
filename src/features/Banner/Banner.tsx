'use client'

import styles from './Banner.module.css'
import { Box, Text } from 'primitive-jsx'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { FaReact } from 'react-icons/fa'

const fetcher = () =>
  fetch('/api')
    .then((res) => res.json())
    .then((res) => res)

function Banner() {
  const { data, isLoading } = useQuery(['mock query'], fetcher)
  if (isLoading) return null

  const { title } = data
  return (
    <Box
      tag="section"
      className={clsx(
        'h-100vh d-flex fd-column ai-center jc-center bc-primary',
        styles.container
      )}
    >
      <FaReact className={clsx('c-secondary', styles.icon)} />
      <Text className={clsx('ta-center c-secondary fw-bold', styles.title)}>
        {title}
      </Text>
    </Box>
  )
}

export { Banner }
