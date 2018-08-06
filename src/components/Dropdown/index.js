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
    currentDepthLevel: 0,
    selectedIds: [],
    listCounts: [this.props.items.length],
  };

  handleCurrentDepthLevel = depthLevel => {
    const { currentDepthLevel } = this.state;
    if (currentDepthLevel === depthLevel) return;
    this.setState({ currentDepthLevel: depthLevel });
  };

  handleSelectedIds = (id, depthLevel) => {
    const { selectedIds } = this.state;
    if (selectedIds[depthLevel] === id && selectedIds.length === depthLevel + 1)
      return;
    const tempArray = [...selectedIds];
    tempArray[depthLevel] = id;
    const updatedArray = tempArray.slice(0, depthLevel + 1);
    this.setState({ selectedIds: updatedArray });
  };

  handleListCounts = (count, depthLevel) => {
    const { listCounts } = this.state;
    if (
      listCounts[depthLevel] === count &&
      listCounts.length === depthLevel + 1
    )
      return;
    const tempArray = [...listCounts];
    tempArray[depthLevel] = count;
    const updatedArray = tempArray.slice(0, depthLevel + 1);
    console.log('handleListCounts');
    console.log(count, depthLevel);
    console.log('listCounts', updatedArray);
    this.setState({ listCounts: updatedArray });
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

  // override method defined in Downshift to support nested drop-down
  moveHighlightedIndex = (setHighlightedIndex, moveAmount = 1) => {
    const { selectedIds, currentDepthLevel, listCounts } = this.state;
    // 1. get highlightedIndex
    const baseId = selectedIds[currentDepthLevel] || '0_-1';
    // 2. get count of current list
    const count = listCounts[currentDepthLevel];
    const lastIndex = count - 1;
    // 3. new index
    const [, , baseIndex] = validIndex.exec(baseId);
    let newIndex = parseInt(baseIndex, 10) + moveAmount;
    if (newIndex < 0) {
      newIndex = lastIndex;
    } else if (newIndex > lastIndex) {
      newIndex = 0;
    }
    // 4. set new state
    const newId = `${currentDepthLevel}_${newIndex}`;
    setHighlightedIndex(newId);
    this.handleSelectedIds(newId, currentDepthLevel);
  };

  handleArrowRight = setHighlightedIndex => {
    const { selectedIds, currentDepthLevel, listCounts } = this.state;
    // 1. get highlightedIndex
    const baseId = selectedIds[currentDepthLevel];
    if (baseId === null) return;
    // 2. prevent if listCounts.length === currentDepthLevel
    if (listCounts.length === currentDepthLevel + 1) return;
    // 3. new index
    const newDepthLevel = currentDepthLevel + 1;
    const newId = `${newDepthLevel}_0`;
    setHighlightedIndex(newId);
    this.handleSelectedIds(newId, newDepthLevel);
    this.handleCurrentDepthLevel(newDepthLevel);
  };

  handleKeyDown = (event, setHighlightedIndex) => {
    switch (event.key) {
      case 'ArrowDown':
        // eslint-disable-next-line no-param-reassign
        event.nativeEvent.preventDownshiftDefault = true;
        this.moveHighlightedIndex(setHighlightedIndex, 1);
        break;
      case 'ArrowUp':
        // eslint-disable-next-line no-param-reassign
        event.nativeEvent.preventDownshiftDefault = true;
        this.moveHighlightedIndex(setHighlightedIndex, -1);
        break;
      case 'ArrowRight':
        // trigger nested menu option
        this.handleArrowRight(setHighlightedIndex);
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
                  this.handleKeyDown(event, setHighlightedIndex),
              })}
            />
            {isOpen && (
              <DropdownList
                ref={this.child}
                items={items}
                highlightedIndex={highlightedIndex}
                getItemProps={getItemProps}
                getMenuProps={getMenuProps}
                selectedIds={this.state.selectedIds}
                handleCurrentDepthLevel={this.handleCurrentDepthLevel}
                handleSelectedIds={this.handleSelectedIds}
                handleListCounts={this.handleListCounts}
              />
            )}
          </div>
        )}
      </Downshift>
    );
  }
}

export default Dropdown;
