import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import styled from 'styled-components';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import noop from 'utils/noop';
import { compose } from 'recompose';
import withAnimatedContainer from 'hoc/withAnimatedContainer';
import withErrorMessage from 'hoc/withErrorMessage';

const ItemList = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  left: -1px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.4);
`;

const Item = styled.div`
  border-left: 2px solid #fff;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#f2f2f2' : '#FFF')};
  border-left-color: ${({ isActive }) => (isActive ? '#f16622' : '#FFF')};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  width: 100%;
  &:hover,
  &:focus {
    background-color: #f2f2f2;
    border-left-color: #f16622;
  }
  line-height: 32px;
  height: 32px;
`;

const ItemTextWrap = styled.span`
  padding-left: 4px;
`;

const Button = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
`;

const ButtonContent = styled.div`
  width: 100%;
  color: #58595b;
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
    id: PropTypes.string,
    itemList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    selectedItem: PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
    }),
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    required: PropTypes.bool,
  };

  static defaultProps = {
    id: null,
    onFocus: noop,
    onBlur: noop,
    selectedItem: null,
    required: false,
  };

  render() {
    const {
      itemList,
      selectedItem,
      onChange,
      onFocus,
      onBlur,
      id,
      required,
    } = this.props;

    return (
      <Fragment>
        <Downshift
          onChange={onChange}
          itemToString={item => (item !== null ? item.value : null)}
          id={id}
        >
          {({
            isOpen,
            getToggleButtonProps,
            getItemProps,
            highlightedIndex,
          }) => (
            <div
              style={{
                width: '100%',
                padding: '12px',
              }}
            >
              <Button
                {...getToggleButtonProps({
                  onFocus,
                  onBlur,
                  required,
                })}
              >
                <ButtonContent>
                  <LeftSpan>{`${
                    selectedItem !== null ? selectedItem.value : ''
                  }`}</LeftSpan>
                  <RightSpan>
                    <FaAngleDown fill="#b4b4b4" height="24px" width="24px" />
                  </RightSpan>
                </ButtonContent>
              </Button>
              <div>
                {isOpen && (
                  <ItemList>
                    {itemList.map((item, index) => (
                      <Item
                        {...getItemProps({
                          item,
                          isActive: highlightedIndex === index,
                        })}
                        key={item.id}
                      >
                        <ItemTextWrap>{item.value}</ItemTextWrap>
                      </Item>
                    ))}
                  </ItemList>
                )}
              </div>
            </div>
          )}
        </Downshift>
      </Fragment>
    );
  }
}

export default compose(
  withErrorMessage,
  withAnimatedContainer
)(Select);
