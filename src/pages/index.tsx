import type { NextPage } from 'next';
import Seo from '@components/Seo/Seo';

const Home: NextPage = function () {
  console.info('What happen');

  return (
    <>
      <Seo title="Home" description="Lorem ipsum dolor sit amet" />
    </>
  );
};

export default Home;
