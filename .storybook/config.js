import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import styled from 'styled-components';

import App from 'components/App';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
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

