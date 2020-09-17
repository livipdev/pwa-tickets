import React from 'react';
import Container from '@livipdev/core/Container';
import Button from '@livipdev/core/Button';
import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';

import propTypes from './propTypes';

const HomeHighlightButtons = ({ classes, events }) => (
  <Container
    classes={classes}
    maxWidth={SCREEN_SIZES.MEDIUM}
    disableGutters
  >
    {
      events.map((event) => (
        <Button variant="outlined" key={event.key}>
          {event.title}
        </Button>
      ))
    }
  </Container>
);

HomeHighlightButtons.propTypes = propTypes;

export default HomeHighlightButtons;
