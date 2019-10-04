import { string } from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { mineShaft, nobel, primary } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

const TextInput = styled.input`
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

  &::-ms-reveal {
    display: none;
  }

  ${({ label }) =>
    label &&
    css`
      &::placeholder {
        color: transparent;
      }
    `};
`;

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
