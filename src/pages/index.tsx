import type { NextPage } from 'next';
import useSWR from 'swr';
import Seo from '@components/Seo/Seo';

const fetcher = (info: RequestInfo, init: RequestInit) =>
  fetch(info, init).then((res) => res.json());

const Home: NextPage = function () {
  const { data, error } = useSWR('api/hello', fetcher);

  return (
    <>
      <Seo title="Home" description="Lorem ipsum dolor sit amet" />
      <h1>Hello World</h1>
    </>
  );
};

export default Home;
