import React from 'react';
import { FormattedMessage } from 'react-intl';

import Typography from '@livipdev/core/Typography';
import ContainerWithBackground from '@livipdev/core/ContainerWithBackground';
import Box from '@livipdev/core/Box';
import Grid from '@livipdev/core/Grid';

import SimpleHeader from 'components/SimpleHeader';
import LoginForm from 'components/LoginForm';

import messages from './messages';

const Login = () => (
  <ContainerWithBackground background="/images/bg-login.jpg">
    <SimpleHeader />
    <Box px={2} container justify="center" alignItems="center" component={Grid} height="calc(100vh - 75px)">
      <Grid item xs={12} md={4}>
        <Box display="flex" flexDirection="column" component="form">
          <Typography variant="h3" gutterBottom>
            <FormattedMessage {...messages.loginTitle} />
          </Typography>
          <LoginForm />
          <Box mt={4} textAlign="center">
            <Typography gutterBottom>
              <FormattedMessage {...messages.newHere} />
              <a href="#">
                <FormattedMessage {...messages.signHere} />
              </a>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  </ContainerWithBackground>
);

export default Login;
