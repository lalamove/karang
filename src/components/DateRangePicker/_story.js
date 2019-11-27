import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import DateRangePicker from './index';
import BaseApp from '../BaseApp';

storiesOf('DateRangePicker', module).add('DateRangePicker', () => {
  const rtl = boolean('Right-to-Left', false);
  return (
    <div dir={rtl ? 'rtl' : 'ltr'}>
      <BaseApp rtl={rtl}>
        <DateRangePicker isRTL={rtl} />
      </BaseApp>
    </div>
  );
});
