import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { primary } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';
import { node } from 'prop-types';

// TODO: Should allow configuration parameters passed as props
const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html, body {
    height: 100%;
    font-family: ${primaryFonts};
    font-size: ${fontSize.regular};
    line-height: 1.143;
  }

  a {
    color: ${primary.main};
    text-decoration: none;

    &:active {
      text-decoration: none;
    }
  }
`;

const BaseApp = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

BaseApp.propTypes = {
  /** @ignore */
  children: node.isRequired,
};

export default BaseApp;
