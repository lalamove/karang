import React, { Component, forwardRef } from 'react';
import {
  string,
  arrayOf,
  shape,
  func,
  bool,
  oneOfType,
  object,
} from 'prop-types';
import Downshift from 'downshift';
import styled from 'styled-components';
import { compose } from 'recompose';

import noop from 'utils/noop';
import DropDownIcon from 'icons/DropDownIcon';
import withAnimatedContainer from 'hoc/withAnimatedContainer';
import withErrorMessage from 'hoc/withErrorMessage';
import { orange, gray, lightGray, white, veryLightGray } from 'styles/colors';

const ItemList = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  left: -1px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.4);
`;

const Item = styled.div`
  border-left: 2px solid ${({ isActive }) => (isActive ? orange : white)};
  cursor: pointer;
  width: 100%;
  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    background-color: ${veryLightGray};
    border-left-color: ${orange};
  }
  line-height: 40px;
  height: 40px;
  background: ${white};
  &[disabled] {
    color: ${lightGray};
  }
`;

const ItemContent = styled.span`
  padding-left: 10px;
`;

const Button = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  padding: 12px;
  color: ${gray};
`;

const LeftSpan = styled.span`
  float: left;
  line-height: 24px;
  height: 24px;
`;

const RightSpan = styled.span`
  float: right;
`;

class Select extends Component {
  static propTypes = {
    innerRef: oneOfType([func, object]),
    id: string.isRequired,
    itemList: arrayOf(
      shape({
        id: string,
        value: string,
      })
    ).isRequired,
    selectedItem: shape({
      id: string,
      value: string,
    }),
    onChange: func,
    onFocus: func,
    onBlur: func,
    required: bool,
  };

  static defaultProps = {
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    selectedItem: null,
    innerRef: null,
    required: false,
  };

  render() {
    const {
      innerRef,
      itemList,
      selectedItem,
      onChange,
      onFocus,
      onBlur,
      id,
      required,
      ...remainProps
    } = this.props;

    return (
      <Downshift
        id={id}
        onChange={onChange}
        itemToString={item => (item !== null ? item.value : null)}
        {...remainProps}
      >
        {({ isOpen, getToggleButtonProps, getItemProps, highlightedIndex }) => (
          <div style={{ width: '100%' }}>
            <Button
              {...getToggleButtonProps({
                onFocus,
                onBlur,
                'data-required': required,
                'data-name': id,
              })}
              innerRef={innerRef}
              value={selectedItem !== null ? selectedItem.value : ''}
            >
              <LeftSpan>{`${
                selectedItem !== null ? selectedItem.value : ''
              }`}</LeftSpan>
              <RightSpan>
                <DropDownIcon color={lightGray} size={24} />
              </RightSpan>
            </Button>
            {isOpen && (
              <ItemList>
                {itemList.map((item, index) => (
                  <Item
                    {...getItemProps({
                      item,
                      disabled: item.disabled,
                    })}
                    key={item.id}
                  >
                    <ItemContent>{item.value}</ItemContent>
                  </Item>
                ))}
              </ItemList>
            )}
          </div>
        )}
      </Downshift>
    );
  }
}

const SelectWithRef = forwardRef((props, ref) => (
  <Select {...props} innerRef={ref} />
));

const EnhancedComp = compose(
  withErrorMessage,
  withAnimatedContainer
)(SelectWithRef);

export default EnhancedComp;
