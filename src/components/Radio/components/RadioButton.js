import React from 'react';
import { bool, func, node, shape, string } from 'prop-types';
import styled, { css } from 'styled-components';
import noop from 'utils/noop';
import { orange, silver, offWhite } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';

const Radio = styled.span`
  display: inline-block;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  padding: 2px;
  border: 1px solid ${silver};
  margin-right: 0.2em;
  border-radius: 50%;
  vertical-align: middle;
`;

const Text = styled.span`
  font-family: ${primaryFonts};
`;

const Label = styled.label`
  cursor: pointer;

  input {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
  }

  span {
    vertical-align: middle;
  }

  /* prettier-ignore */
  &:hover ${/* sc-selector */ Radio},
  > input:focus ~ ${/* sc-selector */ Radio} {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);
  }

  > input:disabled ~ ${/* sc-selector */ Radio} {
    background-color: ${offWhite};
  }

  > input:disabled ~ ${/* sc-selector */ Text} {
    opacity: 0.7;
  }

  > input:checked ~ ${/* sc-selector */ Radio}:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: ${orange};
    border-radius: 50%;
  }

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      &:hover ${/* sc-selector */ Radio} {
        box-shadow: none;
      }
    `}
`;

const RadioButton = ({
  children,
  checked,
  name,
  style,
  className,
  onChange,
  value,
  disabled,
}) => (
  <Label className={className} style={style} disabled={disabled}>
    <input
      type="radio"
      name={name}
      onChange={onChange}
      checked={checked}
      value={value}
      disabled={disabled}
    />
    <Radio /> <Text>{children}</Text>
  </Label>
);

RadioButton.propTypes = {
  style: shape({}),
  className: string,
  children: node,
  name: string,
  value: string.isRequired, // eslint-disable-line react/no-typos
  checked: bool,
  onChange: func,
  disabled: bool,
};

RadioButton.defaultProps = {
  style: {},
  className: null,
  children: null,
  name: null,
  onChange: noop,
  checked: false,
  disabled: false,
};

export default RadioButton;
