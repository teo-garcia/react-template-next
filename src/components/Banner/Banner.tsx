'use client'

import styles from './Banner.module.css'
import { Box, Text } from 'primitive-jsx'
import { useQuery } from '@tanstack/react-query'

const fetcher = () =>
  fetch('/api')
    .then((res) => res.json())
    .then((res) => res)

function Banner() {
  const { data, isLoading } = useQuery(['mock query'], fetcher)
  if (isLoading) return null

  const { title } = data
  return (
    <Box tag="article" className={styles.container}>
      <Text color="background" weight="bold" className={styles.title}>
        {title}
      </Text>
    </Box>
  )
}

export { Banner }
