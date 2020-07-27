import React from 'react';

import PublicRoute from 'components/Routes/Public';
import IntlBoilerplate from 'components/Boilerplates/Intl';
import ReduxBoilerplate from 'components/Boilerplates/Redux';
import SagasBoilerplate from 'components/Boilerplates/Sagas';

const Index = () => (
  <PublicRoute>
    <IntlBoilerplate /> <br/>
    <ReduxBoilerplate />
    <SagasBoilerplate />
  </PublicRoute>
);

export default Index;
