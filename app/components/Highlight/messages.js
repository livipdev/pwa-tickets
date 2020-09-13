import { defineMessages } from 'react-intl';
import { homeRef } from 'containers/Home/messages';

const highlightRef = `${homeRef}.highlight`;

export default defineMessages({
  title: {
    id: `${highlightRef}.title`,
    defaultMessage: 'Eleve sua próxima experiência',
  },

  subtitle: {
    id: `${highlightRef}.subtitle`,
    defaultMessage: 'Deixe por nossa conta, somos experts em eventos vip no mundo todo.',
  },

  suptitle: {
    id: `${highlightRef}.suptitle`,
    defaultMessage: 'Bem-vindo',
  },
});
