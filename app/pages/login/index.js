import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import flow from 'lodash/flow';

import { startSignIn } from 'store/user/actions';

import Typography from '@livipdev/core/Typography';
import ContainerWithBackground from '@livipdev/core/ContainerWithBackground';
import Box from '@livipdev/core/Box';
import Grid from '@livipdev/core/Grid';

import Link from 'components/Link'
import SimpleHeader from 'components/SimpleHeader';
import LoginForm from 'components/LoginForm';

import messages from './messages';

const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = flow(startSignIn, dispatch);

  return (
    <ContainerWithBackground background="/images/bg-login.jpg">
      <SimpleHeader />
      <Box px={2} container justify="center" alignItems="center" component={Grid} height="calc(100vh - 61px)">
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" color="common.white">
            <Typography variant="h3" gutterBottom>
              <FormattedMessage {...messages.loginTitle} />
            </Typography>
            <LoginForm onSubmit={onSubmit} />
            <Box mt={4} textAlign="center">
              <Typography gutterBottom>
                <FormattedMessage {...messages.newHere} />
                <Link href="/signup">
                  <FormattedMessage {...messages.signHere} />
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
    </ContainerWithBackground>
  )
};

export default Login;
