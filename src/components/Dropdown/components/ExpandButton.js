import React from 'react';
import styled, { css } from 'styled-components';

import VmenuIcon from 'components/Icon/icons/content/vmenu';
import { nobel } from 'styles/colors';

const Button = styled.button`
  appearance: none;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${nobel['700']};
  cursor: pointer;
  border-radius: 100%;
  outline: 0;

  &:hover {
    background-color: ${nobel['100']};
  }

  &:focus {
    background-color: ${nobel['200']};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;

      &:hover,
      &:focus {
        background: transparent;
      }
    `};
`;

const ExpandButton = props => (
  <Button {...props}>
    <VmenuIcon size={36} />
  </Button>
);

export default ExpandButton;
