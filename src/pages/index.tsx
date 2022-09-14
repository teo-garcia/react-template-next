import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout, Seo } from 'primitive-jsx'
import { useQuery } from '@tanstack/react-query'

import Banner from '@components/Banner/Banner'

const fetcher = () =>
  fetch('/api')
    .then((res) => res.json())
    .then((res) => res)

const Home: NextPage = function () {
  const { data } = useQuery(['mock query'], fetcher)

  return (
    <Layout>
      <Seo component={Head} title="Home | NextJS" />
      <Banner title={data?.title} />
    </Layout>
  )
}

export default Home
