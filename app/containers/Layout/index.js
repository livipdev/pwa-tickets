import React from 'react';
import Container from '@livipdev/core/Container';
import Header from '@livipdev/containers/Header';
import Footer from '@livipdev/containers/Footer';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const Layout = ({ children, variant, ...props }) => (
  <Container
    disableGutters
    maxWidth={false}
    {...props}
  >
    <Header variant={variant} rootLogotype />
    {children}
    <Footer variant={variant} />
  </Container>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
