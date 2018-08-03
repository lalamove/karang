import React, { Component } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import Downshift from 'downshift';

import DropdownButton from './components/DropdownButton';
import DropdownList from './components/DropdownList';
import noop from 'utils/noop';

class Dropdown extends Component {
  static propTypes = {
    items: arrayOf(shape({})).isRequired,
    selectedItem: shape({}),
    onChange: func,
    defaultLabel: string,
  };

  static defaultProps = {
    selectedItem: null,
    onChange: noop,
    defaultLabel: 'Options',
  };

  handleChange = selectedOption => {
    // TODO: Remove this
    this.props.onChange(selectedOption);
  };

  stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        if (changes.selectedItem.options) return state;
        return changes;
      default:
        return changes;
    }
  };

  // TODO: Accessibility
  // tab-index
  // keyboard nav
  // direction of submenu
  // https://react-select.com/props#select-props

  render() {
    const { items, selectedItem, defaultLabel } = this.props;
    return (
      <Downshift
        onChange={this.handleChange}
        itemToString={item => (item ? item.value : '')}
        stateReducer={this.stateReducer}
        // TODO: pass remain props here
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem: dsSelectedItem,
        }) => (
          <div>
            <DropdownButton
              icon={
                (selectedItem && selectedItem.icon) ||
                (dsSelectedItem && dsSelectedItem.icon)
              }
              label={
                (selectedItem && selectedItem.label) ||
                (dsSelectedItem && dsSelectedItem.label) ||
                defaultLabel
              }
              {...getToggleButtonProps()}
            />
            {isOpen && (
              <DropdownList
                items={items}
                // highlightedIndex={highlightedIndex}
                getItemProps={getItemProps}
              />
            )}
          </div>
        )}
      </Downshift>
    );
  }
}

export default Dropdown;
