import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import { black, offWhite } from 'styles/colors';
import EyeOffIcon from 'icons/EyeOff';
import EyeOnIcon from 'icons/EyeOn';
import Button from 'components/Button';

const ScButton = styled(Button)`
  border: none;

  &:hover,
  &:focus {
    background: ${offWhite};
  }
`;

const PeekButton = ({ active, onClick }) => (
  <ScButton onClick={onClick}>
    {!active && <EyeOffIcon color={black} size={20} />}
    {active && <EyeOnIcon color={black} size={20} />}
  </ScButton>
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
