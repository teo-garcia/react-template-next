'use client'

import styles from './Banner.module.css'
import { Box, Typography } from 'primitive-jsx'
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
      <Typography color="background" weight="bold" className={styles.title}>
        {title}
      </Typography>
    </Box>
  )
}

export default Banner
