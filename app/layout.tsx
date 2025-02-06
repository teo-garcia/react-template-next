import '@/lib/styles/globals.css'
import { Inter } from 'next/font/google'

import { Providers } from '@/components/providers/providers'
import { ThemeSwitch } from '@/components/theme-switch/theme-switch'
import { ViewportInfo } from '@/components/viewport-info/ViewportInfo'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s | RTN',
  },
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const RootLayout = async (props: React.PropsWithChildren) => {
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

export default RootLayout
