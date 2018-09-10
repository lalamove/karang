import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorMessage from './index';

storiesOf('ErrorMessage', module).add('Basic', () => (
  <ErrorMessage error="Sample error message" />
));
