import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './index';

// TODO: will have state later.
// eslint-disable-next-line react/prefer-stateless-function
class Wrapper extends Component {
  render() {
    return <Pagination />;
  }
}

storiesOf('Pagination', module).add('Basic', () => <Wrapper />);
