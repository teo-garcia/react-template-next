import type { NextPage } from 'next';
import { Seo } from '@components/Seo/Seo';
import { ToolsDashboard } from '@features/ToolsDashboard/ToolsDashboard';

const Home: NextPage = function () {
  return (
    <>
      <Seo
        title="Home"
        description="Discover the power of creating your template projects"
      />
      <ToolsDashboard />
    </>
  );
};

export default Home;
