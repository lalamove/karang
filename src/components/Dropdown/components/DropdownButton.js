import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import DropdownIcon from 'icons/DropDown';
import { white, lightGray } from 'styles/colors';

const StyledButton = styled(Button)`
  width: auto;
  min-width: 80px;
  padding: 0.5em 1em;
  background-color: ${white};
  white-space: nowrap;
  &:focus:enabled {
    box-shadow: none;
  }
`;

const Icon = styled.span`
  display: inline-block;
  margin-right: 0.5em;
  line-height: 1.6;
  vertical-align: middle;
`;

const Content = styled.span`
  display: inline-block;
  margin-right: 0.5em;
  line-height: 1.6;
  vertical-align: middle;
`;

const Caret = styled.span`
  margin-right: -5px;
`;

const DropdownButton = ({ icon, label, ...remainProps }) => (
  <StyledButton {...remainProps}>
    {icon && <Icon>{icon}</Icon>}
    <Content>{label}</Content>
    <Caret>
      <DropdownIcon color={lightGray} size={24} />
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
