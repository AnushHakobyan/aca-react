

import React from 'react';

const style = {
    padding: '3px',
    height: '20px',
    border: '1px solid #c3c3c3',
    borderRadius: '5px',
    width: '150px',
    outline: 0,
};

const TextInput = ({ onChange }) => (
    <input
        style={style}
        type="text"
        onChange={onChange}
    />
);

export default TextInput;
