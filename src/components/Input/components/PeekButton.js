import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

import { black, offWhite } from 'styles/colors';
import noop from 'utils/noop';
import Button from 'components/Button';
import Icon from 'components/Icon';

const SCButton = styled(Button)`
  border: none;

  &:hover,
  &:focus {
    background: ${offWhite};
  }
`;

const PeekButton = ({ active, onClick }) => (
  <SCButton onClick={onClick}>
    {!active && <Icon type="privacyIcon2" color={black} size={20} />}
    {active && <Icon type="privacyIcon1" color={black} size={20} />}
  </SCButton>
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
