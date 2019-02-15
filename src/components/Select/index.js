import React, { Component } from 'react';
import {
  string,
  arrayOf,
  shape,
  func,
  bool,
  oneOfType,
  number,
} from 'prop-types';
import Downshift from 'downshift';
import styled from 'styled-components';

import AnimatedBorder from 'components/AnimatedBorder';
import ErrorMessage from 'components/ErrorMessage';
import Icon from 'components/Icon';
import List from 'components/List';

import noop from 'utils/noop';
import { mineShaft, nobel } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';

const Wrapper = styled.div`
  position: relative;
  display: block;

  ${({ error }) => error && `padding-bottom: 2em;`};
`;

const Container = styled.div`
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 1em;
  color: ${mineShaft['500']};
  border: none;
  background: transparent;
  outline: none;

  ${({ disabled }) => disabled && `cursor: not-allowed;`};
`;

const StyledList = styled(List)`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 400; // TODO: z-index
  width: 100%;

  li[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Content = styled.span`
  flex: 1 1 auto;
  color: ${mineShaft['900']};
  font-family: ${primaryFonts};
  line-height: 1.6;
  text-align: left;
`;

const Caret = styled.span`
  margin-right: -5px;
  color: ${nobel.main};
`;

const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  z-index: 1;
  right: 0;
  left: 0;
`;

class Select extends Component {
  static propTypes = {
    id: string,
    name: string,
    label: string,
    error: string,
    selectedItem: shape({
      id: oneOfType([string, number]), // For backward compilable
      value: string,
      label: string,
    }),
    items: arrayOf(
      shape({
        id: oneOfType([string, number]), // For backward compilable
        value: string,
        label: string,
      })
    ),
    itemList: arrayOf(
      shape({
        id: oneOfType([string, number]), // For backward compilable
        value: string,
        label: string,
      })
    ),
    required: bool,
    disabled: bool,
    onChange: func,
    onFocus: func,
    onBlur: func,
  };

  static defaultProps = {
    id: null,
    name: null,
    label: null,
    error: null,
    selectedItem: null,
    items: [],
    itemList: [],
    required: false,
    disabled: false,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
  };

  state = {
    focused: false,
  };

  onFocus = e => {
    this.setState({ focused: true });
    this.props.onFocus(e);
  };

  onBlur = e => {
    this.setState({ focused: false });
    this.props.onBlur(e);
  };

  render() {
    const { focused } = this.state;
    const {
      name,
      label,
      error,
      items,
      itemList, // For backward compilable
      selectedItem,
      onChange,
      onFocus,
      onBlur,
      id,
      required,
      disabled,
      ...props
    } = this.props;
    // TODO: getInputProps
    return (
      <Wrapper error={error}>
        <AnimatedBorder
          name={name}
          label={label}
          focused={focused}
          dirty={!!selectedItem}
          error={!!error}
          disabled={disabled}
        >
          <Downshift
            id={id} // For backward compilable
            selectedItem={selectedItem}
            onChange={onChange}
            itemToString={item => (item ? item.value : '')}
          >
            {({ isOpen, getToggleButtonProps, getItemProps, getRootProps }) => (
              <Container
                {...getRootProps({ name, ...props, refKey: 'innerRef' })}
              >
                <Button
                  {...getToggleButtonProps({
                    'data-required': required, // For backward compilable
                    onBlur: this.onBlur,
                    onFocus: this.onFocus,
                    disabled,
                  })}
                >
                  <Content>
                    {selectedItem && (selectedItem.label || selectedItem.value)}
                  </Content>
                  <Caret>
                    <Icon type="dropdown" size={24} />
                  </Caret>
                </Button>
                {isOpen && (
                  <StyledList
                    hoverable
                    size="small"
                    items={items.length ? items : itemList}
                    render={({ data, Item, getProps }) => (
                      <Item
                        {...getProps()}
                        {...getItemProps({
                          key: data.value,
                          item: data,
                          disabled: data.disabled,
                        })}
                      >
                        {data.label || data.value}
                      </Item>
                    )}
                  />
                )}
              </Container>
            )}
          </Downshift>
        </AnimatedBorder>
        <StyledErrorMessage error={error} />
      </Wrapper>
    );
  }
}

export default Select;
