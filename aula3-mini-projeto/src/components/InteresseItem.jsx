import PropTypes from 'prop-types'

export function InteresseItem({ title, onRemove }) {
    return (
        <li>
            {title}
            <button onClick={onRemove}>🗑️</button>
        </li>
    )
}

InteresseItem.propTypes = {
    title: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
}

