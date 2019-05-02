import React, { Component } from 'react';
import { func, node, oneOf, string } from 'prop-types';

import noop from 'utils/noop';
import Tab from './Tab';
import { TabBarContainer } from '../style';

const tabType = <Tab name="name" />.type;

/* eslint-disable react/prefer-stateless-function */
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
    /** Variant of children, `default` renders buttons with bottom border, `rounded` renders rounded buttons */
    variant: oneOf(['default', 'rounded']),
  };

  static defaultProps = {
    children: null,
    activeTab: null,
    onTabChange: noop,
    variant: 'default',
  };

  render() {
    const { activeTab, children, onTabChange, variant, ...rest } = this.props;
    const filteredChildren = React.Children.toArray(children).filter(c => c);
    return React.Children.count(filteredChildren) ? (
      <TabBarContainer role="tablist" {...rest}>
        {React.Children.map(filteredChildren, child =>
          child.type === Tab || child.type === tabType // https://github.com/gaearon/react-hot-loader#checking-element-types
            ? React.cloneElement(child, {
                onTabChange,
                selected: activeTab === child.props.name,
                variant,
              })
            : child
        )}
      </TabBarContainer>
    ) : null;
  }
}

export default TabBar;
