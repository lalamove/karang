import React, { Component } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import Downshift from 'downshift';

import DropdownButton from './components/DropdownButton';
import DropdownList from './components/DropdownList';
import noop from 'utils/noop';

const validIndex = /(\d+)_(-?\d+)/;

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

  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  state = {
    depthLevel: 0,
    itemsCount: this.props.items.length, // count of current (nested) drop-down list items
    highlightedId: null, // id of current highlighted item (outer drop-down list)
  };

  // update current (nested) drop-down list items count
  setItemsCount = (depthLevel, itemsCount, highlightedId) => {
    if (
      depthLevel !== this.state.depthLevel &&
      itemsCount !== this.state.itemsCount &&
      highlightedId !== this.state.highlightedId
    ) {
      this.setState({ depthLevel, itemsCount, highlightedId });
    }
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

  // override method defined in Downshift to support nested drop-down
  moveHighlightedIndex = (
    currentHighlightedIndex,
    setHighlightedIndex,
    moveAmount = 1
  ) => {
    // 1. get highlightedIndex
    let baseId = this.state.highlightedId || currentHighlightedIndex;
    if (baseId === null) {
      baseId = '0_-1';
    }
    // 2. get count of current list
    const count = this.state.itemsCount;
    const lastIndex = count - 1;
    // 3. new index
    const [, depthLevel, baseIndex] = validIndex.exec(baseId);
    let newIndex = parseInt(baseIndex, 10) + moveAmount;
    if (newIndex < 0) {
      newIndex = lastIndex;
    } else if (newIndex > lastIndex) {
      newIndex = 0;
    }
    const newId = `${depthLevel}_${newIndex}`;
    setHighlightedIndex(newId);
    this.setState({ highlightedId: newId });
    this.triggerNestedMenu(newId);
  };

  triggerNestedMenu = highlightedIndex => {
    const baseId = highlightedIndex;
    if (baseId === null) return;
    const [, depthLevel] = validIndex.exec(baseId);
    this.child.current.handleSelectedId(baseId, depthLevel);
  };

  handleKeyDown = (event, highlightedIndex, setHighlightedIndex) => {
    // console.log(event.key);
    switch (event.key) {
      case 'ArrowDown':
        // eslint-disable-next-line no-param-reassign
        event.nativeEvent.preventDownshiftDefault = true;
        this.moveHighlightedIndex(highlightedIndex, setHighlightedIndex, 1);
        break;
      case 'ArrowUp':
        // eslint-disable-next-line no-param-reassign
        event.nativeEvent.preventDownshiftDefault = true;
        this.moveHighlightedIndex(highlightedIndex, setHighlightedIndex, -1);
        break;
      case 'ArrowRight':
        // trigger nested menu option
        break;
      case 'ArrowLeft':
        // close sub menu
        break;
      case 'Enter':
        break;
      default:
        break;
    }
  };

  render() {
    const { items, selectedItem, defaultLabel, onChange } = this.props;
    return (
      <Downshift
        onChange={onChange}
        itemToString={item => (item ? item.value : '')}
        stateReducer={this.stateReducer}
        // TODO: pass remain props here
      >
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
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
                onKeyDown: event =>
                  this.handleKeyDown(
                    event,
                    highlightedIndex,
                    setHighlightedIndex
                  ),
              })}
            />
            {isOpen && (
              <DropdownList
                ref={this.child}
                items={items}
                highlightedIndex={highlightedIndex}
                getItemProps={getItemProps}
                getMenuProps={getMenuProps}
                depthLevel={this.state.depthLevel}
                itemsCount={this.state.itemsCount}
                onItemFocus={this.setItemsCount}
                setHighlightedIndex={setHighlightedIndex}
              />
            )}
          </div>
        )}
      </Downshift>
    );
  }
}

export default Dropdown;
