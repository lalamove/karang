import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import styled, { css } from 'styled-components';

import { orange, black } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const SCTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  color: ${black};
  font-family: ${primaryFonts};
  caret-color: ${orange};
  font-size: ${fontSize.regular};
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

const TextArea = forwardRef(
  ({ innerRef, name, label, ...remainProps }, ref) => (
    <SCTextArea innerRef={ref} name={name} label={label} {...remainProps} />
  )
);

TextArea.propTypes = {
  label: string,
  name: string.isRequired, // eslint-disable-line react/no-typos
};

TextArea.defaultProps = {
  label: null,
};

export default TextArea;
