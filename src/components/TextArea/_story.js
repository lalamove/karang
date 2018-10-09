import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs/react';
import TextArea from './index';

const Wrapper = () => (
  <TextArea
    placeholder={text('placeholder', 'Placeholder')}
    maxLength={number('maxLength', 140)}
    style={{ width: '300px', height: '96px' }}
    allowExceed={boolean('allowExceed', false)}
  />
);

storiesOf('TextArea', module).add('Basic', () => <Wrapper />);
