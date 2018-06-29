import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import { black } from 'styles/colors';
import EyeOffIcon from 'icons/EyeOffIcon';
import EyeOnIcon from 'icons/EyeOnIcon';

const Button = styled.button`
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 14px;
  outline: 0;
  padding: 0;
`;

const PeekButton = ({ active, onClick }) => (
  <Button onClick={onClick}>
    {!active && <EyeOffIcon color={black} size={20} />}
    {active && <EyeOnIcon color={black} size={20} />}
  </Button>
);

PeekButton.propTypes = {
  active: bool,
  onClick: func,
};

PeekButton.defaultProps = {
  active: false,
  onClick: noop,
};

export default PeekButton;
