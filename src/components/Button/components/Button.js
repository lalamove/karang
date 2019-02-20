import React from 'react';
import { bool, oneOf, node } from 'prop-types';
import styled, { css } from 'styled-components';
import { transparentize, darken } from 'polished';

import Base from './style';
import omit from 'utils/omit';
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
  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          padding: 0.75em 1em;
          font-size: 16px;
          font-weight: 700;
        `;
      case 'xlarge':
        return css`
          padding: 0.9em 1em;
          font-size: 18px;
          font-weight: 700;
        `;
      default:
        return css``;
    }
  }}

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
          padding: 0;
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
  size: null,
  variant: 'default',
  block: false,
  type: 'button',
};

Button.propTypes = {
  isLoading: bool,
  size: oneOf(['large', 'xlarge']),
  variant: oneOf(['default', 'primary', 'secondary', 'outline', 'link']),
  block: bool,
  children: node.isRequired,
  type: oneOf(['button', 'submit', 'reset']),
};

export function withComponent(Comp) {
  return Button.withComponent(props => {
    const propsToFilter = Object.keys(Button.propTypes);
    const filteredProps = omit(props, propsToFilter);
    return <Comp {...filteredProps}>{props.children}</Comp>;
  });
}

const Text = styled.span`
  vertical-align: middle;
  margin-right: 10px;
`;

// eslint-disable-next-line react/prop-types
export default ({ icon, children, ...rest }) => {
  if (icon) {
    return (
      <Button {...rest}>
        <Text>{children}</Text>
        {icon}
      </Button>
    );
  }
  return <Button {...rest}>{children}</Button>;
};
