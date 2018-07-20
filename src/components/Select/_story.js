/* eslint-disable */
import React, { Component } from 'react';
import { storiesOf, action } from '@storybook/react';
import Select from './index';

class Wrapper extends Component {
  state = {
    selectedItem: {
      ds1: null,
      ds2: null,
    },
    dirty: {
      ds1: false,
      ds2: false,
    },
  };

  handleOnChange = (selectedItem, dsState) => {
    this.setState({
      selectedItem: {
        ...this.state.selectedItem,
        [dsState.id]: selectedItem,
      },
      dirty: {
        ...this.state.dirty,
        [dsState.id]: true,
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
          selectedItem={this.state.selectedItem['ds1']}
          onChange={this.handleOnChange}
          onFocus={e => {
            console.log(e.target);
          }}
          dirty={this.state.dirty['ds1']}
          required
        />

        <br />
        <Select
          id='ds2'
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
          selectedItem={this.state.selectedItem['ds2']}
          onFocus={e => {
            console.log(e.target);
          }}
          onChange={this.handleOnChange}
          error="Error Message"
          dirty={this.state.dirty['ds2']}
        />
      </div>
    );
  }
}

storiesOf('Select', module).add('Basic', () => <Wrapper />);
