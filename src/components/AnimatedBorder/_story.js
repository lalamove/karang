import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import AnimatedBorder from './index';
import styled from 'styled-components';

const MockChildren = styled.div`
  width: 300px;
  height: 40px;
`;

const Wrapper = () => (
  <Fragment>
    <h4>Basic</h4>
    <AnimatedBorder>
      <MockChildren />
    </AnimatedBorder>
    <h4>Basic with label</h4>
    <AnimatedBorder label="Label">
      <MockChildren />
    </AnimatedBorder>
    <h4>Basic with label and focused</h4>
    <AnimatedBorder label="Label" focused>
      <MockChildren />
    </AnimatedBorder>
    <h4>Basic with label and dirty</h4>
    <AnimatedBorder label="Label" dirty>
      <MockChildren />
    </AnimatedBorder>
    <h4>Basic with label and error</h4>
    <AnimatedBorder label="Label" error>
      <MockChildren />
    </AnimatedBorder>
  </Fragment>
);

storiesOf('AnimatedBorder', module).add('Basic', () => <Wrapper />);
