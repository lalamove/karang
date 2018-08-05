import React, { Component } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
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

  state = {
    depthLevel: 0,
    itemsCount: this.props.items.length, // count of current (nested) drop-down list items
    highlightedId: null, // id of current highlighted item (outer drop-down list)
  };

  handleChange = selectedOption => {
    // TODO: Remove this
    this.props.onChange(selectedOption);
  };

  stateReducer = (state, changes) => {
    // console.log(changes.type);
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        if (changes.selectedItem.options) return state;
        return changes;
      default:
        return changes;
    }
  };

  // update current (nested) drop-down list items count
  setItemsCount = (depthLevel, itemsCount, highlightedId) => {
    if (
      depthLevel !== this.state.depthLevel &&
      itemsCount !== this.state.itemsCount &&
      highlightedId !== this.state.highlightedId
    ) {
      console.log('setState itemsCount', itemsCount);
      console.log('setState depthLevel', depthLevel);
      console.log('setState highlightedId', highlightedId);
      this.setState({ depthLevel, itemsCount, highlightedId });
    }
  };

  // override method defined in Downshift to support nested drop-down
  moveHighlightedIndex = (
    currentHighlightedIndex,
    setHighlightedIndex,
    moveAmount = 1
  ) => {
    const validIndex = /(\d+)_(-?\d+)/;
    console.log('currentHighlightedIndex', currentHighlightedIndex);
    // 1. get highlightedIndex
    let baseId = this.state.highlightedId || currentHighlightedIndex;
    console.log(this.state.highlightedId);
    console.log(currentHighlightedIndex);
    if (baseId === null) {
      baseId = '0_-1';
    }
    // 2. get count of current list
    const count = this.state.itemsCount;
    const lastIndex = count - 1;
    // 3. new pointer
    const [full, depthLevel, baseIndex] = validIndex.exec(baseId);
    console.log('depthLevel, baseIndex');
    console.log(full);
    console.log(depthLevel, baseIndex);
    let newIndex = parseInt(baseIndex, 10) + moveAmount;
    if (newIndex < 0) {
      // 5. if < 0, go to last index
      console.log('newIndex < 0');
      newIndex = lastIndex;
    } else if (newIndex > lastIndex) {
      console.log('newIndex > lastIndex');
      // 6. if > last index, go to 0
      newIndex = 0;
    }
    const newId = `${depthLevel}_${newIndex}`;
    console.log('newId', newId);
    setHighlightedIndex(newId);
    this.setState({ highlightedId: newId });
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
        // onStateChange={e => {
        //   console.log(e);
        // }}
        // TODO: pass remain props here
      >
        {({
          getInputProps,
          getItemProps,
          // getLabelProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
          // inputValue,
          highlightedIndex,
          selectedItem: dsSelectedItem,
          setHighlightedIndex,
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
              {...getInputProps({
                onKeyDown: event => {
                  switch (event.key) {
                    case 'ArrowDown':
                      event.nativeEvent.preventDownshiftDefault = true;
                      console.log('ArrowDown');
                      this.moveHighlightedIndex(
                        highlightedIndex,
                        setHighlightedIndex,
                        1
                      );
                      // todo: disable downshift method
                      break;
                    case 'ArrowUp':
                      event.nativeEvent.preventDownshiftDefault = true;
                      console.log('ArrowUp');
                      this.moveHighlightedIndex(
                        highlightedIndex,
                        setHighlightedIndex,
                        -1
                      );
                      break;
                    case 'Enter':
                      console.log('Enter');
                      break;
                    default:
                      // setHighlightedIndex('0_0');
                      // console.log(getItemCount());
                      break;
                  }
                },
              })}
            />
            {isOpen && (
              <DropdownList
                items={items}
                highlightedIndex={highlightedIndex}
                getItemProps={getItemProps}
                getMenuProps={getMenuProps}
                depthLevel={this.state.depthLevel}
                itemsCount={this.state.itemsCount}
                setItemsCount={this.setItemsCount}
              />
            )}
          </div>
        )}
      </Downshift>
    );
  }
}

export default Dropdown;
