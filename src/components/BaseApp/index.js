import { Component } from 'react';
import { node } from 'prop-types';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import { primary } from 'styles/colors';
import { primaryFonts, fontSize } from 'styles/fonts';

/* eslint-disable no-unused-expressions */
injectGlobal`
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

// TODO: Should allow configuration parameters passed as props
export default class BaseApp extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}
