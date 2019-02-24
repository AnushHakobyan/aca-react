


import React from 'react';
import PropTypes from 'prop-types';

const BUTTON_VARIANT_PRIMARY = 'primary';
const BUTTON_VARIANT_SECONDARY = 'secondary';
const BUTTON_VARIANT_DANGER = 'danger';

const styles = {
    [BUTTON_VARIANT_PRIMARY]: {
        backgroundColor: '#3eb768',
        color: '#FFFFFF',
    },
    [BUTTON_VARIANT_SECONDARY]: {
        backgroundColor: '#d8ffe9',
        color: '#444444',
    },
    [BUTTON_VARIANT_DANGER]: {
        backgroundColor: '#f97611',
        color: '#FFFFFF',
    },
    root: {
        border: 0,
        borderRadius: '5px',
        padding: '5px 10px',
        outline: 'none',
    },
    disabled: {
        backgroundColor: '#d3rd3d3',
        color: '#888888',
    }
};

const Button = ({
    name, onClick, type, variant, isDisabled,
}) => {
    const buttonStyle = isDisabled
        ? styles.disabled
        : styles[variant];

    return (
        <button
            type={type}
            onClick={isDisabled ? undefined : onClick}
            style={{ ...styles.root, ...buttonStyle }}
        >
            {name}
        </button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['button', 'submit']),
    variant: PropTypes.oneOf([
        BUTTON_VARIANT_PRIMARY,
        BUTTON_VARIANT_SECONDARY,
        BUTTON_VARIANT_DANGER,
    ]),
    isDisabled: PropTypes.bool,
};

Button.defaultProps = {
    type: 'button',
    variant: BUTTON_VARIANT_SECONDARY,
    isDisabled: false,
};

export default Button;
