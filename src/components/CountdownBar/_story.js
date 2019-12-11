import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import CountdownBar from './index';
import BaseApp from '../BaseApp';

storiesOf('CountdownBar', module).add('Basic', () => (
  <BaseApp rtl={boolean('Right-to-left', false)}>
    <CountdownBar
      label="Countdown"
      duration="5000ms"
      title="Counting down..."
    />
  </BaseApp>
));
