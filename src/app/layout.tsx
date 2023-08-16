import '@lib/styles/globals.css'
import { Ubuntu } from 'next/font/google'
import Providers from '@components/Providers/Providers'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { ThemeSwitch } from '@components/ThemeSwitch/ThemeSwitch'

const metadata: Metadata = {
  title: {
    default: 'Next 13 | Home',
    template: '%s | Next 13',
  },
}

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Layout = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Providers>
          <main>
            <ThemeSwitch />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}

export { metadata }
export default Layout
