import { Banner } from 'features/Banner/Banner'
import type { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Home | RTN',
}

const HomePage = () => {
  return <Banner title="React Template Next" />
}

export { metadata }
export default HomePage
