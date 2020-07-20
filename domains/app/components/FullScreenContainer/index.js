import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import ContainerWithBackground from '@livipdev/core/ContainerWithBackground';
import Box from '@livipdev/core/Box';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
});

const FullScreenContainer = ({ background, children }) => {
  const classes = useStyles();

  return (
    <ContainerWithBackground background={background} customClass={classes.root}>
      <Box px={2}>
        {children}
      </Box>
    </ContainerWithBackground>
  )
};

FullScreenContainer.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FullScreenContainer;
