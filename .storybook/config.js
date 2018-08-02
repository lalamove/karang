import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import styled from 'styled-components';

import App from 'components/BaseApp';

const Container = styled.div`
  padding: 30px;
`;

const Decorator = (storyFn) => (
  <App>
    <Container>
      { storyFn() }
    </Container>
  </App>
);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src/', true, /_story\.jsx?$/));
}

addDecorator(Decorator);
configure(loadStories, module);
