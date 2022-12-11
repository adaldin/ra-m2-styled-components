import PropTypes from 'prop-types';

export function Label({ label, htmlFor, hidden }) {
  return (
    <label htmlFor={htmlFor} hidden={hidden}>
      {label}
    </label>
  );
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
};
