import PropTypes from 'prop-types'

export function Button({ children, ...rest }) {
    return (
        <button className="button-add" {...rest}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
}
