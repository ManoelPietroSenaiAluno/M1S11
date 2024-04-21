import PropTypes from 'prop-types';

export function InteresseItem({ title, onRemove, onProcrastinate }) {
  return (
    <li>
      <span>{title}</span>
      <button onClick={onRemove}>☑️</button>
      <button onClick={onProcrastinate}>🔁</button>
    </li>
  );
}

InteresseItem.propTypes = {
  title: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onProcrastinate: PropTypes.func.isRequired,
};
