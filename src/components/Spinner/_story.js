import React from 'react';
import { storiesOf } from '@storybook/react';

import Spinner from './index';

storiesOf('Spinner', module)
  .add('Default', () => (
    <div>
      <Spinner /> <span>Hello</span>
    </div>
  ))
  .add('Big', () => <Spinner size="large" />)
  .add('Color', () => <Spinner color="#d8534f" size="large" />)
  .add('Dark BG', () => (
    <div style={{ background: '#303030', padding: '100px' }}>
      <Spinner color="#ffffff" size="large" />
    </div>
  ));
