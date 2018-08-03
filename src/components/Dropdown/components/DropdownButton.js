import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import DropdownIcon from 'icons/DropDown';
import { lightGray } from 'styles/colors';

const StyledButton = styled(Button)`
  min-width: 80px; // TODO: ugly hack, need fix
  width: auto;
  white-space: nowrap;
  padding: 0 4px 0 9px;
  line-height: 30px;
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

const ArrowIcon = styled(DropdownIcon).attrs({
  color: lightGray,
  size: 24,
})`
  float: right;
`;

const DropdownButton = ({ icon, label, ...remainProps }) => (
  <StyledButton {...remainProps}>
    {icon && <Icon>{icon}</Icon>}
    <Content>{label}</Content>
    <ArrowIcon />
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
