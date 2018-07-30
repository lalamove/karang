import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import { orange, offWhite } from 'styles/colors';

const Button = styled.button`
  appearance: none;
  padding: 5px;
  border: none;
  color: ${orange};
  cursor: pointer;
  border-radius: 2px;
  outline: 0;

  &:hover,
  &:focus {
    background: ${offWhite};
  }
`;

const IconButton = props => <Button {...props}>{props.children}</Button>;

IconButton.propTypes = {
  children: node.isRequired, // eslint-disable-line react/no-typos
};

export default IconButton;
