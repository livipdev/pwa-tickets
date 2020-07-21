import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import TextField from '@livipdev/core/TextField';
import Button from '@livipdev/core/Button';
import Box from '@livipdev/core/Box';

import messages from './messages';

const ForgotPasswordForm = () => (
  <Fragment>
    <Box mb={5} width="100%">
      <TextField label="Digite seu e-mail" fullWidth />
    </Box>
    <Button variant="containedPrimary">
        <FormattedMessage {...messages.submitButton} />
      </Button>
  </Fragment>
);

export default ForgotPasswordForm;
