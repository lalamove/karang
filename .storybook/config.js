import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import styled, { createGlobalStyle } from 'styled-components';

import App from 'components/BaseApp';

const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700);
`;

const Container = styled.div`
  padding: 30px;
`;

const Decorator = storyFn => (
  <App>
    <GlobalStyle />
    <Container>{storyFn()}</Container>
  </App>
);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src/', true, /_story\.jsx?$/));
}

// addDecorator((story, context) =>
//   withInfo({
//     header: false,
//   })(story)(context)
// );
// addDecorator(
//   withInfo({
//     header: false,
//   })
// );
addDecorator(withKnobs);
addDecorator(Decorator);

configure(loadStories, module);
