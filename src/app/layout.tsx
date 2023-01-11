import 'primitive-jsx/dist/primitive-jsx.css'
import '@lib/styles/resets.css'
import Providers from '@components/Providers/Providers'
import type { LayoutProps } from 'primitive-jsx'

const Layout = (props: LayoutProps) => {
  const { children } = props
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default Layout
