import React, { forwardRef } from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import { orange, black } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';

const InputField = styled.input`
  border: none;
  caret-color: ${orange};
  color: ${black};
  font-size: 14px;
  font-family: ${primaryFonts};
  line-height: 20px;
  outline: none;
  margin: 14px 8px;
  resize: none;
`;

const TextInput = forwardRef(
  (
    {
      innerRef,
      type,
      name,
      value,
      autoComplete,
      onClick,
      onFocus,
      onBlur,
      onChange,
      ...remainProps
    },
    ref
  ) => (
    <InputField
      innerRef={ref}
      type={type}
      name={name}
      value={value}
      autoComplete={autoComplete}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      {...remainProps}
    />
  )
);

TextInput.propTypes = {
  type: string,
  name: string.isRequired, // eslint-disable-line react/no-typos
  value: string,
  autoComplete: string,
  innerRef: func,
  onClick: func,
  onFocus: func,
  onBlur: func,
  onChange: func,
};

TextInput.defaultProps = {
  type: 'text',
  value: '',
  // autocomplete=off is ignored on non-login INPUT elements
  // https://bugs.chromium.org/p/chromium/issues/detail?id=468153#c164
  autoComplete: 'new-password',
  innerRef: null,
  onClick: noop,
  onFocus: noop,
  onBlur: noop,
  onChange: noop,
};

export default TextInput;
