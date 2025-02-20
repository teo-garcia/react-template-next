import '@/lib/styles/globals.css'
import { Inter } from 'next/font/google'

import { ThemeSwitch } from '@/components/theme-switch/theme-switch'
import { ViewportInfo } from '@/components/viewport-info/viewport-info'

import type { Metadata } from 'next'
import { Providers } from './components/providers/providers'

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

export default async (props: React.PropsWithChildren) => {
  const { children } = props
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="transition-colors duration-100 ease-in-out ">
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

