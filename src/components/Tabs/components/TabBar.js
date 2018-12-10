import React, { Component } from 'react';
import { func, node, string } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';
import Tab from './Tab';

const TabBarContainer = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
`;

class TabBar extends Component {
  static propTypes = {
    /** Name of the active tab */
    activeTab: string,
    /** Children elements */
    children: node,
    /**
     * Callback when a tab is clicked
     *
     * @param {string} tabName Name of the tab clicked
     */
    onTabChange: func,
  };

  static defaultProps = {
    children: null,
    activeTab: null,
    onTabChange: noop,
  };

  render() {
    const { activeTab, children, onTabChange } = this.props;

    return React.Children.count(children) ? (
      <TabBarContainer>
        {React.Children.map(
          children,
          child =>
            child.type === Tab
              ? React.cloneElement(child, {
                  onTabChange,
                  selected: activeTab === child.props.name,
                })
              : child
        )}
      </TabBarContainer>
    ) : null;
  }
}

export default TabBar;
