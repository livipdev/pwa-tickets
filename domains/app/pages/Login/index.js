import React from 'react';
import { FormattedMessage } from 'react-intl';

import ContainerWithBackground from '@livipdev/core/ContainerWithBackground';
import Typography from '@livipdev/core/Typography';
import Box from '@livipdev/core/Box';
import Grid from '@livipdev/core/Grid';

import Footer from 'components/Footer';
import SimpleHeader from 'components/SimpleHeader';
import LoginForm from 'components/LoginForm';
import FullScreenContainer from 'components/FullScreenContainer';

import messages from './messages';

const Login = () => (
  <FullScreenContainer background="/images/bg-login.jpg">
    <SimpleHeader />
    <Grid container justify="center">
      <Grid xs={12} md={4}>
        <Box display="flex" flexDirection="column" component="form" mt={9}>
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
    </Grid>
    <Footer />
  </FullScreenContainer>
);

export default Login;
