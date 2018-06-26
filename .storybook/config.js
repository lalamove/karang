import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
`;

const Decorator = (storyFn) => (
  <Container>
    { storyFn() }
  </Container>
);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src/', true, /_story\.jsx?$/));
}

addDecorator(Decorator);
configure(loadStories, module);

