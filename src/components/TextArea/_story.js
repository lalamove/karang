import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import TextArea from './index';
import BaseApp from '../BaseApp';

const Wrapper = () => (
  <div dir={boolean('Right-to-Left', false) ? 'rtl' : 'ltr'}>
    <BaseApp rtl={boolean('Right-to-Left', false)}>
      <TextArea
        placeholder={text('placeholder', 'Placeholder')}
        maxLength={number('maxLength', 140)}
        style={{ width: '300px', height: '96px' }}
        allowExceed={boolean('allowExceed', false)}
      />
    </BaseApp>
  </div>
);

storiesOf('TextArea', module).add('Basic', () => <Wrapper />);
