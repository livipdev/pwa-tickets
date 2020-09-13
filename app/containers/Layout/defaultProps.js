import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const defaultProps = {
  variant: publicRuntimeConfig.variant,
};

export default defaultProps;
