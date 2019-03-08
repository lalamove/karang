import React from 'react';
import { node, bool, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';
import {
  mineShaft,
  mountainMeadow,
  nobel,
  pictonBlue,
  primary,
  secondary,
  treePoppy,
  valencia,
  white,
} from 'styles/colors';
import { fontSize } from 'styles/fonts';

const colorsMap = {
  default: mineShaft['800'],
  mineShaft: mineShaft.main,
  mountainMeadow: mountainMeadow.main,
  nobel: nobel.main,
  pictonBlue: pictonBlue.main,
  pictonBlueDark: pictonBlue['800'],
  primary: primary.main,
  secondary: secondary.main,
  treePoppy: treePoppy.main,
  valencia: valencia.main,
};

const StyledBadge = styled.span`
  display: inline-block;
  font-size: ${fontSize.small};
  font-weight: bold;
  line-height: 1;
  text-align: center;
  border: 1px solid;
  border-color: ${({ variant }) => colorsMap[variant] || colorsMap.default};
  ${({ size }) =>
    size === 'small'
      ? css`
          padding: 0.2em 0.8em;
        `
      : css`
          padding: 0.4em 0.8em;
        `};
  ${({ solid }) =>
    solid
      ? css`
          background-color: ${({ variant }) =>
            colorsMap[variant] || colorsMap.default};
          color: ${white};
        `
      : css`
          color: ${({ variant }) => colorsMap[variant] || colorsMap.default};
        `};
`;

const Text = styled.span`
  vertical-align: middle;
  margin-left: 8px;
`;

/**
 * Badge component is label with a background color for displaying status or text.
 */
const Badge = ({ icon, variant, children, ...rest }) => {
  if (icon)
    return (
      <StyledBadge {...rest} title={children} variant={variant}>
        {icon}
        <Text>{children}</Text>
      </StyledBadge>
    );
  return (
    <StyledBadge {...rest} title={children} variant={variant}>
      {children}
    </StyledBadge>
  );
};

Badge.propTypes = {
  /** Text in the Badge component */
  children: node.isRequired,
  /** Icon component shown next to the text */
  icon: node,
  /** Variant color of Badge component */
  variant: oneOf([
    'default',
    'mineShaft',
    'mountainMeadow',
    'nobel',
    'pictonBlue',
    'pictonBlueDark',
    'primary',
    'secondary',
    'treePoppy',
    'valencia',
  ]),
  /** Size of Badge component */
  size: oneOf(['small', 'default']),
  /** `true` for showing as solid background color */
  solid: bool,
};

Badge.defaultProps = {
  icon: null,
  variant: 'default',
  size: 'default',
  solid: false,
};

export default Badge;
