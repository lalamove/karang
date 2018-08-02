import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import CountdownBar from './index';

storiesOf('CountdownBar', module).add(
  'Basic',
  withInfo({})(() => <CountdownBar label="Countdown" duration="5000ms" />)
);
