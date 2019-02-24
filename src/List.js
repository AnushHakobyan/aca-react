

import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items }) => (
    <ul>
        {
            items.map(({ key, value }) => (<li key={key}>{value}</li>))
        }
    </ul>
);

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        })).isRequired,
};

export default List;
