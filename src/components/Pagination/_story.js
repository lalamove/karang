import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './index';

// TODO: will have state later.
// eslint-disable-next-line react/prefer-stateless-function
class Wrapper extends Component {
  render() {
    return <Pagination current={1} pageSize={20} total={36} />;
  }
}

storiesOf('Pagination', module).add('Basic', () => <Wrapper />);
