import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import DropdownIcon from 'icons/DropDown';
import { white, lightGray } from 'styles/colors';

const StyledButton = styled(Button)`
  width: auto;
  min-width: 80px;
  padding: 0 4px 0 9px;
  background-color: ${white};
  line-height: 30px;
  white-space: nowrap;
  &:focus:enabled {
    box-shadow: none;
  }
`;

const Icon = styled.div`
  display: inline-block;
  margin-right: 6px;
`;

const Content = styled.span`
  flex: 1;
  padding: 6px 6px 6px 0;
  line-height: 20px;
`;

const DropdownButton = ({ icon, label, ...remainProps }) => (
  <StyledButton {...remainProps}>
    {icon && <Icon>{icon}</Icon>}
    <Content>{label}</Content>
    <DropdownIcon color={lightGray} size={24} />
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
