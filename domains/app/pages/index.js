import React, { Fragment } from 'react';

import IntlBoilerplate from 'components/Boilerplates/Intl';
import ReduxBoilerplate from 'components/Boilerplates/Redux';
import SagasBoilerplate from 'components/Boilerplates/Sagas';

const Index = () => (
  <Fragment>
    <IntlBoilerplate /> <br/>
    <ReduxBoilerplate />
    <SagasBoilerplate />
  </Fragment>
);

export default Index;
