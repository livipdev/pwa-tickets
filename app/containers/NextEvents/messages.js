import { defineMessages } from 'react-intl';
import { homeRef } from 'containers/Home/messages';

export const nextEventsRef = `${homeRef}.next_events`;

export default defineMessages({
  title: {
    id: `${nextEventsRef}.title`,
    defaultMessage: 'Próximos eventos',
  },
});
