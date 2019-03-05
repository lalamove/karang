import React from 'react';
import styled from 'styled-components';

import CloseIcon from 'components/Icon/icons/content/close';
import { orange, offWhite } from 'styles/colors';

const Button = styled.button`
  appearance: none;
  padding: 5px;
  border: none;
  background-color: transparent;
  color: ${orange};
  cursor: pointer;
  border-radius: 2px;
  outline: 0;

  &:hover,
  &:focus {
    background: ${offWhite};
  }
`;

const CloseButton = props => (
  <Button {...props}>
    <CloseIcon />
  </Button>
);

export default CloseButton;
