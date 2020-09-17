import React from 'react';

import EventFilteredList from '@livipdev/containers/EventFilteredList';
import Box from '@livipdev/core/Box';
import Container from '@livipdev/core/Container';
import Title from '@livipdev/core/Title';
import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';

import { response } from 'api/nextEvents';

import messages from './messages';
import { NEXT_EVENTS } from './constants';

const NextEvents = () => {
  const title = {
    variant: 'h2',
    message: messages.title,
  };

  return (
    <Box component={Container} py={7}>
      <Title
        title={title}
        maxWidth={SCREEN_SIZES.SMALL}
        align="center"
      />
      <EventFilteredList
        events={response}
        selectorName={NEXT_EVENTS}
      />
    </Box>
  );
};

export default NextEvents;
