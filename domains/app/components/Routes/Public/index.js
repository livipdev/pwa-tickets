import React, { Fragment } from 'react';

import propTypes from './propTypes';

const Public = ({ children }) => <Fragment>{children}</Fragment>;

Public.propTypes = propTypes;

export default Public;
