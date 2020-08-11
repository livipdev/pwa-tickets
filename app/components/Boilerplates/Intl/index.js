import React, { Fragment } from 'react';
import { useIntl, defineMessages } from 'react-intl';

import messages from './messages';

const Intl = () => {
  const intl = useIntl();

  return (
    <Fragment>
      { intl.formatMessage(messages.test) }
    </Fragment>
  );
};

export default Intl;
