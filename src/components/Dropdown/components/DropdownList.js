import React, { Component } from 'react';
import {
  arrayOf,
  oneOfType,
  func,
  oneOf,
  number,
  shape,
  string,
} from 'prop-types';
import styled, { css } from 'styled-components';
import { compose } from 'recompose';

import Label from './Label';
import List from 'components/List';
import noop from 'utils/noop';

const StyledList = styled(List)`
  position: absolute;
  z-index: 1;
  top: ${({ nested }) => (nested ? '-8px' : '32px')};

  ${({ nested, direction }) => {
    switch (direction) {
      case 'right':
        return css`
          left: ${nested ? '100%' : '0'};
        `;
      case 'left':
      default:
        return css`
          right: ${nested ? 'calc(100% + 2px)' : '0'};
        `;
    }
  }};
`;

const haveSubOptionStyle = {
  cursor: 'default',
};

class DropdownList extends Component {
  static propTypes = {
    items: arrayOf(shape({})).isRequired, // add shape
    direction: oneOf(['left', 'right']).isRequired,
    highlightedIndex: oneOfType([string, number]),
    highlightedIndexes: arrayOf(string),
    getItemProps: func,
    handleDepthLevel: func,
    handleHighlightedIndexes: func,
    handleListCounts: func,
  };

  static defaultProps = {
    highlightedIndex: null,
    highlightedIndexes: [],
    getItemProps: noop,
    handleDepthLevel: noop,
    handleHighlightedIndexes: noop,
    handleListCounts: noop,
  };

  renderList(items, depthLevel = 0) {
    const {
      direction,
      highlightedIndex,
      highlightedIndexes,
      getItemProps,
      handleDepthLevel,
      handleHighlightedIndexes,
      handleListCounts,
    } = this.props;

    return (
      <StyledList
        hoverable
        items={items}
        variant="small"
        direction={direction}
        nested={depthLevel > 0}
      >
        {({ data: option, Item, index: subIndex, getProps }) => {
          const index = `${depthLevel}_${subIndex}`;
          let subOptions;
          let newDepthLevel;
          const onFocus = highlightedIndexes[depthLevel] === index;
          const haveSubOptions = Boolean(option.options);

          if (onFocus && haveSubOptions) {
            newDepthLevel = depthLevel + 1;
            subOptions = this.renderList(option.options, newDepthLevel);
          }

          return (
            <Item
              {...compose(
                getItemProps,
                getProps
              )({
                active: highlightedIndex === index,
                index,
                item: option,
                icon: option.icon,
                options: subOptions,
                style: subOptions && haveSubOptionStyle,
                onMouseEnter: () => handleHighlightedIndexes(index, depthLevel),
                onMouseOver: () =>
                  !option.options && handleDepthLevel(depthLevel),
              })}
            >
              <Label
                onFocus={onFocus}
                handleListCounts={onFocus ? handleListCounts : undefined}
                count={haveSubOptions ? option.options.length : items.length}
                depthLevel={haveSubOptions ? newDepthLevel : depthLevel}
              >
                {option.label}
              </Label>
            </Item>
          );
        }}
      </StyledList>
    );
  }

  render() {
    const { items } = this.props;
    return this.renderList(items);
  }
}

export default DropdownList;
