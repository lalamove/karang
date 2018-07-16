import React from 'react';
import { storiesOf } from '@storybook/react';
import AnimatedInput from './index';

const ref = React.createRef();

// TODO: Clear it up & add withInfo
storiesOf('Input', module).add('Basic', () => (
  <div style={{ padding: '20px' }}>
    <AnimatedInput
      ref={node => console.log('1', node)}
      // ref={ref}
      type="text"
      placeholder="InputWithAutoFocus"
      name="inputWithAutoFocus"
      value=""
      autoComplete="off"
      withOnClickToEnd
    />
  </div>
));
