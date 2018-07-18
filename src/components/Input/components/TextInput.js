import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { orange, black } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const InputField = styled.input`
  border: none;
  color: ${black};
  caret-color: ${orange};
  font-size: ${fontSize.regular};
  font-family: ${primaryFonts};
  line-height: 20px;
  margin: 14px 8px;
  width: 100%;
  resize: none;
  outline: none;
`;

const TextInput = forwardRef(
  ({ innerRef, type, name, value, autoComplete, ...remainProps }, ref) => (
    <InputField
      innerRef={ref}
      type={type}
      name={name}
      value={value}
      autoComplete={autoComplete}
      {...remainProps}
    />
  )
);

TextInput.propTypes = {
  type: string,
  name: string.isRequired, // eslint-disable-line react/no-typos
  value: string,
  autoComplete: string,
};

TextInput.defaultProps = {
  type: 'text',
  value: '',
  // autocomplete=off is ignored on non-login INPUT elements
  // https://bugs.chromium.org/p/chromium/issues/detail?id=468153#c164
  autoComplete: 'new-password',
};

export default TextInput;
