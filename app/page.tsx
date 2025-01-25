import { Banner } from './features/Banner/Banner'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | RTN',
}

const HomePage = () => {
  return <Banner title="React Template Next" />
}

export default HomePage
