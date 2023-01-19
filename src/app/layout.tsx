import 'primitive-jsx/dist/primitive-jsx.css'
import '@lib/styles/theme.css'
import '@lib/styles/resets.css'
import '@lib/styles/utils.css'
import Providers from '@components/Providers/Providers'
import { Layout as SegmentLayout } from 'primitive-jsx'
import type { LayoutProps } from 'primitive-jsx'

const Layout = (props: LayoutProps) => {
  const { children } = props
  return (
    <html lang="en">
      <body>
        <Providers>
          <SegmentLayout>{children}</SegmentLayout>
        </Providers>
      </body>
    </html>
  )
}

export default Layout
