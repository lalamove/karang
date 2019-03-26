import React, { forwardRef } from 'react';
import { string, oneOf, object, func } from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { mineShaft, nobel, primary } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const SCTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 0;
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

const TextAreaComp = forwardRef(
  ({ innerRef, name, label, ...remainProps }, ref) => (
    <SCTextArea innerRef={ref} name={name} label={label} {...remainProps} />
  )
);

TextAreaComp.propTypes = {
  innerRef: oneOf([object, func, string]),
  label: string,
  name: string,
};

TextAreaComp.defaultProps = {
  innerRef: null,
  label: null,
  name: null,
};

export default TextAreaComp;
