import React, { Component } from 'react';
import { arrayOf, func, oneOf, shape, string, bool } from 'prop-types';
import Downshift from 'downshift';
import styled, { css } from 'styled-components';

import DropdownButton from './components/DropdownButton';
import DropdownList from './components/DropdownList';
import noop from 'utils/noop';

const validIndex = /(\d+)_(-?\d+)/;
let setHighlightedIndex;
let toggleMenu;

const Container = styled.div`
  position: relative;
  display: inline-block;
  ${({ block }) =>
    block &&
    css`
      display: block;
    `};
`;

class Dropdown extends Component {
  static propTypes = {
    block: bool,
    items: arrayOf(shape({})).isRequired,
    selectedItem: shape({}),
    onChange: func,
    onOuterClick: func,
    defaultLabel: string,
    direction: oneOf(['left', 'right']),
  };

  static defaultProps = {
    block: false,
    selectedItem: null,
    onChange: noop,
    onOuterClick: noop,
    defaultLabel: 'Options',
    direction: 'right',
  };

  state = {
    depthLevel: 0,
    highlightedIndexes: [],
    listCounts: [this.props.items.length],
  };

  // sync highlighted indexes in state and Downshift
  setHighlightedIndexes = (index, depthLevel) => {
    setHighlightedIndex(index); // method in Downshift
    this.handleHighlightedIndexes(index, depthLevel);
  };

  handleDepthLevel = level => {
    const { depthLevel } = this.state;
    if (depthLevel === level) return;
    this.setState({ depthLevel: level });
  };

  handleHighlightedIndexes = (index, depthLevel) => {
    const { highlightedIndexes } = this.state;
    const expectedCount = depthLevel + 1;
    if (
      highlightedIndexes[depthLevel] === index &&
      highlightedIndexes.length === expectedCount
    )
      return;
    const updatedArray = [...highlightedIndexes].slice(0, expectedCount);
    updatedArray[depthLevel] = index;
    this.setState({ highlightedIndexes: updatedArray });
  };

  handleListCounts = (count, depthLevel) => {
    const { listCounts } = this.state;
    const expectedCount = depthLevel + 1;
    if (listCounts[depthLevel] === count && listCounts.length === expectedCount)
      return;
    const updatedArray = [...listCounts].slice(0, expectedCount);
    updatedArray[depthLevel] = count;
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

  // override method defined in Downshift to support sub-options
  moveHighlightedIndex = (moveAmount = 1) => {
    const { highlightedIndexes, depthLevel, listCounts } = this.state;
    // get highlightedIndex in state
    const baseId = highlightedIndexes[depthLevel] || '0_-1';
    // get current list count
    const count = listCounts[depthLevel];
    const lastIndex = count - 1;
    // new index
    const [, , subIndex] = validIndex.exec(baseId);
    let updatedSubIndex = parseInt(subIndex, 10) + moveAmount;
    if (updatedSubIndex < 0) {
      updatedSubIndex = lastIndex;
    } else if (updatedSubIndex > lastIndex) {
      updatedSubIndex = 0;
    }
    // set updated highlightedIndexes
    const updatedIndex = `${depthLevel}_${updatedSubIndex}`;
    this.setHighlightedIndexes(updatedIndex, depthLevel);
  };

  triggerSubOptions = (open = true) => {
    const { highlightedIndexes, depthLevel, listCounts } = this.state;
    const updatedDepthLevel = open ? depthLevel + 1 : depthLevel - 1;
    if (updatedDepthLevel < 0) return;
    // get highlightedIndex in state
    const baseId = highlightedIndexes[depthLevel];
    if (baseId === null) return;
    // prevent update if listCounts length === updatedDepthLevel
    if (listCounts.length === updatedDepthLevel) return;
    // new index
    const updatedIndex = open
      ? `${updatedDepthLevel}_0`
      : highlightedIndexes[updatedDepthLevel];
    // set updated highlightedIndexes and updated depthLevel
    this.handleDepthLevel(updatedDepthLevel);
    this.setHighlightedIndexes(updatedIndex, updatedDepthLevel);
  };

  handleKeyDown = e => {
    const moveAmount = e.shiftKey ? 5 : 1;
    const arrowRightToOpenSubOptions = this.props.direction === 'right';
    switch (e.key) {
      case 'ArrowDown':
        // eslint-disable-next-line no-param-reassign
        e.nativeEvent.preventDownshiftDefault = true;
        this.moveHighlightedIndex(moveAmount);
        break;
      case 'ArrowUp':
        // eslint-disable-next-line no-param-reassign
        e.nativeEvent.preventDownshiftDefault = true;
        this.moveHighlightedIndex(-moveAmount);
        break;
      case 'ArrowRight':
        this.triggerSubOptions(arrowRightToOpenSubOptions);
        break;
      case 'ArrowLeft':
        this.triggerSubOptions(!arrowRightToOpenSubOptions);
        break;
      case ' ':
        toggleMenu();
        break;
      default:
        break;
    }
  };

  handleChange = selection => {
    this.setState({ highlightedIndexes: [] });
    this.props.onChange(selection);
  };

  handleOuterClick = stateAndHelpers => {
    this.setState({ highlightedIndexes: [] });
    this.props.onOuterClick(stateAndHelpers);
  };

  render() {
    const {
      block,
      items,
      selectedItem,
      defaultLabel,
      onChange,
      onOuterClick,
      direction,
      ...remainProps
    } = this.props;
    const { highlightedIndexes } = this.state;
    return (
      <Downshift
        onChange={this.handleChange}
        onOuterClick={this.handleOuterClick}
        itemToString={item => (item ? item.value : '')}
        stateReducer={this.stateReducer}
      >
        {({
          getInputProps,
          getItemProps,
          getToggleButtonProps,
          getRootProps,
          isOpen,
          highlightedIndex,
          selectedItem: dsSelectedItem,
          setHighlightedIndex: dsSetHighlightedIndex,
          toggleMenu: dsToggleMenu,
        }) => {
          setHighlightedIndex = dsSetHighlightedIndex;
          toggleMenu = dsToggleMenu;
          return (
            <Container
              {...getRootProps({ ...remainProps, block, refKey: 'innerRef' })}
            >
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
                  onKeyDown: e => this.handleKeyDown(e),
                })}
              />
              {isOpen && (
                <DropdownList
                  block={block}
                  direction={direction}
                  items={items}
                  highlightedIndex={highlightedIndex}
                  highlightedIndexes={highlightedIndexes}
                  getItemProps={getItemProps}
                  handleDepthLevel={this.handleDepthLevel}
                  handleHighlightedIndexes={this.handleHighlightedIndexes}
                  handleListCounts={this.handleListCounts}
                />
              )}
            </Container>
          );
        }}
      </Downshift>
    );
  }
}

export default Dropdown;
