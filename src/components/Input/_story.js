import React from 'react';
import { storiesOf } from '@storybook/react';
import AnimatedInput from './index';

// const ref = React.createRef();

// TODO: Clear it up & add withInfo
storiesOf('Input', module).add('Basic', () => (
  <div style={{ padding: '20px' }}>
    <AnimatedInput
      ref={node => console.log('node', node)}
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
    <AnimatedInput
      type="text"
      placeholder="InputWithAutoFocus"
      name="inputWithAutoFocus"
      value=""
      autoComplete="off"
      withAutoFocus
    />
    <br />
    <AnimatedInput
      type="text"
      placeholder="InputWithOnClickSelect"
      name="inputWithOnClickSelect"
      value=""
      autoComplete="off"
      withOnClickSelect
    />
    <br />
    <AnimatedInput
      type="text"
      placeholder="InputWithOnClickToEnd"
      name="inputWithOnClickToEnd"
      value=""
      autoComplete="off"
      withOnClickToEnd
    />
  </div>
));
