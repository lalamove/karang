import React from 'react';
import { storiesOf } from '@storybook/react';
import AnimatedInput from './index';
import withAutoFocus from '../../hoc/withAutoFocus';
import withOnClickSelect from '../../hoc/withOnClickSelect';
import withOnClickToEnd from '../../hoc/withOnClickToEnd';

const InputWithAutoFocus = withAutoFocus(AnimatedInput, 'innerRef');
const InputWithOnClickSelect = withOnClickSelect(AnimatedInput, 'innerRef');
const InputWithOnClickToEnd = withOnClickToEnd(AnimatedInput, 'innerRef');

import styled from 'styled-components';

const SCInput = styled(AnimatedInput)`
  background: red;
`;

// TODO: Clear it up & add withInfo
storiesOf('Input', module).add('Basic', () => (
  <div style={{ padding: '20px' }}>
    <SCInput
      innerRef={node => console.log('1', node)}
      type="text"
      placeholder="Input"
      name="username"
      value=""
      autoComplete="off"
    />
    <br />
    <AnimatedInput
      type="password"
      placeholder="Password"
      name="password"
      value=""
    />
    <br />
    <InputWithAutoFocus
      type="text"
      placeholder="InputWithAutoFocus"
      name="inputWithAutoFocus"
      value=""
      autoComplete="off"
    />
    <br />
    <InputWithOnClickSelect
      type="text"
      placeholder="InputWithOnClickSelect"
      name="inputWithOnClickSelect"
      value=""
      autoComplete="off"
    />
    <br />
    <InputWithOnClickToEnd
      type="text"
      placeholder="InputWithOnClickToEnd"
      name="inputWithOnClickToEnd"
      value=""
      autoComplete="off"
    />
  </div>
));
