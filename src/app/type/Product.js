/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */
import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const ProductType = PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image_url: PropTypes.string
});
