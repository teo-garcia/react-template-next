import 'primitive-jsx/dist/primitive-jsx.css'
import '@lib/styles/theme.css'
import '@lib/styles/resets.css'
import '@lib/styles/utils.css'
import { Ubuntu } from 'next/font/google'
import Providers from '@components/Providers/Providers'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

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
      <body>
        <Providers>
          <main className={ubuntu.className}>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export { metadata }
export default Layout
