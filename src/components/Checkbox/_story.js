import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import Checkbox from './index';

storiesOf('Checkbox', module).add('Basic', () => (
  <Checkbox label="Checkbox" disabled={boolean('disabled', false)} />
));
