import React from 'react';
import propTypes from './propTypes';

import Box from '@livipdev/core/Box';

const Link = ({ href, children, color }) => (
  <Box component="a" href={href} color={color}>
    {children}
  </Box>
);

Link.propTypes = propTypes;

Link.defaultProps = {
  color: 'common.white',
};

export default Link;