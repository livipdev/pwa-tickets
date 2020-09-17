import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';

const styles = (theme) => ({
  root: {
    ...theme.alignments.equallySpaced,
    ...theme.alignments.wrappedWithSomeSpace,

    height: '45px',
    overflow: 'hidden',

    '&> *' : {
      marginBottom: theme.spaces.default.value,
    },

    [theme.breakpoints.down(SCREEN_SIZES.SMALL)]: {
      paddingLeft: theme.spaces.default.value,
      paddingRight: theme.spaces.default.value,
    },

    [theme.breakpoints.down(SCREEN_SIZES.EXTRA_SMALL)]: {
      ...theme.visibilities.removed,
    },
  },
});

export default styles;
