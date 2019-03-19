import React from 'react';
import { oneOf, node } from 'prop-types';
import styled, { css } from 'styled-components';
import { primary, secondary, valencia, nobel } from 'styles/colors';

const Button = styled.button`
  appearance: none;
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: 0;
  border-radius: ${({ shape }) => (shape === 'default' ? '100%' : '2px')};

  /* type */
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          color: ${primary.main};
          &:hover:enabled {
            background: ${primary['050']};
          }

          &:focus:enabled {
            background: ${primary['100']};
          }
        `;
      case 'secondary':
        return css`
          color: ${secondary.main};
          &:hover:enabled {
            background: ${secondary['050']};
          }

          &:focus:enabled {
            background: ${secondary['100']};
          }
        `;
      case 'danger':
        return css`
          color: ${valencia.main};
          &:hover:enabled {
            background: ${valencia['050']};
          }

          &:focus:enabled {
            background: ${valencia['100']};
          }
        `;
      default:
        return css`
          color: ${nobel['700']};
          &:hover:enabled {
            background: ${nobel['100']};
          }

          &:focus:enabled {
            background: ${nobel['200']};
          }
        `;
    }
  }} &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/**
 * IconButton component is the button component for the single icon use case.
 */
const IconButton = ({ variant, ...props }) => (
  <Button variant={variant} {...props} />
);

IconButton.propTypes = {
  /** Variant of IconButton component */
  variant: oneOf(['default', 'primary', 'secondary', 'danger']),
  /** Shape of IconButton component */
  shape: oneOf(['default', 'square']),
  /** @ignore */
  children: node.isRequired,
};

IconButton.defaultProps = {
  variant: 'default',
  shape: 'default',
};

export default IconButton;
