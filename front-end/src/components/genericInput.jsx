import PropTypes from 'prop-types';

export default function GenericInput({
  label,
  name,
  type,
  value,
  onChange,
  testId,
}) {
  return (
    <label htmlFor={ `${name}-input` }>
      {label}
      <input
        type={ type }
        name={ name }
        id={ `${name}-input` }
        data-testid={ testId }
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

GenericInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};
