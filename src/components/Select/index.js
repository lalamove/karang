import React, { Component } from 'react';
import {
  arrayOf,
  bool,
  func,
  oneOfType,
  node,
  number,
  string,
  shape,
} from 'prop-types';
import Downshift from 'downshift';
import styled from 'styled-components';

import AnimatedBorder from 'components/AnimatedBorder';
import ErrorMessage from 'components/ErrorMessage';
import DropDownIcon from 'components/Icon/icons/arrows/dropdown';
import List from 'components/List';

import noop from 'utils/noop';
import { mineShaft, nobel } from 'styles/colors';
import { primaryFonts } from 'styles/fonts';
import { DROPDOWN, GROUND } from 'styles/zIndex';

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
  align-items: flex-end;
  width: 100%;
  padding: 10px;
  border: none;
  background: transparent;
  color: ${mineShaft['900']};
  outline: none;

  ${({ disabled }) => disabled && `cursor: not-allowed;`};
`;

const CustomIcon = styled.span`
  flex: 0 0 auto;
  align-self: center;
  margin-right: 0.5em;
  line-height: 1.6;
`;

const Content = styled.span`
  flex: 1 1 auto;
  font-family: ${primaryFonts};
  line-height: 1.6;
  text-align: left;
`;

const Caret = styled.span`
  margin-right: -5px;
  color: ${nobel.main};
`;

const StyledList = styled(List)`
  position: absolute;
  z-index: ${DROPDOWN};
  top: calc(100% + 1px);
  left: 0;
  width: 100%;

  li[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  z-index: ${GROUND + 1};
  right: 0;
  left: 0;
`;

class Select extends Component {
  static propTypes = {
    /** Id of the component */
    id: string,
    /** Name of the component */
    name: string,
    /** Label of the component */
    label: string,
    /** Error message of the component */
    error: string,
    /** The currently selected item */
    selectedItem: shape({
      /** @deprecated */
      id: oneOfType([string, number]), // For backward compatible
      /** Element shown next to label */
      icon: node,
      /** Value of the option */
      value: string,
      /** Label of the option for users */
      label: string,
    }),
    /** Select items */
    items: arrayOf(
      shape({
        /** @deprecated */
        id: oneOfType([string, number]), // For backward compatible
        /** Element shown next to label */
        icon: node,
        /** Value of the option */
        value: string,
        /** Label of the option for users */
        label: string,
      })
    ),
    /** @deprecated Please use `items` */
    itemList: arrayOf(
      shape({
        /** @deprecated */
        id: oneOfType([string, number]), // For backward compatible
        /** Element shown next to label */
        icon: node,
        /** Value of the option */
        value: string,
        /** Label of the option for users */
        label: string,
      })
    ),
    /** For backward compatible only, append `data-required` to the select if it is `true` */
    required: bool,
    /** Disable the select if it is `true` */
    disabled: bool,
    /**
     * Callback function, to be executed when user selected an item and it has changed
     *
     * @param {any} selectedItem
     * @param {object} stateAndHelpers
     */
    onChange: func,
    /**
     * Callback function, to be executed when user trigger to open select dropdown
     *
     * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
     */
    onFocus: func,
    /**
     * Callback function, to be executed when user leave the select dropdown
     *
     * @param {SyntheticEvent} event https://reactjs.org/docs/events.html
     */
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

  componentDidMount() {
    const { itemList } = this.props;
    if (itemList.length) {
      // eslint-disable-next-line no-console
      console.warn(
        '[Select] prop `itemList` deprecated. Please check documentation for better' +
          ' alternative.'
      );
    }
  }

  onFocus = e => {
    const { onFocus } = this.props;
    this.setState({ focused: true });
    onFocus(e);
  };

  onBlur = e => {
    const { onBlur } = this.props;
    this.setState({ focused: false });
    onBlur(e);
  };

  render() {
    const { focused } = this.state;
    const {
      name,
      label,
      error,
      items,
      itemList, // For backward compatible
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
            id={id} // For backward compatible
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
                    'data-required': required, // For backward compatible
                    onBlur: this.onBlur,
                    onFocus: this.onFocus,
                    disabled,
                  })}
                >
                  {selectedItem &&
                    selectedItem.icon && (
                      <CustomIcon>{selectedItem.icon}</CustomIcon>
                    )}
                  <Content>
                    {selectedItem && (selectedItem.label || selectedItem.value)}
                  </Content>
                  <Caret>
                    <DropDownIcon size={24} />
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
                        {data.icon} {data.label || data.value}
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
