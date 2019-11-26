import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import DateRangePicker from './index';
import BaseApp from '../BaseApp';

storiesOf('DateRangePicker', module).add('DateRangePicker', () => (
  <div dir={boolean('Right-to-Left', false) ? 'rtl' : 'ltr'}>
    <BaseApp rtl={boolean('Right-to-Left', false)}>
      <DateRangePicker isRTL={boolean('Right-to-Left', false)} />
    </BaseApp>
  </div>
));
