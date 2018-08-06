import React, { Component } from 'react';
import { arrayOf, oneOfType, func, number, shape, string } from 'prop-types';
import styled from 'styled-components';
import { compose } from 'recompose';

import List from 'components/List';
import noop from 'utils/noop';

const Container = styled.div`
  position: relative;
`;

const StyledList = styled(List)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;

class DropdownList extends Component {
  static propTypes = {
    items: arrayOf(shape({})).isRequired, // add shape
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
      highlightedIndex,
      highlightedIndexes,
      getItemProps,
      handleDepthLevel,
      handleHighlightedIndexes,
      handleListCounts,
    } = this.props;

    return (
      <Container>
        <StyledList hoverable items={items} variant="small">
          {({ data: option, Item, index: subIndex, getProps }) => {
            const index = `${depthLevel}_${subIndex}`;
            let subOptions;

            if (highlightedIndexes[depthLevel] === index && option.options) {
              const newDepthLevel = depthLevel + 1;
              subOptions = this.renderList(option.options, newDepthLevel);
              handleListCounts(option.options.length, newDepthLevel);
            } else if (highlightedIndexes[depthLevel] === index) {
              handleListCounts(items.length, depthLevel);
            }

            return (
              // keyboard events are handled in parent component
              // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
              <Item
                onMouseEnter={() => handleHighlightedIndexes(index, depthLevel)}
                onMouseOver={() =>
                  !option.options && handleDepthLevel(depthLevel)
                }
                {...compose(
                  getItemProps,
                  getProps
                )({
                  active: highlightedIndex === index,
                  index,
                  item: option,
                  icon: option.icon,
                  options: subOptions,
                })}
              >
                {option.label}
              </Item>
            );
          }}
        </StyledList>
      </Container>
    );
  }

  render() {
    const { items } = this.props;
    return this.renderList(items);
  }
}

export default DropdownList;
