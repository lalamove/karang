import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs/react';
import Heading, { HeadingGroup } from './index';

storiesOf('Heading', module).add('Default', () => (
  <Heading
    htmlTag="h1"
    size={select('size', { default: 'default', large: 'large' }, 'default')}
  >
    {text('text', 'This is a Heading')}
  </Heading>
));
