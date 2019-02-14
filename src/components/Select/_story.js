import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Select from './index';

class Wrapper extends Component {
  state = {
    selected1: null,
    selected2: null,
    selected3: null,
  };

  handleOnChange = (selectedItem, name) => {
    this.setState({ [name]: selectedItem });
  };

  render() {
    return (
      <div>
        <Select
          // id="ds1"
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
          selectedItem={this.state.selected1}
          onChange={selected => this.handleOnChange(selected, 'selected1')}
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
          selectedItem={this.state.selected2}
          onChange={selected => this.handleOnChange(selected, 'selected2')}
          error="Error Message"
        />
        <br />
        <Select
          id="ds3"
          label="With disabled item"
          name="vehicleType"
          itemList={[
            {
              id: 'MOTORCYCLE',
              value: 'Motorcycle',
              disabled: true,
            },
            {
              id: 'VAN',
              value: 'Van',
            },
          ]}
          selectedItem={this.state.selected3}
          onChange={selected => this.handleOnChange(selected, 'selected3')}
          disabled
        />
      </div>
    );
  }
}

storiesOf('Select', module).add('Basic', () => <Wrapper />);
