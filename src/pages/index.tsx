import React, { FC, memo } from 'react';

import { HomeGreeting, Layout, MyStack } from '@/shared';

const Home: FC = () => {
  return (
    <Layout>
      <section className='container'>
        <HomeGreeting />
        <MyStack />
        <br />
        <br />
      </section>
    </Layout>
  );
};

export default memo(Home);
