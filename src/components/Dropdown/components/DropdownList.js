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
    selectedIds: arrayOf(string),
    getItemProps: func,
    handleCurrentDepthLevel: func,
    handleSelectedIds: func,
    handleListCounts: func,
  };

  static defaultProps = {
    highlightedIndex: null,
    selectedIds: [],
    getItemProps: noop,
    handleCurrentDepthLevel: noop,
    handleSelectedIds: noop,
    handleListCounts: noop,
  };

  renderList(items, depthLevel = 0) {
    const {
      highlightedIndex,
      selectedIds,
      getItemProps,
      handleCurrentDepthLevel,
      handleSelectedIds,
      handleListCounts,
    } = this.props;

    return (
      <Container>
        <StyledList hoverable items={items} variant="small">
          {({ data: option, Item, index, getProps }) => {
            const id = `${depthLevel}_${index}`;
            let subOptions;

            if (selectedIds[depthLevel] === id && option.options) {
              const newDepthLevel = depthLevel + 1;
              subOptions = this.renderList(option.options, newDepthLevel);
              handleListCounts(option.options.length, newDepthLevel);
            } else if (selectedIds[depthLevel] === id) {
              handleListCounts(items.length, depthLevel);
            }

            return (
              // keyboard events are handled in parent component
              // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
              <Item
                onMouseEnter={() => handleSelectedIds(id, depthLevel)}
                onMouseOver={() =>
                  !option.options && handleCurrentDepthLevel(depthLevel)
                }
                {...compose(
                  getItemProps,
                  getProps
                )({
                  active: highlightedIndex === id,
                  index: id,
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
