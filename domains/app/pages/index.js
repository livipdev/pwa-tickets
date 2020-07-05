import React, { Fragment } from 'react';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  test: {
    id: `test`,
    defaultMessage: 'Oh geez!',
  },
});

const Index = () => {
  const intl = useIntl();

  return (
    <Fragment>
      { intl.formatMessage(messages.test) }
    </Fragment>
  );
};

export default Index;
