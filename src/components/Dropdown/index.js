import React, { Component } from 'react';
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

import DropdownButton from './components/DropdownButton';
import DropdownList from './components/DropdownList';
import noop from 'utils/noop';

import flag from 'assets/testing.png'; // TODO: remove it later, just for testing

const FlagIcon = styled.img`
  max-width: 24px;
  max-height: 24px;
  vertical-align: middle;
`;

// TODO: Remove it later, just for testing
const items = [
  {
    value: 'Option 1',
    label: 'Option 1',
    icon: <FlagIcon src={flag} />,
    options: [
      {
        value: 'Option 1A',
        label: 'Option 1A',
        icon: <FlagIcon src={flag} />,
      },
      {
        value: 'Option 1B',
        label: 'Option 1B',
        icon: <FlagIcon src={flag} />,
        options: [
          {
            value: 'Option 2A',
            label: 'Option 2A',
            icon: <FlagIcon src={flag} />,
          },
          {
            value: 'Option 2B',
            label: 'Option 2B',
            icon: <FlagIcon src={flag} />,
          },
          {
            value: 'Option 2C',
            label: 'Option 2C',
            icon: <FlagIcon src={flag} />,
          },
        ],
      },
      {
        value: 'Option 1C',
        label: 'Option 1C',
        icon: <FlagIcon src={flag} />,
      },
    ],
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    icon: <FlagIcon src={flag} />,
  },
];

class Dropdown extends Component {
  static propTypes = {
    onChange: func,
  };

  static defaultProps = {
    onChange: noop,
  };

  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.onChange(selectedOption);
  };

  stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        if (changes.selectedItem.options) return state;
        return changes;
      default:
        return changes;
    }
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Downshift
        onChange={this.handleChange}
        itemToString={item => (item ? item.value : '')}
        stateReducer={this.stateReducer}
        // TODO: pass remain props here
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div>
            <DropdownButton
              icon={selectedOption && selectedOption.icon}
              label={selectedOption ? selectedOption.label : 'testing'}
              {...getToggleButtonProps()}
            />
            {console.log(highlightedIndex)}
            {console.log(selectedItem)}
            {isOpen && (
              <DropdownList
                items={items}
                highlightedIndex={highlightedIndex}
                getItemProps={getItemProps}
              />
            )}
          </div>
        )}
      </Downshift>
    );
  }
}

export default Dropdown;
