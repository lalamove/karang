import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Select from './index';

const items = [
  {
    value: 'MOTORCYCLE',
    label: 'Motorcycle',
  },
  {
    value: 'VAN',
    label: 'Van',
  },
];

class Wrapper extends Component {
  state = {
    selected1: null,
    selected2: items[0],
    selected3: null,
  };

  handleOnChange = (selectedItem, name) => {
    this.setState({ [name]: selectedItem });
  };

  render() {
    return (
      <div>
        <h4>Basic</h4>
        <Select
          label="What is your vehicle type?"
          name="vehicleType"
          items={items}
          selectedItem={this.state.selected1}
          onChange={selected => this.handleOnChange(selected, 'selected1')}
          required
        />
        <h4>With error message</h4>
        <Select
          label="What is your vehicle type?"
          name="vehicleType"
          items={items}
          selectedItem={this.state.selected2}
          onChange={selected => this.handleOnChange(selected, 'selected2')}
          error="Error Message"
        />
        <h4>With disabled item</h4>
        <Select
          label="With disabled item"
          name="vehicleType"
          items={[
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
        />
      </div>
    );
  }
}

storiesOf('Select', module).add('Basic', () => <Wrapper />);
