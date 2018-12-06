import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Tab, { TabBar } from './index';

class Wrapper extends Component {
  state = {
    activeTab: 'first',
  };

  onTabChange = (tabName: string) => {
    this.setState({ activeTab: tabName });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <TabBar activeTab={activeTab} onTabChange={this.onTabChange}>
        <Tab name="first">First section</Tab>
        <Tab name="second">Section section</Tab>
        <Tab name="third">Third section</Tab>
      </TabBar>
    );
  }
}

storiesOf('Tabs', module).add('Basic', () => <Wrapper />);
