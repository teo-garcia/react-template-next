import 'lib/styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from 'components/Providers/Providers'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { ThemeSwitch } from 'components/ThemeSwitch/ThemeSwitch'

const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s | RTN',
  },
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const Layout = async (props: PropsWithChildren) => {
  const { children } = props
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-primary text-black transition-colors duration-500 ease-in-out dark:bg-black dark:text-white">
          <Providers>
            <ThemeSwitch />
            <main>{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  )
}

export { metadata }
export default Layout
