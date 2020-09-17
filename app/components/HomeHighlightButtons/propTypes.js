import PropTypes from 'prop-types';

const eventPropTypes = PropTypes.shape({
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

const propTypes = {
  events: PropTypes.arrayOf(eventPropTypes).isRequired,
};

export default propTypes;
