import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs/react';
import TextArea from './index';

storiesOf('TextArea', module).add('TextArea', () => (
  <TextArea
    placeholder={text('placeholder', 'test placeholder')}
    maxLength={number('limit', 140)}
    name="comments"
    style={{ width: '300px', height: '96px' }}
    error={text('error', ' Error Message')}
    disableForceLimit={boolean('disableForceLimit', false)}
  />
));

// TODO: add other props
