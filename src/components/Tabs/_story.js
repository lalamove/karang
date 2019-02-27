import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Tab, { TabBar } from './index';

class Wrapper extends Component {
  state = {
    activeTab: 'first',
  };

  onTabChange = tabName => {
    this.setState({ activeTab: tabName });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div>
        <h4>Default</h4>
        <TabBar activeTab={activeTab} onTabChange={this.onTabChange}>
          <Tab name="first">First section</Tab>
          <Tab name="second">Second section</Tab>
          <Tab name="third">Third section</Tab>
        </TabBar>
        <h4>Rounded</h4>
        <TabBar
          activeTab={activeTab}
          onTabChange={this.onTabChange}
          variant="rounded"
        >
          <Tab name="first">First section</Tab>
          <Tab name="second">Second section</Tab>
          <Tab name="third">Third section</Tab>
        </TabBar>
      </div>
    );
  }
}

storiesOf('Tabs', module).add('Basic', () => <Wrapper />);
