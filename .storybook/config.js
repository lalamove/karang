import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

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
