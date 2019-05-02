import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import DropDownIcon from 'components/Icon/icons/arrows/dropdown';
import { nobel, white } from 'styles/colors';

const StyledButton = styled(Button)`
  display: flex;
  width: 100%;
  min-width: 80px;
  padding: 0.5em 1em;
  background-color: ${white};
  white-space: nowrap;
  &:focus:enabled {
    box-shadow: none;
  }
`;

const CustomIcon = styled.span`
  flex: 0 0 auto;
  align-self: center;
  margin-right: 0.5em;
  line-height: 1.6;
`;

const Content = styled.span`
  flex: 1 1 auto;
  align-self: center;
  margin-right: 0.5em;
  line-height: 1.6;
  text-align: left;
`;

const Caret = styled.span`
  margin-right: -5px;
`;

const DropdownButton = ({ icon, label, ...remainProps }) => (
  <StyledButton {...remainProps}>
    {icon && <CustomIcon>{icon}</CustomIcon>}
    <Content>{label}</Content>
    <Caret>
      <DropDownIcon color={nobel.main} size={24} />
    </Caret>
  </StyledButton>
);

DropdownButton.propTypes = {
  icon: node,
  label: string,
};

DropdownButton.defaultProps = {
  icon: null,
  label: 'Options',
};

export default DropdownButton;
