import 'primitivex/dist/primitivex.css'
import '@styles/resets.css'
import type { AppProps } from 'next/app'
import { Layout } from 'primitivex'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
