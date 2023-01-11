'use client'
import styles from './AuthView.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Box, Button, Text } from 'primitive-jsx'
import Image from 'next/image'
import type { SignedOnViewProps } from '@lib/types/client'

const AuthView = () => {
  const { data: session } = useSession()
  if (session) return <SignedOnView user={session.user} />

  return (
    <Box tag="section" className={styles.wrapper}>
      <Button
        weight="bold"
        className={styles.signInButton}
        onClick={() => signIn()}
      >
        Sign In 🔑
      </Button>
    </Box>
  )
}

const SignedOnView = (props: SignedOnViewProps) => {
  const { user } = props
  return (
    <Box tag="section" className={styles.userInfo}>
      <Text tag="h1" color="primary" weight="bold" className={styles.title}>
        Sign In Successful 🎉
      </Text>
      <Box className={styles.userDetails}>
        <Image
          src={user?.image ?? ''}
          alt="Profile pic"
          width={200}
          height={200}
          className={styles.profilePic}
        />
        <Text
          tag="h2"
          color="secondary"
          weight="bold"
          className={styles.subtitle}
        >
          User Info
        </Text>
        <Text
          tag="h3"
          color="secondary"
          weight="bold"
          className={styles.detail}
        >
          Name:{' '}
          <Text tag="span" color="text">
            {user?.name}
          </Text>
        </Text>
        <Text
          tag="h3"
          color="secondary"
          weight="bold"
          className={styles.detail}
        >
          Email:{' '}
          <Text tag="span" color="text">
            {user?.email}
          </Text>
        </Text>
      </Box>
      <Button
        weight="bold"
        className={styles.signOutButton}
        onClick={() => signOut()}
      >
        Sign out 🚪
      </Button>
    </Box>
  )
}

export { AuthView }
