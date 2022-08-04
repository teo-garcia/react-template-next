import type { NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';
import { Seo } from 'primitivex';
import Banner from '@components/Banner/Banner';

const fetcher = (info: RequestInfo, init: RequestInit) =>
  fetch(info, init).then((res) => res.json());

const Home: NextPage = function () {
  const { data } = useSWR('api', fetcher);
  return (
    <>
      <Seo component={Head} title="Home | NextJS" />
      <Banner title={data?.title} />
    </>
  );
};

export default Home;
