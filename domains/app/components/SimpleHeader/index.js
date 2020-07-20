import React from 'react';

import Grid from '@livipdev/core/Grid';
import Box from '@livipdev/core/Box';
import Container from '@livipdev/core/Container';

const SimpleHeader = () => (
  <header>
    <Container>
      <Grid container>
        <Grid>
          <img src="/images/logo.svg" />
        </Grid>
      </Grid>
    </Container>
  </header>
);

export default SimpleHeader;
