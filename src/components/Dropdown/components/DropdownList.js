import React, { Component } from 'react';
import {
  arrayOf,
  oneOfType,
  func,
  oneOf,
  number,
  shape,
  string,
  bool,
} from 'prop-types';
import styled, { css } from 'styled-components';

import List from 'components/List';

import compose from 'utils/compose';
import noop from 'utils/noop';
import { DROPDOWN } from 'styles/zIndex';

import Label from './Label';

const StyledList = styled(List)`
  position: absolute;
  z-index: ${DROPDOWN};
  top: ${({ nested }) => (nested ? '-8px' : '100%')};
  width: auto;
  white-space: nowrap;

  ${({ nested, direction, theme: { rtl } }) => {
    switch (direction) {
      case 'left':
        return rtl
          ? css`
              right: ${nested ? '100%' : '0'};
            `
          : css`
              right: ${nested ? 'calc(100% + 2px)' : '0'};
            `;
      case 'right':
        return rtl
          ? css`
              left: ${nested ? 'calc(100% + 2px)' : '0'};
            `
          : css`
              left: ${nested ? '100%' : '0'};
            `;
      default:
        return rtl
          ? css`
              right: ${nested ? '100%' : '0'};
            `
          : css`
              left: ${nested ? '100%' : '0'};
            `;
    }
  }};
  ${({ nested, theme: { rtl } }) =>
    rtl &&
    !nested &&
    css`
      right: 0;
    `}
  ${({ block, nested }) =>
    block &&
    !nested &&
    css`
      width: 100%;
    `};
`;

const haveSubOptionStyle = {
  cursor: 'default',
};

class DropdownList extends Component {
  static propTypes = {
    block: bool,
    items: arrayOf(shape({})).isRequired, // add shape
    direction: oneOf(['left', 'right', 'auto']),
    highlightedIndex: oneOfType([string, number]),
    highlightedIndexes: arrayOf(string),
    getItemProps: func,
    handleDepthLevel: func,
    handleHighlightedIndexes: func,
    handleListCounts: func,
  };

  static defaultProps = {
    block: false,
    highlightedIndex: null,
    highlightedIndexes: [],
    getItemProps: noop,
    handleDepthLevel: noop,
    handleHighlightedIndexes: noop,
    handleListCounts: noop,
    direction: 'auto',
  };

  renderList(items, depthLevel = 0) {
    const {
      block,
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
        block={block}
        hoverable
        items={items}
        size="small"
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
                disabled: option.disabled,
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
