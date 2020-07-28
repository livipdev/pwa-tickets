import React from 'react';

import Grid from '@livipdev/core/Grid';
import Box from '@livipdev/core/Box';
import Container from '@livipdev/core/Container';
import Logo from '@livipdev/core/Logotype';

const SimpleHeader = () => (
  <header>
    <Container>
      <Grid container>
        <Grid>
          <Logo />
        </Grid>
      </Grid>
    </Container>
  </header>
);

export default SimpleHeader;
