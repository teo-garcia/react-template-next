import 'primitive-jsx/dist/primitive-jsx.css'
import '@lib/styles/resets.css'
import Providers from '@components/Providers/Providers'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props
  return (
    <html lang="en">
      <head>
        <title>Next 13 | App</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default Layout
