import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

import { black, offWhite } from 'styles/colors';
import noop from 'utils/noop';
import Button from 'components/Button';
import EyeOnIcon from 'components/Icon/icons/status/eyeOn';
import EyeOffIcon from 'components/Icon/icons/status/eyeOff';

const SCButton = styled(Button)`
  border: none;

  &:hover,
  &:focus {
    background: ${offWhite};
  }
`;

const PeekButton = ({ active, onClick }) => (
  <SCButton onClick={onClick}>
    {!active && <EyeOffIcon color={black} size={20} />}
    {active && <EyeOnIcon color={black} size={20} />}
  </SCButton>
);

PeekButton.propTypes = {
  /** PeekButton status */
  active: bool,
  /** Callback function to be executed when user click on the button */
  onClick: func,
};

PeekButton.defaultProps = {
  active: false,
  onClick: noop,
};

export default PeekButton;
