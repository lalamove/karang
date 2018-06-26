import { Component } from 'react';
import { node } from 'prop-types';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import { orange } from 'styles/colors';
import { baseFontSize } from 'styles/scales';
import { primaryFonts } from 'styles/fonts';

injectGlobal`
  ${normalize()}
  
  html, body {
    height: 100%;
    font-family: ${primaryFonts};
    font-size: ${baseFontSize}px;
    line-height: 1.143;
  }

  a {
    color: ${orange};
    text-decoration: none;

    &:active {
      text-decoration: none;
    }
  }
`;

// TODO: Should allow configuration parameters passed as props
export default class App extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  render() {
    return this.props.children;
  }
}
