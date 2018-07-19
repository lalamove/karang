import React from 'react';
import { string, bool, func } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import { orange, gray, silver, white, offWhite } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const Text = styled.span`
  padding-left: 28px;
`;

const Checkmark = styled.span`
  border: solid 1px ${silver};
  height: 16px;
  width: 16px;
  position: absolute;

  &:after {
    content: '';
    display: none;
    position: absolute;
    border: solid ${orange};
    border-width: 0 2px 2px 0;
    height: 9px;
    width: 4px;
    left: 5px;
    top: 1px;
    transform: rotate(45deg);
  }
`;

const Input = styled.input`
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
  position: absolute;

  &:focus ~ ${Checkmark} {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);
  }

  &:checked ~ ${Checkmark} {
    background-color: ${white};
  }

  &:checked ~ ${Checkmark}:after {
    display: block;
  }

  &:disabled ~ ${Checkmark} {
    background-color: ${offWhite};
  }

  &:disabled ~ ${Checkmark}:after {
    border-color: ${silver};
  }

  &:disabled ~ ${Text} {
    opacity: 0.7;
  }
`;

const Container = styled.label`
  position: relative;
  font-family: ${primaryFonts};
  color: ${gray};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: ${fontSize.regular};
  user-select: none;

  &:hover ${Input} ~ ${Checkmark} {
    border: solid 1px ${silver};
  }

  &:hover ${Checkmark} {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);
  }
`;

const CheckBox = ({
  checked,
  name,
  label,
  onChange,
  disabled,
  ...remainProps
}) => (
  <Container htmlFor={name} {...remainProps}>
    <Input
      type="checkbox"
      name={name}
      id={name}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    <Checkmark />
    <Text>{label}</Text>
  </Container>
);

CheckBox.propTypes = {
  name: string.isRequired, // eslint-disable-line
  label: string,
  checked: bool,
  onChange: func,
  disabled: bool,
};

CheckBox.defaultProps = {
  label: '',
  checked: false,
  onChange: noop,
  disabled: false,
};

export default CheckBox;
