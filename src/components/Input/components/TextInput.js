import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import styled, { css } from 'styled-components';

import { orange, black, silver } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const InputField = styled.input`
  width: 100%;
  padding: 1em;
  border: none;
  color: ${black};
  font-family: ${primaryFonts};
  caret-color: ${orange};
  font-size: ${fontSize.regular};
  resize: none;
  outline: none;

  &::placeholder {
    color: ${silver};
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
  type: string,
  label: string,
  name: string,
};

TextInput.defaultProps = {
  type: 'text',
  label: null,
  name: null,
};

export default TextInput;
