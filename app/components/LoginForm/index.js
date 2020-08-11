import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import TextField from '@livipdev/core/TextField';
import Button from '@livipdev/core/Button';
import Box from '@livipdev/core/Box';
import Link from 'components/Link';

import messages from './messages';
import propTypes from './propTypes';

const LoginForm = ({ onSubmit }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitFormData = (e) => {
    e.preventDefault();

    onSubmit({
      rememberMe,
      email,
      password,
    });
  };

  const handleCheckBox = () => {
    setRememberMe(!rememberMe);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" component="form" onSubmit={submitFormData}>
      <Box mb={3}>
        <TextField
          label="E-mail"
          fullWidth
          type="email"
          value={email}
          onChange={handleEmail}
        />
      </Box>
      <TextField
        label="Senha"
        value={password}
        onChange={handlePassword}
      />
      <Box my={3} textAlign="center">
        <Link href="/forgot-password">
          <FormattedMessage {...messages.forgotPassword} />
        </Link>
      </Box>
      <Button variant="containedSecondary" type="submit">
        <FormattedMessage {...messages.submitButton} />
      </Button>
      <Box mt={2} display="flex" alignItems="center" justifyContent="center">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={handleCheckBox} />}
            label={<FormattedMessage {...messages.rememberMe} />}
          />
        </FormGroup>
      </Box>
    </Box>
  )
};

LoginForm.propTypes = propTypes;

export default LoginForm;
