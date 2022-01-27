import type { NextPage } from 'next';
import { ToolsDashboard } from '@features/ToolsDashboard/ToolsDashboard';

const Home: NextPage = function () {
  return (
    <>
      <ToolsDashboard />
    </>
  );
};

export default Home;
