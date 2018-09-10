import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import styled, { css } from 'styled-components';

import { orange, black } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const InputField = styled.input`
  width: 100%;
  padding: 1em;
  border: none;
  color: ${black};
  font-family: ${primaryFonts};
  caret-color: ${orange};
  font-size: ${fontSize.regular};
  line-height: 20px;
  resize: none;
  outline: none;

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
  name: string.isRequired, // eslint-disable-line react/no-typos
};

TextInput.defaultProps = {
  type: 'text',
  label: null,
};

export default TextInput;
