import React from 'react';
import { func, string, oneOf } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';

import StarFilledIcon from 'components/Icon/icons/toggle/starFilled';
import { small, large } from '../ratingSizes';

const StarStyle = styled.span`
  display: inline-block;
  padding: ${({ size }) => (size === large ? '0px 5px' : '0px 1px')};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'auto')};
  &:first-of-type {
    padding-left: 0px;
  }
  &:last-of-type {
    padding-right: 0px;
  }
`;

const Star = ({ onClick, onMouseEnter, onMouseLeave, color, size }) => (
  <StarStyle
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    size={size}
  >
    <StarFilledIcon color={color} size={size} />
  </StarStyle>
);

Star.propTypes = {
  size: oneOf([small, large]),
  color: string.isRequired, // eslint-disable-line react/no-typos
  onClick: func,
  onMouseEnter: func,
  onMouseLeave: func,
};

Star.defaultProps = {
  size: small,
  onClick: noop,
  onMouseEnter: noop,
  onMouseLeave: noop,
};

export default Star;
