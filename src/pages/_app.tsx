import '@styles/globals.css';
import 'primitivex/dist/primitivex.cjs.production.min.css';
import type { AppProps } from 'next/app';
import { Layout } from 'primitivex';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
