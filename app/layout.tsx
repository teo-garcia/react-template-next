import '@/lib/styles/globals.css'

import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

import { GlobalProviders } from './components/global-providers/global-providers'

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s | RTN',
  },
}

const geist = Geist({
  subsets: ['latin'],
})

const RootLayout = async (properties: React.PropsWithChildren) => {
  const { children } = properties
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={geist.className} suppressHydrationWarning>
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
