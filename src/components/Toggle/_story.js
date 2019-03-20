import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import Toggle from './index';

storiesOf('Toggle', module).add('Basic', () => (
  <Toggle disabled={boolean('disabled', false)} title="A toggle switch" />
));
