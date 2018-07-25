import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { transparentize, darken } from 'polished';
// import _omit from 'lodash/omit';
import Base from './style';

import colors from 'styles/colors';

import loaderGif from 'assets/loader.gif';

/* eslint-disable import/no-named-as-default-member */
const {
  orange: primaryColor,
  gold: secondaryColor,
  offWhite: lightGray,
  gray: darkGray,
} = colors;
/* eslint-enable import/no-named-as-default-member */

const Button = styled(Base)`
  /* layout */
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  ${({ block }) => block && 'width: 100%;'};

  /* size */
  ${({ large }) =>
    large &&
    css`
      padding: 0.75em 1em;
      font-size: 16px;
      font-weight: 700;
    `}

  /* type */
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${primaryColor};
          border-color: ${primaryColor};
          color: white;
        `;
      case 'secondary':
        return css`
          background-color: ${secondaryColor};
          border-color: ${secondaryColor};
          color: white;
        `;
      case 'outline':
        return css`
          color: ${primaryColor};
          border-color: ${primaryColor};
        `;
      case 'link':
        return css`
          border: none;
          color: ${primaryColor};

          &:active {
            box-shadow: none;
            color: ${darken(0.2, primaryColor)};
            text-decoration: none !important;
          }

          &:hover:enabled,
          &:focus:enabled {
            box-shadow: none;
            color: ${transparentize(0.3, primaryColor)};
            text-decoration: underline;
          }
        `;
      default:
        return css`
          border-color: ${lightGray};
          color: ${darkGray};
        `;
    }
  }}

  /* loading */
  ${({ isLoading }) =>
    isLoading &&
    css`
      background-image: url(${loaderGif});
      background-position: center;
      background-size: 16px;
      background-repeat: no-repeat;
      color: rgba(0, 0, 0, 0);
    `}
`;

Button.defaultProps = {
  isLoading: false,
  large: false,
  variant: 'default',
  block: false,
};

Button.propTypes = {
  isLoading: PropTypes.bool,
  large: PropTypes.bool,
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'outline',
    'link',
  ]),
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

// export function withComponent(Comp) {
//   return Button.withComponent(props => {
//     const propsToFilter = Object.keys(Button.propTypes);
//     const filteredProps = _omit(props, propsToFilter);
//     return <Comp {...filteredProps}>{props.children}</Comp>;
//   });
// }

export default Button;
