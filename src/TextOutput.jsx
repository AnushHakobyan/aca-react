import React from 'react';

const style = {
    fontSize: '13px',
    color: '#6A6A6A',
    fontWeight: 'bold',
};

const TextOutput = ({ output }) => (
    <p style={style}>{output}</p>
);

export default TextOutput;
