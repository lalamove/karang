import { Component } from 'react';
import { node } from 'prop-types';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import { orange } from 'styles/colors';
import { fontSize } from 'styles/fonts';

injectGlobal`
  ${normalize()}

  html, body {
    height: 100%;
    font-size: ${fontSize.regular};
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
export default class BaseApp extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  render() {
    return this.props.children;
  }
}
