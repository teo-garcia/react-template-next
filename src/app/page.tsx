import type { NextPage } from 'next'
import { Layout } from 'primitive-jsx'
import Banner from '@components/Banner/Banner'

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner />
    </Layout>
  )
}

export default Home
