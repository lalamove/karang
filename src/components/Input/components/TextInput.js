import React, { forwardRef } from 'react';
import { string, object, func, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { mineShaft, nobel, primary } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const InputField = styled.input`
  width: 100%;
  padding: 1em;
  border: none;
  color: ${mineShaft['900']};
  font-family: ${primaryFonts};
  caret-color: ${primary.main};
  font-size: ${fontSize.regular};
  background-color: transparent;
  resize: none;
  outline: none;

  &::placeholder {
    color: ${nobel.main};
  }

  &::selection {
    background: ${rgba(primary.main, 0.1)};
  }

  ${({ label }) =>
    label &&
    css`
      &::placeholder {
        color: transparent;
      }
    `};
`;

const TextInput = forwardRef(
  ({ innerRef, type, name, label, ...remainProps }, ref) => (
    <InputField
      innerRef={ref}
      type={type}
      name={name}
      label={label}
      {...remainProps}
    />
  )
);

TextInput.propTypes = {
  innerRef: oneOf([object, func, string]),
  type: string,
  label: string,
  name: string,
};

TextInput.defaultProps = {
  innerRef: null,
  type: 'text',
  label: null,
  name: null,
};

export default TextInput;
