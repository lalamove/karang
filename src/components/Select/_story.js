import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Select from './index';

class Wrapper extends Component {
  state = {
    selectedItem: {
      ds1: null,
      ds2: null,
    },
  };

  handleOnChange = (selectedItem, dsState) => {
    this.setState({
      selectedItem: {
        ...this.state.selectedItem,
        [dsState.id]: selectedItem,
      },
    });
  };

  render() {
    return (
      <div>
        <Select
          id="ds1"
          label="What is your vehicle type?"
          name="vehicleType"
          itemList={[
            {
              id: 'MOTORCYCLE',
              value: 'Motorcycle',
            },
            {
              id: 'VAN',
              value: 'Van',
            },
          ]}
          selectedItem={this.state.selectedItem.ds1}
          onChange={this.handleOnChange}
          style={{ display: 'block' }}
          required
        />
        <br />
        <Select
          id="ds2"
          label="What is your vehicle type?"
          name="vehicleType"
          itemList={[
            {
              id: 'MOTORCYCLE',
              value: 'Motorcycle',
            },
            {
              id: 'VAN',
              value: 'Van',
            },
          ]}
          selectedItem={this.state.selectedItem.ds2}
          onChange={this.handleOnChange}
          style={{ display: 'block' }}
          error="Error Message"
        />
      </div>
    );
  }
}

storiesOf('Select', module).add('Basic', () => <Wrapper />);
