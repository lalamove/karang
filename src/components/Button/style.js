import styled from 'styled-components';

import colors from 'styles/colors';
import { baseFontSize } from 'styles/scales';
import { primaryFonts } from 'styles/fonts';

const fontFamily = primaryFonts;
const lightGray = colors.offWhite; // eslint-disable-line

const Base = styled.button`
  /* structure */
  appearance: none;
  display: block;
  padding: 0.5em 1em;

  /* style */
  border: 1px currentColor solid;
  background-color: transparent;
  border-radius: 2px;
  font-family: ${fontFamily};
  font-size: ${baseFontSize}px;
  font-weight: 400;
  line-height: 1;
  cursor: pointer;
  outline: 0;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:hover:enabled,
  &:focus:enabled {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);
  }

  &:active:enabled {
    box-shadow: none;
  }
`;

export default Base;
