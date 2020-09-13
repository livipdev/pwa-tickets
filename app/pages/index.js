import React from 'react';

import PublicRoute from 'components/Routes/Public';

import Home from 'containers/Home';
import Head from 'components/Heads/Home';

const Index = () => (
  <PublicRoute>
    <Head />
    <Home />
  </PublicRoute>
);

export default Index;
