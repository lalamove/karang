import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';

import { primary } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';
import { node, bool } from 'prop-types';

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

const BaseApp = ({ children, rtl }) => {
  const theme = {
    rtl,
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

BaseApp.propTypes = {
  /** @ignore */
  children: node.isRequired,

  /** to support rtl theme */
  rtl: bool,
};

BaseApp.defaultProps = {
  rtl: false,
};

export default BaseApp;
