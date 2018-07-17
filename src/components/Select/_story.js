/* eslint-disable */
import React, { Component } from 'react';
import { storiesOf, action } from '@storybook/react';
import Select from './index';

class Wrapper extends Component {
  state = {
    selectedItem: null,
  };

  handleOnChange = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <div>
        <Select
          type="text"
          placeholder="What is your vehicle type?"
          name="username"
          value=""
          autoComplete="off"
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
          selectedItem={this.state.selectedItem}
          onClick={e => {
            console.log('clicked');
          }}
          onChange={this.handleOnChange}
        />

        <br />
        <Select
          type="text"
          placeholder="What is your vehicle type?"
          name="username"
          value=""
          autoComplete="off"
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
          selectedItem={this.state.selectedItem}
          onClick={e => {
            console.log('clicked');
          }}
          onChange={this.handleOnChange}
          error="Error Message"
        />
      </div>
    );
  }
}

storiesOf('Select', module).add('Basic', () => <Wrapper />);
