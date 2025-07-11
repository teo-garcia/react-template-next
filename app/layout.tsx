import '@/lib/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeSwitch } from '@/components/theme-switch/theme-switch'
import { ViewportInfo } from '@/components/viewport-info/viewport-info'

import { GlobalProviders } from './components/global-providers/global-providers'

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

const RootLayout = async (properties: React.PropsWithChildren) => {
  const { children } = properties
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <GlobalProviders>
          <div className='min-h-screen'>
            <ThemeSwitch />
            <ViewportInfo />
            <main>{children}</main>
          </div>
        </GlobalProviders>
      </body>
    </html>
  )
}

export default RootLayout
