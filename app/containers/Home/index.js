import React from 'react';
import Box from '@livipdev/core/Box';

import Layout from 'containers/Layout';
import Highlight from 'components/Highlight';
import NextEvents from 'containers/NextEvents';
import Newsletter from 'containers/Newsletter';

const Home = () => (
  <Layout>
    <Highlight />
    <NextEvents />
    <Box mb={7}>
      <Newsletter />
    </Box>
  </Layout>
);

export default Home;
