import styles from './Banner.module.css'
import { Box, Typography } from 'primitive-jsx'
import type { BannerProps } from '@lib/types/client'

function Banner(props: BannerProps) {
  const { title } = props
  return (
    <Box tag="article" className={styles.container}>
      <Typography color="background" weight="bold" className={styles.title}>
        {title}
      </Typography>
    </Box>
  )
}

export default Banner
