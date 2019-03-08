import React from 'react';
import { storiesOf } from '@storybook/react';

import Spinner from './index';

storiesOf('Spinner', module)
  .add('Default', () => <Spinner />)
  .add('Large', () => <Spinner size="large" />)
  .add('Color', () => <Spinner color="#2FA0ED" size="large" />)
  .add('Dark background', () => (
    <div style={{ background: '#303030', padding: '100px' }}>
      <Spinner color="#ffffff" size="large" />
    </div>
  ));
