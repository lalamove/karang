import React from 'react';
import { storiesOf } from '@storybook/react';

import CountdownBar from './index';

storiesOf('CountdownBar', module).add('Basic', () => (
  <CountdownBar label="Countdown" duration="5000ms" title="Counting down..." />
));
