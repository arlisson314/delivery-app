import PropTrypes from 'prop-types';

export default function GenericBtn({ type, name, dataTestId, onClick, disabled }) {
  return (
    <button
      type={ type === 'submit' ? 'submit' : 'button' }
      name={ name }
      data-testid={ dataTestId }
      onClick={ onClick }
      disabled={ disabled }
    >
      { name }
    </button>
  );
}

GenericBtn.propTypes = {
  type: PropTrypes.string.isRequired,
  name: PropTrypes.string.isRequired,
  dataTestId: PropTrypes.string.isRequired,
  onClick: PropTrypes.func.isRequired,
  disabled: PropTrypes.bool.isRequired,
};
