import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from './index';

// TODO: story
/* eslint-disable */
class Wrapper extends Component {
  render() {
    return (
      <div>
        <Dropdown />
      </div>
    );
  }
}

storiesOf('Dropdown', module).add('Basic', () => <Wrapper />);
