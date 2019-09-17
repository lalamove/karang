import { string } from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { mineShaft, nobel, primary } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const TextAreaComp = styled.textarea`
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

TextAreaComp.propTypes = {
  label: string,
  name: string,
};

TextAreaComp.defaultProps = {
  label: null,
  name: null,
};

export default TextAreaComp;
