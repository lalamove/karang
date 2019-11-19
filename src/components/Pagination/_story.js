import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Pagination from './index';
import BaseApp from '../BaseApp';

const Wrapper = () => (
  <div dir={boolean('Right-To-Left', false) ? 'rtl' : 'ltr'}>
    <BaseApp rtl={boolean('Right-To-Left', false)}>
      <h4>Basic</h4>
      <Pagination />
      <h4>With custom description</h4>
      <Pagination description="{{fromIndex}}至{{toIndex}}，{{total}}條項目" />
      <h4>With text buttons</h4>
      <Pagination showLabel />
      <h4>With custom text buttons</h4>
      <Pagination prevLabel="Blah" nextLabel="Lala" showLabel />
    </BaseApp>
  </div>
);

storiesOf('Pagination', module).add('Basic', () => <Wrapper />);
