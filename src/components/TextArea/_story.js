import React from 'react';
import { storiesOf } from '@storybook/react';
// TODO
// import { text, boolean, number } from '@storybook/addon-knobs/react';
import TextArea from './index';

storiesOf('TextArea', module).add('TextArea', () => (
  <TextArea
    placeholder="testing"
    maxLength={140}
    style={{ width: '300px', height: '96px' }}
  />
));
