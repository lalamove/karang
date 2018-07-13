import React from 'react';
import { storiesOf } from '@storybook/react';
import AnimatedInput from './index';
import withAutoFocus from '../../hoc/withAutoFocus';
// import withOnClickSelect from '../../hoc/withOnClickSelect';
// import withOnClickToEnd from '../../hoc/withOnClickToEnd';

// const InputWithAutoFocus = withAutoFocus(AnimatedInput, 'innerRef');
const InputWithAutoFocus = withAutoFocus(AnimatedInput);
// const InputWithOnClickSelect = withOnClickSelect(AnimatedInput, 'innerRef');
// const InputWithOnClickToEnd = withOnClickToEnd(AnimatedInput, 'innerRef');

// import styled from 'styled-components';

// const SCInput = styled(AnimatedInput)`
//   background: red;
// `;
const ref = React.createRef();

// TODO: Clear it up & add withInfo
storiesOf('Input', module).add('Basic', () => (
  <div style={{ padding: '20px' }}>
    <InputWithAutoFocus
      ref={ref}
      type="text"
      placeholder="InputWithAutoFocus"
      name="inputWithAutoFocus"
      value=""
      autoComplete="off"
    />
  </div>
));
