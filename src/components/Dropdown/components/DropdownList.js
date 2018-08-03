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
    // highlightedIndex: oneOfType([string, number]).isRequired,
    getItemProps: func,
  };

  static defaultProps = {
    getItemProps: noop,
  };

  state = {
    selectedIds: [],
  };

  handleSelectedId = (selected, depthLevel) => {
    const updatedArray = this.state.selectedIds.slice(0);
    updatedArray[depthLevel] = selected;
    // console.log(updatedArray);
    this.setState({ selectedIds: updatedArray });
  };

  renderList(items, getItemProps, depthLevel = 0) {
    return (
      <Container>
        <StyledList
          hoverable
          items={items}
          variant="small"
          nested={depthLevel !== 0}
        >
          {({ data: option, Item, index, getProps }) => {
            const id = `${depthLevel}_${index}`;
            let subOptions;

            if (this.state.selectedIds[depthLevel] === id && option.options) {
              subOptions = this.renderList(
                option.options,
                // highlightedIndex,
                getItemProps,
                depthLevel + 1
              );
            }

            return (
              <Item
                onMouseEnter={() => this.handleSelectedId(id, depthLevel)}
                {...compose(
                  getItemProps,
                  getProps
                )({
                  // active: highlightedIndex === index,
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
    const {
      items,
      // highlightedIndex,
      getItemProps,
      ...remainProps
    } = this.props;
    return this.renderList(items, getItemProps);
  }
}

export default DropdownList;
