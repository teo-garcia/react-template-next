'use client'

import styles from './Banner.module.css'
import { Box, Text } from 'primitive-jsx'
import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
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
      className={classNames(
        'h-100vh d-flex fd-column ai-center jc-center',
        styles.container
      )}
    >
      <FaReact className={classNames('c-background', styles.icon)} />
      <Text
        className={classNames('ta-center c-background fw-bold', styles.title)}
      >
        {title}
      </Text>
    </Box>
  )
}

export { Banner }
