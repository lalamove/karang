import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './index';

const Wrapper = () => (
  <Fragment>
    <h4>Basic</h4>
    <Pagination />
    <h4>With custom description</h4>
    <Pagination description="Custom description here" />
    <h4>With text buttons</h4>
    <Pagination showLabel />
    <h4>With custom text buttons</h4>
    <Pagination prevLabel="Blah" nextLabel="Lala" showLabel />
  </Fragment>
);

storiesOf('Pagination', module).add('Basic', () => <Wrapper />);
