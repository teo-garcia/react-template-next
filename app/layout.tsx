import '@/lib/styles/globals.css'

import { SkipLink } from '@teo-garcia/react-shared/components/skip-link'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
        <SkipLink href='#main-content' />
        <GlobalProviders>
          <div className='min-h-screen'>
            <main id='main-content'>{children}</main>
          </div>
        </GlobalProviders>
      </body>
    </html>
  )
}

export default RootLayout
