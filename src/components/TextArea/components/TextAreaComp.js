import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import styled, { css } from 'styled-components';

import { orange, black, silver } from 'styles/colors';
import { fontSize } from 'styles/fonts';

const SCTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  color: ${black};
  font-family: inherit;
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

const TextAreaComp = forwardRef(
  ({ innerRef, name, label, ...remainProps }, ref) => (
    <SCTextArea innerRef={ref} name={name} label={label} {...remainProps} />
  )
);

TextAreaComp.propTypes = {
  label: string,
  name: string,
};

TextAreaComp.defaultProps = {
  label: null,
  name: null,
};

export default TextAreaComp;
