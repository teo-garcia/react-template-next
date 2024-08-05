import 'lib/styles/globals.css'
import { Inter } from 'next/font/google'

import Providers from 'components/Providers/Providers'
import { ThemeSwitch } from 'components/ThemeSwitch/ThemeSwitch'
import { ViewportInfo } from 'components/ViewportInfo/ViewportInfo'

import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

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
        <div className="bg-white text-black transition-colors duration-500 ease-in-out dark:bg-black dark:text-white">
          <Providers>
            <ThemeSwitch />
            <ViewportInfo />
            <main>{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  )
}

export { metadata }
export default Layout
