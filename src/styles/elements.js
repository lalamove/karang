import { injectGlobal } from 'styled-components';
import { orange } from './colors';
import { baseFontSize } from './scales';
import { primaryFonts } from './fonts';

injectGlobal`
  html, body {
    height: 100%;
    font-family: ${primaryFonts};
    font-size: ${baseFontSize}px;
    line-height: 1.143;
  }

  a {
    color: ${orange};
    text-decoration: none;

    &:hover,
    &:focus {
      /* text-decoration: underline; */
    }

    &:active {
      text-decoration: none;
    }
  }
`;
