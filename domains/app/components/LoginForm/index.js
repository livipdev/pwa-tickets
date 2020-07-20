import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import TextField from '@livipdev/core/TextField';
import Button from '@livipdev/core/Button';
import Box from '@livipdev/core/Box';
import Typography from '@livipdev/core/Typography';

import messages from './messages';

const LoginForm = () => (
  <Fragment>
    <TextField label="E-mail" />
    <TextField label="Senha" />
    <Box my={3} component="a" href="#" textAlign="center">
      <Typography variant="body1">
        <FormattedMessage {...messages.forgotPassword} />
      </Typography>
    </Box>
    <Button variant="containedSecondary">Entrar</Button>
    <Box mt={2} textAlign="center">
      <Typography variant="body1">
        <FormattedMessage {...messages.rememberMe} />
      </Typography>
    </Box>
  </Fragment>
);

export default LoginForm;