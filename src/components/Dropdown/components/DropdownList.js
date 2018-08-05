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
    getItemProps: func,
    setItemsCount: func,
  };

  static defaultProps = {
    getItemProps: noop,
    setItemsCount: noop,
    highlightedIndex: null,
  };

  state = {
    selectedIds: [],
  };

  // onMouseEnter = (selectedId, depthLevel, count) => {
  //   this.handleSelectedId(selectedId, depthLevel);
  //   this.props.setItemsCount(depthLevel, count);
  // };

  handleSelectedId = (selectedId, depthLevel) => {
    const updatedArray = [...this.state.selectedIds];
    updatedArray[depthLevel] = selectedId;
    this.setState({ selectedIds: updatedArray });
  };

  setItemsCount = (depthLevel, count, id) => {
    console.log('setItemsCount');
    console.log(depthLevel, count);
    console.log(id);
    this.props.setItemsCount(depthLevel, count, id);
  };

  renderList(items, depthLevel = 0) {
    const { highlightedIndex, getItemProps } = this.props;

    return (
      <Container>
        <StyledList hoverable items={items} variant="small">
          {({ data: option, Item, index, getProps }) => {
            const id = `${depthLevel}_${index}`;
            let subOptions;

            if (this.state.selectedIds[depthLevel] === id && option.options) {
              subOptions = this.renderList(option.options, depthLevel + 1);
            }

            return (
              <Item
                onMouseEnter={() => this.handleSelectedId(id, depthLevel)}
                onMouseOver={() =>
                  !option.options &&
                  this.setItemsCount(depthLevel, items.length, id)
                }
                onFocus={() =>
                  !option.options &&
                  this.setItemsCount(depthLevel, items.length, id)
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
                {highlightedIndex}
                {option.label}
              </Item>
            );
          }}
        </StyledList>
      </Container>
    );
  }

  render() {
    const { items, ...remainProps } = this.props;
    return this.renderList(items);
  }
}

export default DropdownList;
