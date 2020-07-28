import React, { Fragment, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import TextField from '@livipdev/core/TextField';
import Button from '@livipdev/core/Button';
import Box from '@livipdev/core/Box';

import messages from './messages';

const ForgotPasswordForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const submitFormData = (e) => {
    e.preventDefault();

    onSubmit({
      email,
    });
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Box component="form" display="flex" flexDirection="column" onSubmit={submitFormData}>
      <Box mb={5} width="100%">
        <TextField
          label="Digite seu e-mail"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmail}
        />
      </Box>
      <Button variant="containedPrimary" type="submit">
          <FormattedMessage {...messages.submitButton} />
        </Button>
    </Box>
  )
};

export default ForgotPasswordForm;
