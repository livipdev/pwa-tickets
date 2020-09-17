import React from 'react';
import Container from '@livipdev/core/Container';

import NewsletterBanner from '@livipdev/core/NewsletterBanner';
import * as NewsletterAPI from 'api/newsletter';

const Newsletter = () => {
  const handleSubmit = (email) => NewsletterAPI.subscribe(email);

  return (
    <Container>
      <NewsletterBanner onSubmit={handleSubmit} />
    </Container>
  );
};

export default Newsletter;
