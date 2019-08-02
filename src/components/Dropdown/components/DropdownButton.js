import React from 'react';
import { bool, node, string } from 'prop-types';
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

  & > span {
    display: flex;
    width: 100%;
  }
`;

const ItemIcon = styled.span`
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

const DropdownButton = ({
  itemIcon,
  label,
  icon,
  disabled,
  ...remainProps
}) => (
  <StyledButton disabled={disabled} {...remainProps}>
    {itemIcon && <ItemIcon>{itemIcon}</ItemIcon>}
    <Content>{label}</Content>
    <Caret>{icon}</Caret>
  </StyledButton>
);

DropdownButton.propTypes = {
  itemIcon: node,
  label: string,
  icon: node,
  disabled: bool,
};

DropdownButton.defaultProps = {
  itemIcon: null,
  label: 'Options',
  icon: <DropDownIcon color={nobel.main} size={24} />,
  disabled: false,
};

export default DropdownButton;
