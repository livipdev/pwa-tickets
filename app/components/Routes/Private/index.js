import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { PATH as AUTH_VALIDATE_TOKEN_PATH } from 'pages/api/auth/validate-token/constants';

import { UNAUTHORIZED_ROUTE, UNAUTHORIZED_MESSAGE } from './constants';
import propTypes from './propTypes';

const validateToken = url =>
  fetch(url).then(res => {
    if (res.status >= 300) {
      throw new Error(UNAUTHORIZED_MESSAGE);
    }

    return res.status;
  });

const Private = ({ children }) => {
  const router = useRouter();
  const { error } = useSWR(AUTH_VALIDATE_TOKEN_PATH, validateToken);

  useEffect(() => {
    if (error) router.push(UNAUTHORIZED_ROUTE);
  }, [error, router]);

  return <Fragment>{children}</Fragment>;
};

Private.propTypes = propTypes;

export default Private;
