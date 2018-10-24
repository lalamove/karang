import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import styled, { injectGlobal } from 'styled-components';
import { fontSize } from 'styles/fonts';

injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700);
  html, body {
    font-family: "Noto Sans", sans-serif;
    font-size: ${fontSize.regular};
  }
`;

import App from 'components/BaseApp';

const Container = styled.div`
  padding: 30px;
`;

const Decorator = storyFn => (
  <App>
    <Container>{storyFn()}</Container>
  </App>
);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src/', true, /_story\.jsx?$/));
}

addDecorator((story, context) =>
  withInfo({
    header: false,
  })(story)(context)
);
addDecorator(withKnobs);
addDecorator(Decorator);

configure(loadStories, module);
