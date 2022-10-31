import PropTrypes from 'prop-types';

export default function genericBtn({ type, name, dataTestId, onClick, disabled }) {
  return (
    <button
      type={ type === 'submit' ? 'submit' : 'button' }
      name={ name }
      data-testid={ dataTestId }
      onClick={ onClick }
    >
      { name }
    </button>
  );
}

genericBtn.propTypes = {
  type: PropTrypes.string.isRequired,
  name: PropTrypes.string.isRequired,
  dataTestId: PropTrypes.string.isRequired,
  onClick: PropTrypes.func.isRequired,
};
