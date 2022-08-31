import 'primitivex/dist/primitivex.css'
import '@lib/styles/resets.css'
import type { AppProps } from 'next/app'
import Providers from '@components/Providers/Providers'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
