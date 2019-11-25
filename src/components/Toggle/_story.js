import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Toggle from './index';
import BaseApp from '../BaseApp';

storiesOf('Toggle', module).add('Basic', () => (
  <div dir={boolean('Right-to-Left', false) ? 'rtl' : 'ltr'}>
    <BaseApp rtl={boolean('Right-to-Left', false)}>
      <Toggle disabled={boolean('disabled', false)} title="A toggle switch" />
    </BaseApp>
  </div>
));
