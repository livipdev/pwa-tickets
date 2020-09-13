import { defineMessages } from 'react-intl';
import { homeRef } from 'containers/Home/messages';

const homeHeadRef = `${homeRef}.head`;

export default defineMessages({
  title: {
    id: `${homeHeadRef}.title`,
    defaultMessage: 'Livip Tickets - A melhor forma de viver eventos esportivos"',
  },

  description: {
    id: `${homeHeadRef}.description`,
    defaultMessage: 'Nós oferecemos a você a melhor experiência VIP que você pode oferecer aos seus clientes em um evento esportivo.',
  },

  keywords: {
    id: `${homeHeadRef}.keywords`,
    defaultMessage: 'eventos esportes experiência clientes vip camarote',
  },
});
